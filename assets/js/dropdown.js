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