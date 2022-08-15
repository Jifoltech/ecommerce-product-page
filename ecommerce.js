let card = document.getElementById('open-cart');
let empty = document.getElementById('empty');
let full = document.getElementById('full');
let number = document.querySelector('.number');
let answer = document.querySelector('.answer');


// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

let quantity = 0;

let increament = document.getElementById("increament").addEventListener("click", () => {
    quantity += 1;
    document.getElementById("quantity").textContent = quantity;
    upload();
    number.innerHTML= quantity;
    answer.innerHTML=`$ ${quantity * 125}.00`;
});

let decreament = document.getElementById("decreament").addEventListener("click", () => {
    if (quantity > 0) {
      quantity -= 1;
      document.getElementById("quantity").textContent = quantity;
      upload();
    }
    if(quantity === 0){
      document.querySelector(".Amount").style.visibility="hidden";
      full.style.visibility='hidden';
      empty.style.display='block';
    }
    number.innerHTML= quantity;
    answer.innerHTML=`$ ${quantity * 125}.00`;
     
});

let upload = ()=>{
    let cartIcon = document.getElementById("amount");
    cartIcon.innerHTML=quantity;
}

let cartBtn = document.querySelector(".cart").addEventListener("click", () => {
  if (quantity > 0){
    document.querySelector(".Amount").style.visibility="visible";
    full.style.visibility='visible';
    empty.style.display='none';
  }
})

document.getElementById('update').addEventListener('click',()=>{
  card.classList.toggle('display');
});

