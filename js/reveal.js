window.reveal = {
    observer: null,
    mutationObserver: null,
    initialized: false,

    init: function () {
        const elements = Array.from(
            document.querySelectorAll("[data-reveal]")
        );

        if (!elements.length) {
            return;
        }

        const prefersReducedMotion =
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (
            !window.reveal.observer &&
            !prefersReducedMotion &&
            ("IntersectionObserver" in window)
        ) {
            window.reveal.observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("is-revealed");

                            window.reveal.observer.unobserve(
                                entry.target
                            );
                        }
                    });
                },
                {
                    threshold: 0.15,
                    rootMargin: "0px 0px -10% 0px"
                }
            );
        }

        elements.forEach((element, index) => {

            if (element.classList.contains("is-revealed")) {
                return;
            }

            if (!element.style.getPropertyValue("--reveal-delay")) {
                element.style.setProperty(
                    "--reveal-delay",
                    `${index * 90}ms`
                );
            }

            if (
                prefersReducedMotion ||
                !("IntersectionObserver" in window)
            ) {
                element.classList.add("is-revealed");
                return;
            }

            window.reveal.observer.observe(element);
        });

        window.reveal.initialized = true;
    },

    watch: function () {

        if (window.reveal.mutationObserver) {
            return;
        }

        const root =
            document.getElementById("app") ||
            document.body;

        window.reveal.mutationObserver =
            new MutationObserver((mutations) => {

                let hasNewElements = false;

                for (const mutation of mutations) {

                    if (mutation.type !== "childList") {
                        continue;
                    }

                    for (const node of mutation.addedNodes) {

                        if (node.nodeType !== Node.ELEMENT_NODE) {
                            continue;
                        }

                        if (
                            node.matches?.("[data-reveal]") ||
                            node.querySelector?.("[data-reveal]")
                        ) {
                            hasNewElements = true;
                            break;
                        }
                    }

                    if (hasNewElements) {
                        break;
                    }
                }

                if (hasNewElements) {
                    window.requestAnimationFrame(() => {
                        window.reveal.init();
                    });
                }
            });

        window.reveal.mutationObserver.observe(root, {
            childList: true,
            subtree: true
        });
    }
};

window.addEventListener("load", () => {

    window.requestAnimationFrame(() => {

        window.reveal.init();
        window.reveal.watch();

    });

});
