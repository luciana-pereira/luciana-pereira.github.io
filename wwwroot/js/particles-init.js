window.loadParticles = () => {
  if (!window.particlesJS) {
    console.error("particles.js não carregou");
    return;
  }

  particlesJS.load("particles-js", "particles.json", function () {
    console.log("particles carregado");
  });
};
