document.addEventListener("DOMContentLoaded", function() {

    // =========================================
    // 1. SMART HEADER (OCULTAR/MOSTRAR AO ROLAR)
    // =========================================
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

    // =========================================
    // 2. FUNÇÃO MENU MOBILE (MANTIDA)
    // =========================================
    window.toggleMenu = function() {
        const nav = document.querySelector('.nav-links');
        
        if (!nav.classList.contains('nav-open')) {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '60px';
            nav.style.right = '0';
            nav.style.backgroundColor = 'rgba(0,0,0,0.95)';
            nav.style.width = '100%';
            nav.style.padding = '20px';
            nav.style.zIndex = '999';
            nav.classList.add('nav-open');
        } else {
            nav.style.display = 'none';
            nav.classList.remove('nav-open');
        }
    }


    // =========================================
    // 3. CARROSSEL IMAGENS INICIO (MANTIDO E CORRIGIDO)
    // =========================================
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slider .slide');
    const dots = document.querySelectorAll('.dot');
    let autoTimer; 

    if (slides.length > 0) { 
        
        function activateSlide(index) {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));

            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }

        function autoSlide() {
            slideIndex = (slideIndex + 1) % slides.length;
            activateSlide(slideIndex);
            clearTimeout(autoTimer); 
            autoTimer = setTimeout(autoSlide, 3000); 
        }
        
        activateSlide(slideIndex);
        autoTimer = setTimeout(autoSlide, 3000);

        // --- CONTROLE MANUAL ---
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                clearTimeout(autoTimer); 
                slideIndex = parseInt(dot.dataset.slide);
                activateSlide(slideIndex);
                autoTimer = setTimeout(autoSlide, 3000); 
            });
        });
    }
});