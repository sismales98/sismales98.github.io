function openWhatsapp(){
    // var numero = "+573205181852";
     var numero = "+573152165049";
    // var numero = "+573205181852";
    var menssage = "Hola estoy intersado en la informacion de un vuelo en parapente";
    var menssageCo= encodeURIComponent(menssage);
    var linkWhatsapp = 'https://wa.me/' + numero + "?text=" + menssageCo;
    window.open(linkWhatsapp);

}


//Animation




 



document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleButton");
    var buttonChange = document.getElementById("button-change");

    toggleButton.addEventListener("click", function () {
      // Toggle entre las clases fa-angles-down y fa-angles-up
      buttonChange.classList.toggle("fa-angles-up");
      buttonChange.classList.toggle("fa-angles-down");
     
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.querySelector(".navbar-toggler");
  
    // Cambiar la propiedad 'animation' al hacer clic en el botón
    toggleButton.addEventListener("click", function() {
      // Asegúrate de que toggleButton tiene la clase 'despliegueB' antes de cambiarla
      if (toggleButton.classList.contains("despliegueB")) {
        toggleButton.style.animation = "desplegueB 0.8s infinite";
        // Asegúrate de cambiar la clase para futuras interacciones
      
        toggleButton.style.removeProperty("animation");
        toggleButton.classList.remove("despliegueB");
      } else {
        // Restaura la propiedad 'animation' original
        toggleButton.style.animation = "despliegueUp 0.8s infinite";
        // Asegúrate de cambiar la clase para futuras interacciones
        toggleButton.classList.add("despliegueB");
      }
    });
  });