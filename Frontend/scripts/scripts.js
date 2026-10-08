const servicos = document.querySelectorAll(".servico");
const detalhes = document.querySelector("#detalhes-servico");



/* Smart Header */

const header = document.querySelector("header");
    const headerHeight = 80; 
    let lastScrollY = 0; 

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > headerHeight) { 
            header.classList.add("header-hidden");
        } else if (currentScrollY < lastScrollY) {
            header.classList.remove("header-hidden");
        }

        lastScrollY = currentScrollY;
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