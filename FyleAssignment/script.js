
let popup =document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}


    let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 1500); 
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showOverlay(element) {
    element.querySelector('.overlay').style.display = 'flex';
}

function hideOverlay(element) {
    element.querySelector('.overlay').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});
function changeimg(fileName){
    let img = document.querySelector("#bannerimg");
    img.setAttribute("src",fileName);
}
