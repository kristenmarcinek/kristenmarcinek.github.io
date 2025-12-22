// Main.js

// Select the theme toggle button
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check localStorage for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateButtonIcon(savedTheme);
}

// Function to toggle theme
function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonIcon(newTheme);
}

// Update the button icon based on theme
function updateButtonIcon(theme) {
    if (theme === 'dark') {
        themeToggle.textContent = '🌙';
    } else {
        themeToggle.textContent = '☀️';
    }
}

// Event listener
themeToggle.addEventListener('click', toggleTheme);

// ---------------------------
// Optional: GLightbox initialization
// ---------------------------
const lightbox = GLightbox({
    selector: '.glightbox'
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
