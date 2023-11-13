// Initialization for ES Users
import { Carousel, initTE } from 'tw-elements';

initTE({ Carousel });

// Animated navbar

// We store the navbar element in a variable using the getElementById method and the id of the navbar
const animatedNavbar = document.getElementById('animated-navbar');

// We add class .bg-red-500 to the navbar when the user scrolls down, and remove it when the navbar is at the top of the page
window.addEventListener('scroll', function () {
  // If windows.scrollY > 0 (that means the user has scrolled down) we add class .bg-red-500 to the navbar
  if (window.scrollY > 0) {
    animatedNavbar.classList.add('bg-red-500');

  // If windows.scrollY = 0 (that means the navbar is at the top of the page) we remove class .bg-red-500 from the navbar
  } else {
    animatedNavbar.classList.remove('bg-red-500');
  }
});






/*Download*/


