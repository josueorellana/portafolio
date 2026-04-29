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

// Carrusel de proyectos: botones de navegación
const btnIzq = document.querySelector('.carrusel-btn-izq');
const btnDer = document.querySelector('.carrusel-btn-der');
const carruselTrack = document.querySelector('.carrusel-track');

if (btnIzq && btnDer && carruselTrack) {
    const cardProyecto = carruselTrack.querySelector('.card-proyecto');
    let scrollAmount = cardProyecto ? cardProyecto.offsetWidth + 30 : 320; // 30 es el gap

    btnIzq.addEventListener('click', () => {
        carruselTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    btnDer.addEventListener('click', () => {
        carruselTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}