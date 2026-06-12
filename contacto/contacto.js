document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('.formularioContacto');
  const mensajeEstado = document.createElement('p');
  mensajeEstado.className = 'estado-envio';
  formulario.appendChild(mensajeEstado);

  const toast = document.createElement('div');
  toast.className = 'toast-validacion';
  document.body.appendChild(toast);

  const mostrarToast = (texto, tipo = 'error') => {
    toast.textContent = texto;
    toast.className = `toast-validacion show ${tipo}`;
    clearTimeout(mostrarToast.timer);
    mostrarToast.timer = setTimeout(() => {
      toast.className = 'toast-validacion';
    }, 2600);
  };

  const campoNombre = document.getElementById('nombre');
  const campoEmail = document.getElementById('email');
  const campoMensaje = document.getElementById('mensaje');

  if (campoNombre) {
    campoNombre.minLength = 3;
    campoNombre.maxLength = 50;
    campoNombre.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
      if (e.target.value.length >= 50) {
        mostrarToast('Has superado el límite máximo de caracteres.');
      }
    });
  }

  if (campoEmail) {
    campoEmail.maxLength = 70;
    campoEmail.addEventListener('input', (e) => {
      if (e.target.value.length >= 70) {
        mostrarToast('Has superado el límite máximo de caracteres.');
      }
    });
  }

  if (campoMensaje) {
    campoMensaje.minLength = 4;
    campoMensaje.maxLength = 200;
    campoMensaje.addEventListener('input', (e) => {
      if (e.target.value.length >= 200) {
        mostrarToast('Has superado el límite máximo de caracteres.');
      }
    });
  }

  // Reemplaza estos valores con tu configuración real de EmailJS.
  emailjs.init('WQd0G7RvjI-LXwJp0');

  formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = (campoNombre?.value || '').trim();
    const email = (campoEmail?.value || '').trim();
    const mensaje = (campoMensaje?.value || '').trim();

    if (!nombre) {
      mostrarToast('El nombre es obligatorio.');
      campoNombre?.focus();
      return;
    }

    if (nombre.length < 3) {
      mostrarToast('El nombre debe tener al menos 3 caracteres.');
      campoNombre?.focus();
      return;
    }

    if (/\d/.test(nombre)) {
      mostrarToast('Por favor, ingresa un nombre válido.');
      campoNombre?.focus();
      return;
    }

    if (!email) {
      mostrarToast('El correo es obligatorio.');
      campoEmail?.focus();
      return;
    }

    if (email.length > 70) {
      mostrarToast('Has superado el límite máximo de caracteres.');
      campoEmail?.focus();
      return;
    }

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!correoValido) {
      mostrarToast('El correo no es válido.');
      campoEmail?.focus();
      return;
    }

    if (!mensaje) {
      mostrarToast('Escribe un mensaje.');
      campoMensaje?.focus();
      return;
    }

    if (mensaje.length < 4) {
      mostrarToast('El mensaje debe tener al menos 4 caracteres.');
      campoMensaje?.focus();
      return;
    }

    if (mensaje.length > 200) {
      mostrarToast('El mensaje no puede exceder 200 caracteres.');
      campoMensaje?.focus();
      return;
    }

    mensajeEstado.textContent = 'Enviando mensaje...';
    mensajeEstado.style.color = '#334361';

    try {
      await emailjs.sendForm(
        'service_3jc0pxw',
        'template_mg07dg2',
        formulario
      );

      mensajeEstado.textContent = 'Mensaje enviado con éxito.';
      mensajeEstado.style.color = '#15803d';
      formulario.reset();

      setTimeout(() => {
        window.location.href = '../index.html#inicio';
      }, 1000);
    } catch (error) {
      mensajeEstado.textContent = 'No se pudo enviar el mensaje. Revisa la configuración de EmailJS.';
      mensajeEstado.style.color = '#b91c1c';
      mostrarToast('No se pudo enviar el mensaje. Revisa la configuración de EmailJS.', 'error');
    }
  });
});
