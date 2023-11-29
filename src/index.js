function openWhatsapp(){
    var numero = "+573205181852";
    var menssage = "Hola quiero hacer un vuelo en parapente";
    var menssageCo= encodeURIComponent(menssage);
    var linkWhatsapp = 'https://wa.me/' + numero + "?text=" + menssageCo;
    window.open(linkWhatsapp);

}

function openContainer(){

    document.getElementById("buy-pop").style.display = "block";
}


function closePop(){
    document.getElementById("buy-pop").style.display = "none";
}

