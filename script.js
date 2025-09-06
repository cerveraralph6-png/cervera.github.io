document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  const navLinks = document.getElementById('nav-links'); // <- make sure your <ul> has this id
  const hamburger = document.querySelector('.hamburger');

  // safety: if elements not present, stop
  if (!nav || !navLinks || !hamburger) return;

  // Toggle menu when hamburger is clicked
  hamburger.addEventListener('click', function (e) {
    navLinks.classList.toggle('show');
    // stop this click from bubbling up to the document listener (prevents immediate close)
    e.stopPropagation();
  });

  // Prevent clicks inside the nav from bubbling to document (so clicking links doesn't immediately trigger document click)
  nav.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  // Close when clicking anywhere else on the page
  document.addEventListener('click', function () {
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });

  // Optional: close when a nav link is clicked (handy for single-page anchors)
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.classList.remove('show');
    });
  });

  // Optional: close with Escape key
  document.addEventListener('keyup', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
});