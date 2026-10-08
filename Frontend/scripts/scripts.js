const servicos = document.querySelectorAll(".servico");
const detalhes = document.querySelector("#detalhes-servico");



/* Smart Header */

/* === Smart Header === */

const header = document.querySelector("header");
const reopenButton = document.querySelector(".header-reopen");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

let lastScrollY = window.scrollY;

function showHeader() {
    header.classList.remove("header-hidden");
    reopenButton.classList.remove("visible");
}

function hideHeader() {
    // No ocultar el header cuando estamos al inicio de la página
    if (window.scrollY <= 80) {
        showHeader();
        return;
    }

    header.classList.add("header-hidden");
    reopenButton.classList.add("visible");

    // Cierra el menú móvil cuando se oculta el header
    nav.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
}

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 80) {
        showHeader();
    } else if (currentScrollY > lastScrollY) {
        // Bajando por la página
        hideHeader();
    } else if (currentScrollY < lastScrollY) {
        // Subiendo por la página
        showHeader();
    }

    lastScrollY = currentScrollY;
}, { passive: true });

/* Mostrar el header al acercar el mouse al borde superior */
document.addEventListener("mousemove", (event) => {
    if (event.clientY <= 20) {
        showHeader();
    }
});

/* Reabrir el header al pulsar la pestaña */
reopenButton.addEventListener("click", showHeader);

/* === Menu hamburguesa para celulares === */

menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("menu-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );

    // Si el header estaba oculto, mostrarlo
    showHeader();
});

/* Cerrar el menú móvil al elegir una sección */
nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});

/* Permitir cerrar el menú móvil con Escape */
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        nav.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    }
});

/* Smart Serviços */
const conteudos = {

    corte: `
        <h2>O corte certo muda tudo</h2>
        <p>
            Nossas cabeleireiras analisam o formato do seu rosto,
            textura e estilo de vida para criar um corte que
            realce o que há de mais bonito em você.
        </p>

        <button>QUERO AGENDAR</button>
    `,

    coloracao: `
        <h2>Uma nova cor para você</h2>
        <p>
            Trabalhamos com técnicas de coloração,
            mechas, balayage e outros estilos.
        </p>

        <button>QUERO AGENDAR</button>
    `,

    manicure: `
        <h2>Unhas perfeitas</h2>
        <p>
            Cuidados para suas unhas com esmaltes,
            acrílico, fibra e nail art.
        </p>

        <button>QUERO AGENDAR</button>
    `,

    tratamentos: `
        <h2>Cuidados para seus cabelos</h2>
        <p>
            Hidratação, cronograma capilar, botox
            e cauterização.
        </p>

        <button>QUERO AGENDAR</button>
    `
};

servicos.forEach(servico =>{
    servico.addEventListener("click", () => {
        const tipo = servico.dataset.servico;
        console.log(tipo)
        servicos.forEach(item => {
            item.classList.remove("ativo");
        });

        servico.classList.add("ativo");

        detalhes.innerHTML = conteudos[tipo];

        detalhes.style.display = "block";
    })
})