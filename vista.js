
// Diccionario de traducciones para todo el contenido
const traducciones = {
    es: {
        inicio: {
            h1: "Hola, soy <span>Josué David Morales Orellana.</span>",
            cargo: "<span>Desarrollador Full Stack Junior</span>",
            descripcion: "Soy estudiante de Ingeniería en Sistemas y Redes Informáticas con interés en el desarrollo web y la creación de soluciones tecnológicas eficientes. Me especializo en el desarrollo de aplicaciones utilizando tecnologías como HTML, CSS, JavaScript y PHP."
        },
        sobreMi: {
            titulo: "Sobre mí",
            p1: "Actualmente soy estudiante de Ingeniería en Sistemas y Redes Informáticas, con formación en desarrollo web y bases de datos. He trabajado en proyectos académicos aplicando tecnologías modernas para resolver necesidades reales.",
            p2: "Mi objetivo es seguir creciendo profesionalmente en el área del desarrollo de software y aportar soluciones innovadoras."
        },
        formacion: {
            titulo: "Formación académica",
            card1: {
                titulo: "Mecánica Industrial",
                inst: "Instituto Nacional de Usulután",
                fecha: "2018 - 2020"
            },
            card2: {
                titulo: "Ingeniería en Sistemas y Redes Informáticas",
                inst: "Universidad Gerardo Barrios",
                fecha: "2023 - Presente"
            }
        },
        habilidades: {
            titulo: "Habilidades técnicas",
            lenguajes: "Lenguajes",
            frameworks: "Frameworks",
            bd: "Bases de datos",
            herramientas: "Herramientas"
        },
        proyectos: {
            titulo: "Proyectos",
            sivar: {
                titulo: "Sivar Tours",
                desc: "Explora destinos turísticos de El Salvador con visitas guiadas, promoviendo el turismo sostenible y el valor del patrimonio."
            },
            calculadora: {
                titulo: "Calculadora Salarial",
                desc: "Aplicación web que calcula ISSS, AFP e ISR a partir del salario bruto y muestra el salario neto de forma clara."
            },
            comunicado: {
                titulo: "Comunicado Digital",
                desc: "Aplicación web tipo periódico comunitario que permite publicar y gestionar noticias de forma organizada y accesible."
            },
            irGithub: "ir a github"
        },
        menu: ["Inicio", "Sobre mí", "Formación académica", "Habilidades técnicas", "Proyectos", "Diplomas", "Mis intereses"],
        cv: "Descargar CV",
        github: "GitHub",
        linkedin: "LinkedIn"
    },
    en: {
        inicio: {
            h1: "Hi, I'm <span>Josué David Morales Orellana.</span>",
            cargo: "<span>Junior Full Stack Developer</span>",
            descripcion: "I am a student of Systems and Computer Networks Engineering with an interest in web development and the creation of efficient technological solutions. I specialize in developing applications using technologies such as HTML, CSS, JavaScript, and PHP."
        },
        sobreMi: {
            titulo: "About me",
            p1: "I am currently a student of Systems and Computer Networks Engineering, with training in web development and databases. I have worked on academic projects applying modern technologies to solve real needs.",
            p2: "My goal is to continue growing professionally in the software development field and contribute innovative solutions."
        },
        formacion: {
            titulo: "Academic background",
            card1: {
                titulo: "Industrial Mechanics",
                inst: "Instituto Nacional de Usulután",
                fecha: "2018 - 2020"
            },
            card2: {
                titulo: "Systems and Computer Networks Engineering",
                inst: "Universidad Gerardo Barrios",
                fecha: "2023 - Present"
            }
        },
        habilidades: {
            titulo: "Technical skills",
            lenguajes: "Languages",
            frameworks: "Frameworks",
            bd: "Databases",
            herramientas: "Tools"
        },
        proyectos: {
            titulo: "Projects",
            sivar: {
                titulo: "Sivar Tours",
                desc: "Explore tourist destinations in El Salvador with guided tours, promoting sustainable tourism and the value of heritage."
            },
            calculadora: {
                titulo: "Salary Calculator",
                desc: "Web application that calculates ISSS, AFP, and ISR from gross salary and clearly shows the net salary."
            },
            comunicado: {
                titulo: "Digital Bulletin",
                desc: "Web application like a community newspaper that allows publishing and managing news in an organized and accessible way."
            },
            irGithub: "go to github"
        },
        menu: ["Home", "About me", "Academic background", "Technical skills", "Projects", "Diplomas", "My interests"],
        cv: "Download CV",
        github: "GitHub",
        linkedin: "LinkedIn"
    }
};

