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
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(dc => dc.classList.remove('show'));
  }
});

function toggleMenu() {
  const sidebar = document.getElementById('mobileSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.toggle('show');
  overlay.classList.toggle('show');
}

// Optional: close sidebar with ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    document.getElementById('mobileSidebar').classList.remove('show');
    document.getElementById('sidebarOverlay').classList.remove('show');
  }
});

function setMode(mode) {
  const body = document.body;
  const iconMobile = document.getElementById('modeIconMobile');
  const iconDesktop = document.getElementById('modeIconBottom');
  if (mode === 'dark') {
    body.classList.remove('light-mode');
    if (iconMobile) iconMobile.className = 'fas fa-moon';
    if (iconDesktop) iconDesktop.className = 'fas fa-moon';
  } else {
    body.classList.add('light-mode');
    if (iconMobile) iconMobile.className = 'fas fa-sun';
    if (iconDesktop) iconDesktop.className = 'fas fa-sun';
  }
}

function toggleMode() {
  const isLight = document.body.classList.toggle('light-mode');
  const mode = isLight ? 'light' : 'dark';
  localStorage.setItem('mode', mode);
  setMode(mode);
}

// On page load, set mode from localStorage if available
document.addEventListener('DOMContentLoaded', function() {
  const savedMode = localStorage.getItem('mode') || 'light';
  setMode(savedMode);
}); 