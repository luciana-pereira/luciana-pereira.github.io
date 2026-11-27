// Rolagem suave até um elemento da própria página.
// Links "#id" passam pelo roteador do Blazor e, com <base href="/">, não rolam até o alvo.
window.pageScroll = {
    toId: function (id) {
        var target = document.getElementById(id);
        if (!target) {
            return;
        }

        var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    },

    // Abre o <details> com o id (ou que contém o elemento) e rola até ele. Usado nos links de ADR.
    // Imagens e fontes acima do alvo mudam a altura da página ao carregar; por isso a rolagem
    // espera esse carregamento (até 3 s) e é instantânea, para parar exatamente no topo
    // (respeitando o scroll-margin-top do alvo). Se a pessoa rolar antes, a espera é cancelada.
    reveal: function (id) {
        var target = document.getElementById(id);
        if (!target) {
            return false;
        }

        var details = target.closest("details");
        if (details) {
            details.open = true;
        }

        var cancelled = false;
        var cancel = function () { cancelled = true; };
        window.addEventListener("wheel", cancel, { passive: true, once: true });
        window.addEventListener("touchstart", cancel, { passive: true, once: true });

        var pending = Array.prototype.slice.call(document.images).filter(function (img) {
            return !img.complete;
        });
        var waits = pending.map(function (img) {
            img.loading = "eager";
            return new Promise(function (resolve) {
                img.addEventListener("load", resolve, { once: true });
                img.addEventListener("error", resolve, { once: true });
            });
        });
        if (document.fonts && document.fonts.ready) {
            waits.push(document.fonts.ready);
        }

        var align = function () {
            if (!cancelled && target.isConnected) {
                target.scrollIntoView({ behavior: "auto", block: "start" });
            }
        };
        var finish = function () {
            window.removeEventListener("wheel", cancel);
            window.removeEventListener("touchstart", cancel);
        };

        var timeout = new Promise(function (resolve) { setTimeout(resolve, 3000); });
        Promise.race([Promise.all(waits), timeout]).then(function () {
            window.requestAnimationFrame(align);

            // Algo acima ainda pode mudar de altura (imagem sem tamanho fixo, por exemplo):
            // durante 2 s, se a página mudar de tamanho, realinha o alvo.
            if (!("ResizeObserver" in window)) {
                finish();
                return;
            }
            var observer = new ResizeObserver(function () { window.requestAnimationFrame(align); });
            observer.observe(document.body);
            setTimeout(function () {
                observer.disconnect();
                finish();
            }, 2000);
        });
        return true;
    },

    // Sumário com seção ativa: marca com aria-current o item [data-section] do nav.
    // Ativa = a última seção cujo topo já passou de 30% da janela. Depois de um clique no
    // sumário, o item clicado fica ativo até a próxima rolagem feita pela pessoa, porque as
    // seções do fim da página podem não conseguir chegar ao topo.
    // Só altera aria-current, que o Blazor não renderiza nesses itens.
    _cleanup: null,

    observeSections: function (navId) {
        this.stopObserving();
        var nav = document.getElementById(navId);
        if (!nav) {
            return;
        }

        var links = Array.prototype.slice.call(nav.querySelectorAll("[data-section]"));
        var forced = null;
        var frame = 0;

        var setActive = function (id) {
            links.forEach(function (link) {
                if (link.getAttribute("data-section") === id) {
                    link.setAttribute("aria-current", "true");
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        };

        var update = function () {
            frame = 0;
            if (forced) {
                setActive(forced);
                return;
            }
            var line = window.innerHeight * 0.3;
            var active = links.length ? links[0].getAttribute("data-section") : null;
            links.forEach(function (link) {
                var id = link.getAttribute("data-section");
                var section = document.getElementById(id);
                if (section && section.getBoundingClientRect().top <= line) {
                    active = id;
                }
            });
            setActive(active);
        };

        var onScroll = function () {
            if (!frame) {
                frame = window.requestAnimationFrame(update);
            }
        };
        var onUserScroll = function () { forced = null; };
        var onClick = function (event) {
            var link = event.target.closest("[data-section]");
            if (link) {
                forced = link.getAttribute("data-section");
                setActive(forced);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        window.addEventListener("wheel", onUserScroll, { passive: true });
        window.addEventListener("touchstart", onUserScroll, { passive: true });
        window.addEventListener("keydown", onUserScroll);
        nav.addEventListener("click", onClick);
        update();

        this._cleanup = function () {
            if (frame) {
                window.cancelAnimationFrame(frame);
            }
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            window.removeEventListener("wheel", onUserScroll);
            window.removeEventListener("touchstart", onUserScroll);
            window.removeEventListener("keydown", onUserScroll);
            nav.removeEventListener("click", onClick);
        };
    },

    stopObserving: function () {
        if (this._cleanup) {
            this._cleanup();
            this._cleanup = null;
        }
    }
};
