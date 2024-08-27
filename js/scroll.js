(function(){
    document.addEventListener("DOMContentLoaded", function() {
        var scrollButton = document.getElementById("democracia");
    
        scrollButton.addEventListener("click", function() {
        // Encuentra el punto de anclaje
        var puntoDeAnclaje = document.getElementById("definicion__democracia");
    
        // Usa el método scrollIntoView para desplazar la página al punto de anclaje
        puntoDeAnclaje.scrollIntoView({ behavior: "smooth" }); // El "smooth" hace que el desplazamiento sea suave
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        var scrollButton = document.getElementById("democracia--elite");
    
        scrollButton.addEventListener("click", function() {
        // Encuentra el punto de anclaje
        var puntoDeAnclaje = document.getElementById("definicion__democracia--elite");
    
        // Usa el método scrollIntoView para desplazar la página al punto de anclaje
        puntoDeAnclaje.scrollIntoView({ behavior: "smooth" }); // El "smooth" hace que el desplazamiento sea suave
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        var scrollButton = document.getElementById("inicio");
    
        scrollButton.addEventListener("click", function() {
        // Encuentra el punto de anclaje
        var puntoDeAnclaje = document.getElementsByClassName("hero");
    
        // Usa el método scrollIntoView para desplazar la página al punto de anclaje
        puntoDeAnclaje.scrollIntoView({ behavior: "smooth" }); // El "smooth" hace que el desplazamiento sea suave
        });
    });


})();