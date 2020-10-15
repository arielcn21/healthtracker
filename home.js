
/* for the login page */
var login = document.getElementById('idlogin');


window.onclick = function(event) {
    if (event.target == login) {
        login.style.display = "none";
    }
}

/* homepage */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var coll = document.getElementsByClassName("collaps");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});
}
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
document.body.style.backgroundColor = "white";
}


/* Tracker */
function calculateCaloriesBurned() {
  var bw = document.getElementById('bodyWeight').value;
  var cals = (4 * 3.5 * bw)/200;
  document.getElementById('caloriesBurned').value = cals;
}

function stepCaloriesBurned() {
  var st = document.getElementById('stepx').value;
  var cals = (10 * st)/200;
  document.getElementById('caloriesBurnedx').value = cals;
}
