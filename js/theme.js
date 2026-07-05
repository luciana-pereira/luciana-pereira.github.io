globalThis.theme = {
  toggle: () => {
    const current = document.documentElement.dataset.theme;

    const next = current === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = next;

    localStorage.setItem("theme", next);

    return next;
  },

  load: () => {
    const savedTheme = localStorage.getItem("theme") || "dark";

    document.documentElement.dataset.theme = savedTheme;

    return savedTheme;
  },
};
