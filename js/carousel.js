// Rolagem horizontal dos carrosséis (timeline e conquistas da página Sobre).
// A rolagem nativa com scroll-snap continua funcionando por toque, trackpad e teclado;
// este helper só atende aos botões anterior/próximo.
window.carousel = {
    scroll: function (element, direction) {
        if (!element) {
            return;
        }
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        element.scrollBy({
            left: direction * element.clientWidth * 0.8,
            behavior: reduceMotion ? "auto" : "smooth"
        });
    }
};
