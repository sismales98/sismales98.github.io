function openWhatsapp(){
    // var numero = "+573205181852";
     var numero = "+573152165049";
    // var numero = "+573205181852";
    var menssage = "Hola estoy intersado en la informacion de un vuelo en parapente";
    var menssageCo= encodeURIComponent(menssage);
    var linkWhatsapp = 'https://wa.me/' + numero + "?text=" + menssageCo;
    window.open(linkWhatsapp);

}




