const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.crousel-button.next');
const prevButton = document.querySelector('.crousel-button.previous');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.setAttribute('data-active', '');
        } else {
            slide.removeAttribute('data-active');
        }
    });
}

// Show initial slide
showSlide(currentIndex);

// Next slide
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Previous slide
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Optional: auto-slide every 5 seconds
// setInterval(() => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
// }, 5000);
