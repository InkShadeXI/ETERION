document.addEventListener('DOMContentLoaded', function() {
    /* FUNCION PARA CERRAR AUTOMÁTICAMENTE LA CORTINA DEL MENÚ EN TAMAÑO MÓVIL */
    
    // Obtenemos el checkbox
    const checkbox = document.getElementById('check');
    
    // Obtenemos todos los enlaces del menú
    const menuLinks = document.querySelectorAll('nav ul li a');
    
    // Agregamos un event listener a cada enlace del menú, de esta manera se cierra la cortina al pulsar en cualquier enlace en tamaño móvil.
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Desmarcamos el checkbox
            checkbox.checked = false;
        });
    });
    
    /* FUNCIÓN PARA REDIRIGIR AL USUARIO AL SERVER DE DISCORD */
    
    // Obtenemos el botón
    const boton_link = document.querySelectorAll('.discord_button');
    
    // Agregamos la función al botón
    boton_link.forEach(button => {
        button.addEventListener('click', () => {
            // Redirigimos al usuario a la página externa
            window.location.href = 'https://discord.gg/xZjv8jzZDk';
        });
    });
});