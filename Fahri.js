function submitName() {
    var name = document.getElementById("name").value;
    if (name.trim() !== "") {
        localStorage.setItem("userName", name);
        window.location.href = "Fahri.html";
    } else {
        alert("Please enter your name.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var name = localStorage.getItem("userName");
    if (name) {
        var userNameElement = document.getElementById("user-name");
        if (userNameElement) {
            userNameElement.innerText = name;
        }
    } else if (window.location.pathname.includes("Fahri2.html")) {
        window.location.href = "Fahri1.html";
    }
});


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
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

// navbar animation
document.addEventListener('DOMContentLoaded', function() {
  const homeLink = document.querySelector('nav a[href="#main-content"]');
  const mainContent = document.getElementById('main-content');
  const homeIcon = document.querySelector('.home-icon');

  homeLink.addEventListener('click', function(event) {
      event.preventDefault(); // Mencegah perilaku bawaan link

      // Scroll ke bagian main-content
      mainContent.scrollIntoView({ behavior: 'smooth' });

      
  });
});

