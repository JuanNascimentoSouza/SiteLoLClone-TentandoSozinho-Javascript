document.querySelector('video').play();

const slides = document.querySelectorAll('.slide', '.slide2');
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'active2');
    if (index === currentSlide) {
      slide.classList.add('active', 'active2');
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

// Valores iniciais e finais (RGB)
const startColor = { r: 0, g: 0, b: 0 };
const endColor = { r: 200, g: 170, b: 110 };

// Número de passos e intervalo entre cada passo (em ms)
const steps = 60;
const intervalTime = 50; // 50 ms = 0.05 s

// Referência ao botão
const myButton = document.getElementById("myButton");

// Função que inicia a animação
function animateTextColor() {
  let currentStep = 0;
  const intervalId = setInterval(() => {
    currentStep++;
    // Proporção do quanto já avançou
    const progress = currentStep / steps;

    // Cálculo de cada componente RGB
    const r = Math.floor(startColor.r + (endColor.r - startColor.r) * progress);
    const g = Math.floor(startColor.g + (endColor.g - startColor.g) * progress);
    const b = Math.floor(startColor.b + (endColor.b - startColor.b) * progress);

    // Aplica a cor ao texto do botão
    myButton.style.color = `rgb(${r}, ${g}, ${b})`;

    // Verifica se chegou ao final da animação
    if (currentStep >= steps) {
      clearInterval(intervalId);
    }
  }, intervalTime);
}

// Dispara a animação ao clicar no botão
myButton.addEventListener("click", animateTextColor);