window.detectDarkMode = () => {
    return window.matchMedia &&
        wind.matchMedia('(prefers-color-scheme: dark)').matches;
};