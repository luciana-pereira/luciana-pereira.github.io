// Preferências do visitante (idioma, menu recolhido) guardadas no localStorage.
// Em navegação privada ou com storage bloqueado, as funções falham em silêncio e o site usa os padrões.
window.preferences = {
    get: function (key) {
        try {
            return localStorage.getItem(key);
        } catch {
            return null;
        }
    },
    set: function (key, value) {
        try {
            localStorage.setItem(key, value);
        } catch {
            // Sem storage: a preferência vale só nesta sessão.
        }
    },
    // Atualiza <html lang>, usado por leitores de tela e pelo hifenizador do navegador.
    setDocumentLanguage: function (lang) {
        document.documentElement.lang = lang;
    }
};
