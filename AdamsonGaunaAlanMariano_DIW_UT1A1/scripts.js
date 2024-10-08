function showSideBar(){
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'flex';

}

function hideSideBar(){
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'none';
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("diapositiva");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


function suscrito(){
  alert('Gracias por dejar que te demos la chapa');
}