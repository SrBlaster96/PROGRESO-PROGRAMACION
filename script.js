// Lista de imágenes de fondo
var backgrounds = [
    "img/japon1.jpg",
    "img/japon2.jpg",
    "img/japon3.jpg",
    "img/japon4.jpg",
    "img/japon5.jpg",
    "img/japon6.jpg",
    "img/japon7.jpg",
    "img/japon8.jpg",
    "img/japon9.jpg",
    "img/japon10.jpg"
];

// Función para seleccionar una imagen de fondo aleatoria
function selectRandomBackground() {
    var randomIndex = Math.floor(Math.random() * backgrounds.length);
    var randomBackground = backgrounds[randomIndex];
    document.body.style.backgroundImage = "url('" + randomBackground + "')";
}

// Cambiar la imagen de fondo al cargar la página
window.onload = function() {
    selectRandomBackground();
};

// Cambiar la imagen de fondo al salir de la página
window.onblur = function() {
    selectRandomBackground();
};

// Cambiar la imagen de fondo al volver a la página
window.onfocus = function() 
{selectRandomBackground();
};

//ANIMACION DEL TEXTO H1

    // Texto que quieres animar
    var text = "#PAGINA PRINCIPAL DE PROGRAMACION BLASTER";

    // Elemento donde se mostrará el texto animado
    var targetElement = document.getElementById('animated-text');

    // Función para animar el texto
    function animateText() {
        var i = 0;
        var interval = setInterval(function() {
            targetElement.textContent += text[i];
            i++;
            if (i === text.length) {
                clearInterval(interval);
                setTimeout(function() {
                    eraseText();
                }, 1000); // Cambia la velocidad de borrado ajustando este valor
            }
        }, 100); // Cambia la velocidad de escritura ajustando este valor
    }

    // Función para borrar el texto
    function eraseText() {
        var textLength = targetElement.textContent.length;
        var interval = setInterval(function() {
            targetElement.textContent = targetElement.textContent.slice(0, -1);
            if (targetElement.textContent === "") {
                clearInterval(interval);
                setTimeout(function() {
                    animateText();
                }, 500); // Tiempo de espera antes de comenzar la nueva animación
            }
        }, 50); // Velocidad de borrado ajustable
    }

    // Iniciar la animación cuando la página se cargue
    window.onload = function() {
        animateText();
    };