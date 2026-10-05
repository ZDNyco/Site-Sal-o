// Smart Header

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