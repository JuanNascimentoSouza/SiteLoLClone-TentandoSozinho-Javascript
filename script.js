document.querySelector('video').play();

const slides = document.querySelectorAll('.slide', '.slide2');
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active','active2');
    if (index === currentSlide) {
      slide.classList.add('active','active2');
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

setInterval(nextSlide, 3000); // Trocar de slide a cada 3 segundos (3000 ms)