let imageContainer = document.getElementById('image-List');

let imageExtremo = document.getElementById('image-List-extremo');
let imageCamara = document.getElementById('image-List-360');
let imageC = document.getElementById('image-List-c');
let imageL = document.getElementById('image-List-l');


//content
let contCard = document.getElementById('card-cont-vuelo');
let contExtremo = document.getElementById('card-cont-extremo');
let contCamara = document.getElementById('card-cont-360');
let contC = document.getElementById('card-cont-c');
let contL  = document.getElementById('card-cont-l');
//elementos de control
let circleVuelo = document.getElementById('circle-vuelo');
    //extremo
let circleExtremo = document.getElementById('circle-extremo');

  //360

  let circleCamara = document.getElementById('circle-360');
//celebracion
let circleC = document.getElementById('circle-c');
//letrero
let circleL = document.getElementById('circle-l');
function showImages() {
    imageContainer.style.display = 'contents';
    circleVuelo.style.display = 'none';
    
    contCard.style.justifyContent = 'space-between';
}

function hideImages() {
     imageContainer.style.display = 'none';
   
   contCard.style.justifyContent = 'space-around';
    circleVuelo.style.display = 'flex';

 
}

function showImagesExtremo() {
    imageExtremo.style.display = 'contents';
    circleExtremo.style.display = 'none';
    contExtremo.style.justifyContent = 'space-between';
   
   
}

function hideImagesExtremo() {
    imageExtremo.style.display = 'none';
    circleExtremo.style.display = 'flex';
    contExtremo.style.justifyContent = 'space-around';


}


function showImages360() {
    imageCamara.style.display = 'contents';
    circleCamara.style.display = 'none';
    contCamara.style.justifyContent = 'space-between';
}

function hideImages360() {
    imageCamara.style.display = 'none';
    circleCamara.style.display = 'flex';
    contCamara.style.justifyContent = 'space-around';

}
function showImagesC() {
    imageC.style.display = 'contents';
    circleC.style.display = 'none';
    contC.style.justifyContent = 'space-between';
}

function hideImagesC() {
    imageC.style.display = 'none';
    circleC.style.display = 'flex';
    contC.style.justifyContent = 'space-around';

}
function showImagesL() {
    imageL.style.display = 'contents';
    circleL.style.display = 'none';
    contL.style.justifyContent = 'space-between';
}

function hideImagesL() {
    imageL.style.display = 'none';
    circleL.style.display = 'flex';
    contL.style.justifyContent = 'space-around';

}


