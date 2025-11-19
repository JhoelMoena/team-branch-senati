        // Búsqueda de carreras
        document.getElementById('searchBtn').addEventListener('click', filterCareers);
        document.getElementById('searchInput').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') filterCareers();
        });

        // Filtro por familia ocupacional
        document.getElementById('filterFamily').addEventListener('change', filterCareers);

        function filterCareers() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const familyFilter = document.getElementById('filterFamily').value;
            const careerCards = document.querySelectorAll('.career-card');

            careerCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('.career-description').textContent.toLowerCase();
                const family = card.getAttribute('data-family');

                const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
                const matchesFamily = !familyFilter || family === familyFilter;

                if (matchesSearch && matchesFamily) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        }

        // Ver diseño curricular
        function viewCurriculum(careerId) {
            const modal = document.getElementById('curriculumModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalBody = document.getElementById('modalBody');

            const curricula = {
                'mecanica-automotriz': {
                    title: 'Mecánica Automotriz',
                    modules: [
                        { name: 'Fundamentos de Mecánica', semester: 1, hours: 240 },
                        { name: 'Sistemas del Motor', semester: 2, hours: 280 },
                        { name: 'Sistemas Eléctricos y Electrónicos', semester: 3, hours: 260 },
                        { name: 'Sistemas de Transmisión', semester: 4, hours: 250 },
                        { name: 'Diagnóstico Computarizado', semester: 5, hours: 240 },
                        { name: 'Prácticas Profesionales', semester: 6, hours: 400 },
                        { name: 'Proyecto de Titulación', semester: 6, hours: 200 }
                    ]
                },
                'electronica-industrial': {
                    title: 'Electrónica Industrial',
                    modules: [
                        { name: 'Fundamentos de Electrónica', semester: 1, hours: 240 },
                        { name: 'Circuitos Digitales', semester: 2, hours: 280 },
                        { name: 'Automatización Industrial', semester: 3, hours: 260 },
                        { name: 'Controladores Lógicos Programables', semester: 4, hours: 250 },
                        { name: 'Instrumentación Industrial', semester: 5, hours: 240 },
                        { name: 'Prácticas Profesionales', semester: 6, hours: 400 },
                        { name: 'Proyecto de Titulación', semester: 6, hours: 200 }
                    ]
                },
                'informatica': {
                    title: 'Informática',
                    modules: [
                        { name: 'Fundamentos de Programación', semester: 1, hours: 240 },
                        { name: 'Bases de Datos', semester: 2, hours: 280 },
                        { name: 'Desarrollo Web', semester: 3, hours: 260 },
                        { name: 'Redes y Comunicaciones', semester: 4, hours: 250 },
                        { name: 'Aplicaciones Móviles', semester: 5, hours: 240 },
                        { name: 'Prácticas Profesionales', semester: 6, hours: 400 },
                        { name: 'Proyecto de Titulación', semester: 6, hours: 200 }
                    ]
                },
                'mecatronica': {
                    title: 'Mecatrónica',
                    modules: [
                        { name: 'Fundamentos de Mecatrónica', semester: 1, hours: 240 },
                        { name: 'Sistemas Mecánicos', semester: 2, hours: 280 },
                        { name: 'Sistemas Electrónicos', semester: 3, hours: 260 },
                        { name: 'Robótica Industrial', semester: 4, hours: 250 },
                        { name: 'Automatización Avanzada', semester: 5, hours: 240 },
                        { name: 'Prácticas Profesionales', semester: 6, hours: 400 },
                        { name: 'Proyecto de Titulación', semester: 6, hours: 200 }
                    ]
                },
                'administracion': {
                    title: 'Administración',
                    modules: [
                        { name: 'Fundamentos de Administración', semester: 1, hours: 240 },
                        { name: 'Gestión de Recursos Humanos', semester: 2, hours: 280 },
                        { name: 'Marketing y Ventas', semester: 3, hours: 260 },
                        { name: 'Gestión Financiera', semester: 4, hours: 250 },
                        { name: 'Planificación Estratégica', semester: 5, hours: 240 },
                        { name: 'Prácticas Profesionales', semester: 6, hours: 400 },
                        { name: 'Proyecto de Titulación', semester: 6, hours: 200 }
                    ]
                },
                'contabilidad': {
                    title: 'Contabilidad',
                    modules: [
                        { name: 'Fundamentos de Contabilidad', semester: 1, hours: 240 },
                        { name: 'Contabilidad Financiera', semester: 2, hours: 280 },
                        { name: 'Legislación Tributaria', semester: 3, hours: 260 },
                        { name: 'Costos y Presupuestos', semester: 4, hours: 250 },
                        { name: 'Auditoría', semester: 5, hours: 240 },
                        { name: 'Prácticas Profesionales', semester: 6, hours: 400 },
                        { name: 'Proyecto de Titulación', semester: 6, hours: 200 }
                    ]
                },
                'gastronomia': {
                    title: 'Gastronomía',
                    modules: [
                        { name: 'Fundamentos de Cocina', semester: 1, hours: 240 },
                        { name: 'Técnicas Culinarias', semester: 2, hours: 280 },
                        { name: 'Cocina Internacional', semester: 3, hours: 260 },
                        { name: 'Pastelería y Repostería', semester: 4, hours: 250 },
                        { name: 'Gestión de Restaurantes', semester: 5, hours: 240 },
                        { name: 'Prácticas Profesionales', semester: 6, hours: 400 },
                        { name: 'Proyecto de Titulación', semester: 6, hours: 200 }
                    ]
                },
                'textil': {
                    title: 'Diseño y Confección Textil',
                    modules: [
                        { name: 'Fundamentos de Diseño', semester: 1, hours: 240 },
                        { name: 'Patronaje Básico', semester: 2, hours: 280 },
                        { name: 'Confección Industrial', semester: 3, hours: 260 },
                        { name: 'Diseño de Modas', semester: 4, hours: 250 },
                        { name: 'Producción Textil', semester: 5, hours: 240 },
                        { name: 'Prácticas Profesionales', semester: 6, hours: 400 },
                        { name: 'Proyecto de Titulación', semester: 6, hours: 200 }
                    ]
                }
            };

            const curriculum = curricula[careerId];
            if (!curriculum) return;

            modalTitle.textContent = `Diseño Curricular - ${curriculum.title}`;
            
            let html = `
                <div class="curriculum-info">
                    <h3>Estructura Modular</h3>
                    <div class="modules-list">
            `;

            curriculum.modules.forEach((module, index) => {
                html += `
                    <div class="module-item">
                        <div class="module-header">
                            <span class="module-number">${index + 1}</span>
                            <h4>${module.name}</h4>
                        </div>
                        <div class="module-details">
                            <span class="semester-badge">Semestre ${module.semester}</span>
                            <span class="hours-badge">${module.hours} horas</span>
                        </div>
                    </div>
                `;
            });

            html += `
                    </div>
                    <div class="curriculum-summary">
                        <p><strong>Total de horas:</strong> ${curriculum.modules.reduce((sum, m) => sum + m.hours, 0)} horas</p>
                        <p><strong>Duración:</strong> 3 años (6 semestres)</p>
                    </div>
                </div>
            `;

            modalBody.innerHTML = html;
            modal.style.display = 'block';
        }

        // Cerrar modal
        document.querySelector('.modal-close').addEventListener('click', function() {
            document.getElementById('curriculumModal').style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            const modal = document.getElementById('curriculumModal');
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });