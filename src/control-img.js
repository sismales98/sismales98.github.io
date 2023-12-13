var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

var slideIndexE = 1;
showDivsE(slideIndexE);

function plusDivsE(n) {
  showDivsE(slideIndexE += n);
}

function showDivsE(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesExtremo");
  if (n > x.length) {slideIndexE = 1}
  if (n < 1) {slideIndexE = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndexE-1].style.display = "block";  
}


var slideIndexC = 1;
showDivsE(slideIndexC);

function plusDivsC(n) {
  showDivsC(slideIndexC += n);
}

function showDivsC(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesC");
  if (n > x.length) {slideIndexC = 1}
  if (n < 1) {slideIndexC = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndexC-1].style.display = "block";  
}


var slideIndexL = 1;
showDivsL(slideIndexL);

function plusDivsL(n) {
  showDivsL(slideIndexL += n);
}

function showDivsL(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesL");
  if (n > x.length) {slideIndexL = 1}
  if (n < 1) {slideIndexL = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndexL-1].style.display = "block";  
}



