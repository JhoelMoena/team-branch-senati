// Menú Hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    let menuOpen = false;

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuOpen = !menuOpen;
            menuToggle.classList.toggle('active', menuOpen);
            
            // Aquí puedes agregar la funcionalidad del menú desplegable
            console.log('Menú ' + (menuOpen ? 'abierto' : 'cerrado'));
        });
    }

    // Efectos de hover en los módulos de servicio
    const serviceModules = document.querySelectorAll('.service-module');
    
    serviceModules.forEach(module => {
        module.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });

        module.addEventListener('click', function() {
            const title = this.querySelector('.module-title').textContent;
            console.log('Módulo seleccionado:', title);
            // Aquí puedes agregar la navegación o acción correspondiente
        });
    });

    // Animación de entrada para los módulos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    serviceModules.forEach(module => {
        module.style.opacity = '0';
        module.style.transform = 'translateY(20px)';
        module.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(module);
    });

    // Smooth scroll para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Función para agregar funcionalidad a los módulos
function initServiceModules() {
    const modules = {
        'CORREO INSTITUCIONAL': () => {
            // Redirigir a correo institucional
            console.log('Accediendo a correo institucional...');
        },
        'BIBLIOTECA ONLINE': () => {
            // Redirigir a biblioteca online
            console.log('Accediendo a biblioteca online...');
        },
        'BLACKBOARD': () => {
            // Redirigir a Blackboard
            console.log('Accediendo a Blackboard...');
        },
        'DISEÑOS CURRICULARES': () => {
            // Redirigir a diseños curriculares
            window.location.href = 'diseños_curriculares.html';
        },
        'BIBLIOTECA DE PROYECTOS': () => {
            // Redirigir a biblioteca de proyectos
            console.log('Accediendo a biblioteca de proyectos...');
        },
        'COMPLEMENTACIÓN O TITULACIÓN': () => {
            // Redirigir a complementación o titulación
            window.location.href = 'complementacion_titulacion.html';
        },
        'SENATI - YOUTUBE': () => {
            // Redirigir a YouTube de SENATI
            console.log('Accediendo a YouTube de SENATI...');
        },
        'SOFTWARE ACADÉMICO': () => {
            // Redirigir a software académico
            window.location.href = 'https://senatipe.sharepoint.com/sites/software_academico';
        }
    };

    document.querySelectorAll('.service-module').forEach(module => {
        module.addEventListener('click', function() {
            const title = this.querySelector('.module-title').textContent.trim();
            if (modules[title]) {
                modules[title]();
            }
        });
    });
}

// Inicializar módulos cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServiceModules);
} else {
    initServiceModules();
}
