// JavaScript to toggle mobile menu
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full'); // Show the sidebar
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full'); // Hide the sidebar
});






