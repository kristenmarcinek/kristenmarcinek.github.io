// theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
  if (themeToggle) updateButtonIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = body.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  if (themeToggle) updateButtonIcon(newTheme);
}

function updateButtonIcon(theme) {
  if (!themeToggle) return;
  themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
}

if (themeToggle) {
  const cur = body.getAttribute('data-theme') || 'dark';
  updateButtonIcon(cur);
  themeToggle.addEventListener('click', toggleTheme);
}

// photos
if (typeof GLightbox !== "undefined") {
  new GLightbox({ selector: ".glightbox" });
}

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 30) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
});

// hamburger menu
const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbarMenu");
if (hamburger && navbarMenu) {
  hamburger.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
  });
}

// filter by tag 
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("project-filter");
  if (c == "all") c = "";
  // add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
if (btnContainer) {
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      if (current.length) current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

// button to scroll to top
let mybutton = document.getElementById("toTopBtn");
if (mybutton) {
  window.addEventListener('scroll', scrollFunction);
}

function scrollFunction() {
  if (!mybutton) return;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

