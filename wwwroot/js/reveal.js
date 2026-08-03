window.reveal = {
  observer: null,
  bootstrapObserver: null,
  initialized: false,

  init: function () {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));

    if (!elements.length) {
      window.reveal.waitForContent();
      return;
    }

    window.reveal.initialized = true;

    if (window.reveal.bootstrapObserver) {
      window.reveal.bootstrapObserver.disconnect();
      window.reveal.bootstrapObserver = null;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    if (window.reveal.observer) {
      window.reveal.observer.disconnect();
    }

    window.reveal.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            window.reveal.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((element, index) => {
      if (!element.style.getPropertyValue("--reveal-delay")) {
        element.style.setProperty("--reveal-delay", `${index * 90}ms`);
      }

      window.reveal.observer.observe(element);
    });
  },

  waitForContent: function () {
    if (window.reveal.bootstrapObserver || window.reveal.initialized) {
      return;
    }

    const root = document.getElementById("app") || document.body;

    window.reveal.bootstrapObserver = new MutationObserver(() => {
      const elements = document.querySelectorAll("[data-reveal]");

      if (elements.length) {
        window.reveal.init();
      }
    });

    window.reveal.bootstrapObserver.observe(root, {
      childList: true,
      subtree: true,
    });
  },
};

window.addEventListener("load", () => {
  window.requestAnimationFrame(() => window.reveal.init());
});