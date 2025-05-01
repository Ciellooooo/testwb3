document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.1
    });
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });

  // print.html

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("printForm");
    const confirmation = document.getElementById("confirmation");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Simulasi kirim data, bisa diubah ke fetch/axios
      setTimeout(() => {
        form.reset();
        confirmation.classList.remove("hidden");
      }, 500);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".menu-item");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.1
    });
  
    items.forEach(item => observer.observe(item));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".alu-card");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });
  
    cards.forEach(card => observer.observe(card));
  });

  // Animasi fade-in saat section masuk viewport
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});




// about us
document.addEventListener("DOMContentLoaded", function() {
  console.log("Print & Eat - About Us Page Loaded");
  // You can add interactive features here, if needed.
});

// print slide

let slideIndex = [0, 0];
const sliders = [document.getElementById("slider1"), document.getElementById("slider2")];

function plusSlides(n, sliderNum) {
  slideIndex[sliderNum] += n;
  showSlides(sliderNum);
}

function showSlides(sliderNum) {
  const slides = sliders[sliderNum].querySelectorAll(".slide");
  if (slideIndex[sliderNum] >= slides.length) slideIndex[sliderNum] = 0;
  if (slideIndex[sliderNum] < 0) slideIndex[sliderNum] = slides.length - 1;

  const offset = -slideIndex[sliderNum] * 100;
  sliders[sliderNum].style.transform = `translateX(${offset}%)`;
}

window.onload = () => {
  showSlides(0);
  showSlides(1);
};

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}





