// theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateButtonIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonIcon(newTheme);
}

// change icon
function updateButtonIcon(theme) {
    if (theme === 'dark') {
        themeToggle.textContent = '🌙';
    } else {
        themeToggle.textContent = '☀️';
    }
}

themeToggle.addEventListener('click', toggleTheme);

// photos
if (typeof GLightbox !== "undefined") {
  new GLightbox({ selector: ".glightbox" });
}

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// hamburger menu
const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbarMenu");

hamburger.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});