function cambiarIdioma(idioma) {
    const t = traducciones[idioma];
    // Menú principal
    document.querySelectorAll('.menuPrincipal ul li a').forEach((el, i) => {
        el.textContent = t.menu[i];
    });
    // Inicio
    document.querySelector('#inicio h1').innerHTML = t.inicio.h1;
    document.querySelector('.etiqueta-cargo').innerHTML = t.inicio.cargo;
    document.querySelector('.descripcion-intro').textContent = t.inicio.descripcion;
    // Sobre mí
    document.querySelector('#sobre-mi h2').textContent = t.sobreMi.titulo;
    const sobreMiPs = document.querySelectorAll('#sobre-mi p');
    sobreMiPs[0].textContent = t.sobreMi.p1;
    sobreMiPs[1].textContent = t.sobreMi.p2;
    // Formación académica
    document.querySelector('#formacion-academica h2').textContent = t.formacion.titulo;
    const formCards = document.querySelectorAll('#formacion-academica .card-formacion');
    formCards[0].querySelector('h3').textContent = t.formacion.card1.titulo;
    formCards[0].querySelectorAll('p')[0].textContent = t.formacion.card1.inst;
    formCards[0].querySelectorAll('p')[1].textContent = t.formacion.card1.fecha;
    formCards[1].querySelector('h3').textContent = t.formacion.card2.titulo;
    formCards[1].querySelectorAll('p')[0].textContent = t.formacion.card2.inst;
    formCards[1].querySelectorAll('p')[1].textContent = t.formacion.card2.fecha;
    // Habilidades técnicas
    document.querySelector('#habilidades h2').textContent = t.habilidades.titulo;
    const cardsHab = document.querySelectorAll('.card-habilidad');
    cardsHab[0].querySelector('h3').textContent = t.habilidades.lenguajes;
    cardsHab[1].querySelector('h3').textContent = t.habilidades.frameworks;
    cardsHab[2].querySelector('h3').textContent = t.habilidades.bd;
    cardsHab[3].querySelector('h3').textContent = t.habilidades.herramientas;
    // Proyectos
    document.querySelector('#proyectos h2').textContent = t.proyectos.titulo;
    const cardsProy = document.querySelectorAll('.card-proyecto');
    // Sivar Tours
    cardsProy[0].querySelector('h3').textContent = t.proyectos.sivar.titulo;
    cardsProy[0].querySelector('p').textContent = t.proyectos.sivar.desc;
    cardsProy[0].querySelector('.irGithub').textContent = t.proyectos.irGithub;
    // Calculadora Salarial
    cardsProy[1].querySelector('h3').textContent = t.proyectos.calculadora.titulo;
    cardsProy[1].querySelector('p').textContent = t.proyectos.calculadora.desc;
    cardsProy[1].querySelector('.irGithub').textContent = t.proyectos.irGithub;
    // Comunicado Digital
    cardsProy[2].querySelector('h3').textContent = t.proyectos.comunicado.titulo;
    cardsProy[2].querySelector('p').textContent = t.proyectos.comunicado.desc;
    cardsProy[2].querySelector('.irGithub').textContent = t.proyectos.irGithub;
    // Footer: CV, GitHub, LinkedIn
    document.querySelector('.descargaCV').textContent = t.cv;
    document.querySelector('.github').textContent = t.github;
    document.querySelector('.linkedin').textContent = t.linkedin;
}

// Evento para el select de idioma
const selectIdioma = document.getElementById('seleccionIdioma2');
if (selectIdioma) {
    selectIdioma.addEventListener('change', (e) => {
        cambiarIdioma(e.target.value);
    });
    // Inicializar idioma por defecto
    cambiarIdioma(selectIdioma.value);

    // Lógica para cambiar el curriculum según idioma
    const enlaceCV = document.querySelector('.iconosSociales a[title="Descargar CV"]');
    if (enlaceCV) {
        enlaceCV.addEventListener('click', function (e) {
            // Obtener idioma actual
            const idioma = selectIdioma.value;
            // Cambiar href según idioma
            if (idioma === 'en') {
                this.setAttribute('href', 'curriculum/Developer - Josue Morales(ingles).pdf');
            } else {
                this.setAttribute('href', 'curriculum/Developer - Josue Morales.pdf');
            }
        });
    }
}

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