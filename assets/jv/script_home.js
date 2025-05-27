function toggleMenu() {
  document.getElementById('dropdownMenu').classList.toggle('show');
}
window.onclick = function(event) {
  if (!event.target.matches('.hamburger') && !event.target.closest('.hamburger')) {
    var dropdown = document.getElementById('dropdownMenu');
    if (dropdown && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}

function toggleMode() {
  const body = document.body;
  const iconBottom = document.getElementById('modeIconBottom');
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    if (iconBottom) { iconBottom.classList.remove('fa-moon'); iconBottom.classList.add('fa-sun'); }
  } else {
    if (iconBottom) { iconBottom.classList.remove('fa-sun'); iconBottom.classList.add('fa-moon'); }
  }
}

let lastScrollY = window.scrollY;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', function() {
  if (!header) return;
  if (window.scrollY > lastScrollY && window.scrollY > 80) {
    // Scrolling down
    header.classList.add('header-hide');
  } else {
    // Scrolling up
    header.classList.remove('header-hide');
  }
  lastScrollY = window.scrollY;
});


// Add toggle effect to header links
document.querySelectorAll('.menu-toggle-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent navigation for demo; remove if you want navigation
    toggleMenu();
  });
});