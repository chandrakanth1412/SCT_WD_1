// Select elements
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('nav-links');
const hamburger = document.getElementById('hamburger');

// Change nav style on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { // Threshold for "scrolled" (adjust as needed)
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle mobile menu
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active'); // Adds/removes 'active' class for show/hide
});