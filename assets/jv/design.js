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

function toggleMode() {
  const body = document.body;
  const isLight = body.classList.toggle('light-mode');
  const iconMobile = document.getElementById('modeIconMobile');
  const labelMobile = document.getElementById('modeLabelMobile');
  const iconDesktop = document.getElementById('modeIconBottom');

  if (isLight) {
    if (iconMobile) iconMobile.className = 'fas fa-sun';
    if (labelMobile) labelMobile.textContent = 'Light Mode';
    if (iconDesktop) iconDesktop.className = 'fas fa-sun';
  } else {
    if (iconMobile) iconMobile.className = 'fas fa-moon';
    if (labelMobile) labelMobile.textContent = 'Dark Mode';
    if (iconDesktop) iconDesktop.className = 'fas fa-moon';
  }
}

// On page load, set correct label and icon
document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  const iconMobile = document.getElementById('modeIconMobile');
  const labelMobile = document.getElementById('modeLabelMobile');
  const iconDesktop = document.getElementById('modeIconBottom');
  if (body.classList.contains('light-mode')) {
    if (iconMobile) iconMobile.className = 'fas fa-sun';
    if (labelMobile) labelMobile.textContent = 'Light Mode';
    if (iconDesktop) iconDesktop.className = 'fas fa-sun';
  } else {
    if (iconMobile) iconMobile.className = 'fas fa-moon';
    if (labelMobile) labelMobile.textContent = 'Dark Mode';
    if (iconDesktop) iconDesktop.className = 'fas fa-moon';
  }
});