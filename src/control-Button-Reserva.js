  // Sélectionnez le bouton par son ID
  var bouton = document.getElementById("btn-reserva");

  // Ajoutez un gestionnaire d'événements de clic au bouton
  bouton.addEventListener("click", function openWhatsapp(){
    var numero = "+573205181852";
    var menssage = "Hola quiero hacer un vuelo en parapente";
    var menssageCo= encodeURIComponent(menssage);
    var linkWhatsapp = 'https://wa.me/' + numero + "?text=" + menssageCo;
    window.open(linkWhatsapp);

}


  );