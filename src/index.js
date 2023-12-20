function openWhatsapp(){
    // var numero = "+573205181852";
    var numero = "+15550801863";
    var menssage = "Hola quiero hacer un vuelo en parapente";
    var menssageCo= encodeURIComponent(menssage);
    var linkWhatsapp = 'https://wa.me/' + numero + "?text=" + menssageCo;
    window.open(linkWhatsapp);

}

