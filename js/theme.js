window.theme = {
    toggle: function () {
        const current = document.documentElement.getAttribute("data-theme");
        const newTheme = current === "light" ? "dark" : "light";

        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme);

        return newTheme;
    },

    load: function () {
        const saved = localStorage.getItem("theme") || "dark";
        document.documentElement.dataset.theme = saved;
        return saved;
    }
};
