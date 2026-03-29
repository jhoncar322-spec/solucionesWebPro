// ==================== SLIDESHOW DE FONDO AUTOMÁTICO ====================
// 🎨 Cambia automáticamente las imágenes de fondo del hero cada 5 segundos

let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slideshow .slide');
const heroContent = document.querySelector('.hero-content');
const totalSlides = slides.length;

function nextSlide() {
    // Quitar clase active de la imagen actual
    slides[currentSlide].classList.remove('active');
    
    // Pasar a la siguiente imagen (vuelve al inicio cuando llega al final)
    currentSlide = (currentSlide + 1) % totalSlides;
    
    // Agregar clase active a la nueva imagen
    slides[currentSlide].classList.add('active');
    
    // 👁️ Mostrar texto solo en la primera imagen, ocultar en el resto
    if (currentSlide === 0) {
        heroContent.classList.remove('hidden');
    } else {
        heroContent.classList.add('hidden');
    }
}

// Cambiar imagen cada 5 segundos (5000 milisegundos)
// 💡 Puedes cambiar el número para que cambie más rápido o más lento
setInterval(nextSlide, 5000);

// ==================== MENÚ HAMBURGUESA ====================
// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animación del icono hamburguesa
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Cerrar menú al hacer click en un enlace
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Efecto de scroll en la navegación
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Si usa FormSubmit en GitHub Pages, permitir envio normal.
        const usaFormSubmit = contactForm.action.includes('formsubmit.co');
        if (usaFormSubmit) {
            return;
        }

        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && email && asunto && mensaje) {
            alert('¡Gracias por tu mensaje! Te contactaré pronto.');
            contactForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
}

// Animación de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar las tarjetas de servicios
const servicioCards = document.querySelectorAll('.servicio-card');
servicioCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Contador animado para las estadísticas
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
};

// Observar sección de estadísticas
const statsSection = document.querySelector('.stats');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            const statItems = document.querySelectorAll('.stat-item h3');
            animateCounter(statItems[0], 5);
            animateCounter(statItems[1], 100);
            animateCounter(statItems[2], 50);
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== CARRUSEL DE TESTIMONIOS ====================
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonio-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('testimonialDots');

// Crear dots
testimonialCards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToTestimonial(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
        card.classList.remove('active', 'prev');
        if (i === index) {
            card.classList.add('active');
        } else if (i < index) {
            card.classList.add('prev');
        }
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function goToTestimonial(index) {
    currentTestimonial = index;
    showTestimonial(currentTestimonial);
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

// Auto-play carrusel cada 5 segundos
setInterval(nextTestimonial, 5000);

// ==================== ACORDEÓN FAQ ====================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Cerrar todos los items
        faqItems.forEach(faq => faq.classList.remove('active'));
        
        // Abrir el item clickeado si no estaba activo
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ==================== BOTÓN VOLVER ARRIBA ====================
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== ANIMACIÓN PORTAFOLIO ====================
const portafolioItems = document.querySelectorAll('.portafolio-item');
portafolioItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// ==================== WHATSAPP CONSULTA PERSONALIZADA ====================
const waConsultaInput = document.getElementById('waConsulta');
const sendCustomWhatsappBtn = document.getElementById('sendCustomWhatsapp');
const waPreview = document.getElementById('waPreview');

function obtenerSaludoPorHora() {
    const hora = new Date().getHours();
    if (hora < 12) return 'Buenos dias';
    if (hora < 19) return 'Buenas tardes';
    return 'Buenas noches';
}

function actualizarVistaPreviaWhatsapp() {
    if (!waPreview) return;

    const consulta = waConsultaInput ? waConsultaInput.value.trim() : '';
    const saludo = obtenerSaludoPorHora();
    const ejemploConsulta = consulta || 'necesito un cambio de pantalla para Samsung A50';
    waPreview.textContent = `Ejemplo de envio: ${saludo}, ${ejemploConsulta}`;
}

function detectarCategoriaConsulta(texto) {
    const textoNormalizado = texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    const palabrasAccesorios = /(accesorio|cargador|cable|audifono|manos libres|funda|estuche|templado|vidrio|bocina|bluetooth|soporte)/;
    const palabrasTecnico = /(tecnico|servicio tecnico|reparacion|reparar|diagnostico|pantalla|bateria|pin de carga|software|formateo|no enciende|no prende|falla)/;

    const esAccesorios = palabrasAccesorios.test(textoNormalizado);
    const esTecnico = palabrasTecnico.test(textoNormalizado);

    if (esAccesorios && esTecnico) return 'Accesorios + Servicio Tecnico';
    if (esAccesorios) return 'Accesorios';
    if (esTecnico) return 'Servicio Tecnico';
    return 'Consulta General';
}

if (waConsultaInput && sendCustomWhatsappBtn) {
    actualizarVistaPreviaWhatsapp();

    waConsultaInput.addEventListener('input', actualizarVistaPreviaWhatsapp);

    sendCustomWhatsappBtn.addEventListener('click', () => {
        const consulta = waConsultaInput.value.trim();

        if (!consulta) {
            alert('Escribe tu consulta antes de enviar a WhatsApp.');
            waConsultaInput.focus();
            return;
        }

        const telefonoWhatsapp = '573229538931';
        const categoria = detectarCategoriaConsulta(consulta);

        // Deteccion interna (silenciosa): no mostrar categoria al cliente.
        const _categoriaInterna = categoria;

        const saludo = obtenerSaludoPorHora();
        const mensaje = `${saludo}, ${consulta}`;
        const urlWhatsapp = `https://wa.me/${telefonoWhatsapp}?text=${encodeURIComponent(mensaje)}`;

        window.open(urlWhatsapp, '_blank');
    });
}
