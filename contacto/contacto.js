document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('.formularioContacto');
  const mensajeEstado = document.createElement('p');
  mensajeEstado.className = 'estado-envio';
  formulario.appendChild(mensajeEstado);

  // Reemplaza estos valores con tu configuración real de EmailJS.
  emailjs.init('WQd0G7RvjI-LXwJp0');

  formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

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
    } catch (error) {
      mensajeEstado.textContent = 'No se pudo enviar el mensaje. Revisa la configuración de EmailJS.';
      mensajeEstado.style.color = '#b91c1c';
    }
  });
});
