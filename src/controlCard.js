        // Obtener el elemento del card
        const extrem = document.getElementById("my-card-extrem");
        const comercial = document.getElementById("my-card-comercial");    
        const camara = document.getElementById("my-card-camara");
        const cumple = document.getElementById("my-card-cumple");   
        const cartel = document.getElementById("my-card-cartel");   
        const contDisplay = document.getElementById("cont-display");


        var bComercial= false;
        var bCartel= false;
        var bCumple= false;
        var bCamara= false;
        var bExtrem= false;
        var name = "";
        var fill;
        var cont = 0;
        console.log(fill);

        var tComercial="";
        var tExtrem ="";
        var tCamara ="";
        var tCumple ="";
        var tCartel ="";
       
        // 

        contDisplay.innerText = `Contador: ${cont}`;
        comercial.addEventListener("click", function() {
            if (!bComercial){
                comercial.style.backgroundColor = "#ff7f00"; // Puedes ajustar el color según tus preferencias
                bComercial=true;    
                cont = cont + 180;
                console.log(cont);
                contDisplay.textContent = "TOTAL:" + cont;
                tComercial= "Comercial";
                fill = true;    
                
                
            }else{
                comercial.style.backgroundColor = "#272a2f";
                bComercial= false;
                cont = cont - 180;
                console.log(cont);
                contDisplay.textContent = "TOTAL:" + cont;
                fill= false;    
                tComercial= "";
             
            }
            
        }); 

        
        extrem.addEventListener("click", function() {
           
            if (!bExtrem){
                extrem.style.backgroundColor = "#ff7f00"; // Puedes ajustar el color según tus preferencias
                bExtrem=true;
                cont = cont + 50;
                contDisplay.textContent = "TOTAL:" + cont;
                tExtrem = "Con Extremo ";
                
            }else{
                extrem.style.backgroundColor = "#272a2f";
                bExtrem= false;
                cont = cont - 50;
                contDisplay.textContent = "TOTAL:" + cont;
                
                tExtrem = "";
            }
            
        });
        camara.addEventListener("click", function() {
            if (!bCamara){
                camara.style.backgroundColor = "#ff7f00"; // Puedes ajustar el color según tus preferencias
                bCamara=true;
                cont = cont + 40;
                contDisplay.textContent = "TOTAL:" + cont;
                tCamara = "Con camara 360°";
            }else{
                camara.style.backgroundColor = "#272a2f";
                bCamara= false;
                cont = cont - 40;
                contDisplay.textContent = "TOTAL:" + cont;
                tCamara =  "";
            }
            
        });

        // Agregar un listener para el evento de clic
        cumple.addEventListener("click", function() {
            if (!bCumple){
                cumple.style.backgroundColor = "#ff7f00"; // Puedes ajustar el color según tus preferencias
                bCumple=true;
                cont = cont + 40;
                contDisplay.textContent = "TOTAL:" + cont;
                tCumple = "incluye Paste ";
            }else{
                cumple.style.backgroundColor = "#272a2f";
                bCumple= false;
                cont = cont - 40;
                contDisplay.textContent = "TOTAL:" + cont;
                tCumple = "";
            }
            
        }); 
      
        cartel.addEventListener("click", function() {
            if (!bCartel){
                cartel.style.backgroundColor = "#ff7f00"; // Puedes ajustar el color según tus preferencias
                bCartel=true;
                cont= cont + 40;
                contDisplay.textContent = "TOTAL:" + cont;
                tCartel = "Cartel de: " + "amor";
            }else{
                cartel.style.backgroundColor = "#272a2f";
                cont= cont - 40;
                bCartel= false;
                contDisplay.textContent = "TOTAL:" + cont;
                tCartel = "";
            }
            
        }); 
        console.log(cont);
        



function fillField(){
        var fillName = document.getElementById("lname").value;
        console.log(fill);
        
        // Verificar si el campo está lleno 
    if(fill){
        if (fillName !== '') {
            openWhatsappReserve();
          } else {
            alert('Escriba su nombre en el campo nombre');
          }
    }else{
        alert("selecciona la Carta Comercial para poder reservar");
    }
      
}

function openWhatsappReserve(){
    var numero = "+573205181852";
    var menssage = "Hola soy: ";
    var menssageCo= encodeURIComponent(menssage);
    var linkWhatsapp = 'https://wa.me/' + numero + "?text=" + menssageCo + document.getElementById("lname").value 
    +" "+ "Tipo de Vuelo:" + tComercial +" "+tExtrem+ " " +tCamara+" "+tCumple+" "+tCartel+" Costo: "+cont+" Por: Andres Castillo(Web)";
    window.open(linkWhatsapp);

}