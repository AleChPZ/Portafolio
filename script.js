document.addEventListener('DOMContentLoaded', function() {
    const botonCorreo = document.getElementById('link');
    
    botonCorreo.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        window.location.href = 'mailto:alexachavarriaperez@gmail.com';
    });
});


