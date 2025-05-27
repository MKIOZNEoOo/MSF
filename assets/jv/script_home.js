function toggleMenu() {
  document.getElementById('dropdownMenu').classList.toggle('show');
}

function toggleMode() {
  const body = document.body;
  const iconBottom = document.getElementById('modeIconBottom');
  const isLight = body.classList.contains('light-mode');
  if (isLight) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    if (iconBottom) {
      iconBottom.classList.remove('fa-sun');
      iconBottom.classList.add('fa-moon');
    }
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    if (iconBottom) {
      iconBottom.classList.remove('fa-moon');
      iconBottom.classList.add('fa-sun');
    }
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

// Dropdown click for mobile
document.querySelectorAll('.dropdown > .header-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = this.parentElement;
    dropdown.querySelector('.dropdown-content').classList.toggle('show');
    // Close others
    document.querySelectorAll('.dropdown-content').forEach(dc => {
      if (dc !== dropdown.querySelector('.dropdown-content')) dc.classList.remove('show');
    });
  });
});

// Optional: close dropdowns when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown') && !e.target.closest('.hamburger')) {
    document.querySelectorAll('.dropdown-content').forEach(dc => dc.classList.remove('show'));
    const dropdown = document.getElementById('dropdownMenu');
    if (dropdown && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
});