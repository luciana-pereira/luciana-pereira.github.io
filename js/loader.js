window.loader = {
  start: () => {
    let progress = 0;

    const progressBar = document.querySelector(".loader-progress");

    const percentage = document.getElementById("loader-text");

    const interval = setInterval(() => {
      progress++;

      if (progressBar) progressBar.style.width = `${progress}%`;

      if (percentage) percentage.innerText = `${progress}%`;

      if (progress >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          const loader = document.getElementById("initial-loader");

          if (loader) {
            loader.classList.add("hide");

            setTimeout(() => {
              loader.remove();
            }, 600);
          }

          document.body.classList.remove("loading");
        }, 300);
      }
    }, 20);
  },
};

window.addEventListener("load", () => {
  window.loader.start();
});
