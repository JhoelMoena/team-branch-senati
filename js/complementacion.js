        // Manejo del formulario
        document.getElementById('titulacionForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validación adicional
            if (!data.nombres || !data.apellidos || !data.dni || !data.email) {
                showMessage('Por favor complete todos los campos obligatorios.', 'error');
                return;
            }

            // Simulación de envío
            const messageDiv = document.getElementById('formMessage');
            messageDiv.className = 'alert alert-success';
            messageDiv.innerHTML = '<strong>¡Solicitud enviada exitosamente!</strong><br>Su solicitud ha sido recibida. Recibirá un correo de confirmación en breve.';
            messageDiv.style.display = 'block';
            
            // Scroll al mensaje
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Limpiar formulario
            this.reset();
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        });

        function showMessage(message, type) {
            const messageDiv = document.getElementById('formMessage');
            messageDiv.className = type === 'error' ? 'alert alert-info' : 'alert alert-success';
            messageDiv.innerHTML = message;
            messageDiv.style.display = 'block';
            
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }