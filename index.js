// Import stylesheets

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    console.log("click")
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Check if the device has a touch screen
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }

  // Add or remove the 'hovered' class based on touch screen detection
  function handleTouch() {
    const portfolioItems = document.querySelectorAll('.portfolio__item');

    if (isTouchDevice()) {
      portfolioItems.forEach(item => {
        item.addEventListener('touchstart', () => {
          item.classList.add('hovered');
        });

        item.addEventListener('touchend', () => {
          item.classList.remove('hovered');
        });
      });
    }
  }

  // Run the function when the page is loaded
  document.addEventListener('DOMContentLoaded', handleTouch);

// zobrazit fotky affiliate produktů
// zmenšit text a upravit v affiliate sekci
// přidat blog
//zjisti co s vat