// Función para mostrar el mensaje de bienvenida con el nombre del usuario
function mostrarBienvenida(nombre) {
    var bienvenidaContainer = document.createElement("div");
    bienvenidaContainer.classList.add("bienvenida-container");

    var bienvenidaText = document.createElement("div");
    bienvenidaText.classList.add("bienvenida-text");
    bienvenidaText.textContent = "¡Bienvenido a Patitas al Rescate, " + nombre + "!";

    bienvenidaContainer.appendChild(bienvenidaText);
    document.body.appendChild(bienvenidaContainer);

    // Mostrar el mensaje con una animación de fade in
    bienvenidaContainer.style.animation = "fadein 1s";
    bienvenidaContainer.style.display = "block";

    // Ocultar el mensaje después de 3 segundos con una animación de fade out
    setTimeout(function() {
        bienvenidaContainer.style.animation = "fadeout 1s";
        setTimeout(function() {
            bienvenidaContainer.parentNode.removeChild(bienvenidaContainer);
        }, 1000); // Reducir el tiempo de espera a 1 segundo
    }, 2000); // Reducir el tiempo de espera a 3 segundos
}

// Función para solicitar el nombre del usuario
function solicitarNombreUsuario() {
    let nombre = prompt("Por favor, ingresa tu nombre:");

    if (nombre) {
        // Mostrar el saludo con el nombre
        alert("¡Hola, " + nombre + "! Bienvenido a Patitas al Rescate.");

        // Mostrar el mensaje de bienvenida con el nombre después de cargar el contenido
        mostrarBienvenida(nombre);
    } else {
        alert("No ingresaste un nombre. Por favor, inténtalo de nuevo.");
    }
}

// Llamar a la función solicitarNombreUsuario después de que se haya cargado todo el contenido de la página
window.addEventListener('load', solicitarNombreUsuario);







document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mascota-form');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const tipoMascota = document.getElementById('tipo-mascota').value;
        mostrarMascotaIdeal(tipoMascota);
    });

    function mostrarMascotaIdeal(tipoMascota) {
        let mensaje = '';
        if (tipoMascota === 'perro') {
            mensaje = 'Tu mascota ideal es un perro. Los perros son leales, cariñosos y buenos compañeros.';
        } else if (tipoMascota === 'gato') {
            mensaje = 'Tu mascota ideal es un gato. Los gatos son independientes, cariñosos y excelentes cazadores de ratones.';
        } else {
            mensaje = 'Por favor, selecciona una opción válida.';
        }
        resultado.textContent = mensaje;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-ingreso');
    const mensaje = document.getElementById('mensaje');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        const nombreAnimal = document.getElementById('nombre').value;
        const especieAnimal = document.getElementById('especie').value;

        // Mostrar el mensaje de ingreso con éxito
        mensaje.textContent = `¡${nombreAnimal} el ${especieAnimal} ha sido ingresado al refugio con éxito!`;
        mensaje.style.display = 'block'; // Mostrar el mensaje
    });
});








