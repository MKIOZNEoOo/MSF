function toggleMenu() {
  const sidebar = document.getElementById('mobileSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const hamburger = document.getElementById('hamburgerBtn');
  const isOpen = sidebar.classList.toggle('open');
  overlay.style.display = isOpen ? 'block' : 'none';
  // Toggle hamburger animation
  if (isOpen) {
    hamburger.classList.add('active');
  } else {
    hamburger.classList.remove('active');
  }
}

function setMode(mode) {
  const body = document.body;
  const iconMobile = document.getElementById('modeIconMobile');
  const iconDesktop = document.getElementById('modeIconBottom');
  const switchDesktop = document.getElementById('modeSwitch');
  const switchMobile = document.getElementById('modeSwitchMobile');
  if (mode === 'dark') {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    if (iconMobile) iconMobile.className = 'fas fa-moon';
    if (iconDesktop) iconDesktop.className = 'fas fa-moon';
    if (switchDesktop) switchDesktop.checked = true;
    if (switchMobile) switchMobile.checked = true;
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    if (iconMobile) iconMobile.className = 'fas fa-sun';
    if (iconDesktop) iconDesktop.className = 'fas fa-sun';
    if (switchDesktop) switchDesktop.checked = false;
    if (switchMobile) switchMobile.checked = false;
  }
}

function toggleMode() {
  const isLight = document.body.classList.contains('light-mode');
  const mode = isLight ? 'dark' : 'light';
  localStorage.setItem('mode', mode);
  setMode(mode);
}

// On page load, set mode from localStorage if available
document.addEventListener('DOMContentLoaded', function() {
  const savedMode = localStorage.getItem('mode') || 'light';
  setMode(savedMode);
});

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

document.querySelectorAll('.mobile-dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevents form submission or link navigation
    const parent = this.closest('.mobile-dropdown');
    parent.classList.toggle('open');
  });
});

function scrollToNextSection() {
  const nextSection = document.getElementById('welcome-section');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}