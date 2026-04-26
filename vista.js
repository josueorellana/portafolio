// Scroll suave y link activo dinámico

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Modo dark y cambio de icono luna/sol
const iconoLuna = document.querySelector('.iconoLuna');
const contenido = document.querySelector('.contenido');

iconoLuna.addEventListener('click', () => {
    contenido.classList.toggle('dark-mode');
    if (iconoLuna.src.includes('luna.png')) {
        iconoLuna.src = 'imagen/sol.png';
    } else {
        iconoLuna.src = 'imagen/luna.png';
    }
});