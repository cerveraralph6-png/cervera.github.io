  function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
  }

  // Close menu if clicked outside
  document.addEventListener("click", function(event) {
    const nav = document.getElementById("nav");
    const navLinks = document.getElementById("nav-links");
    const hamburger = document.querySelector(".hamburger");

    // If menu is open and click is outside nav
    if (navLinks.classList.contains("show") && !nav.contains(event.target)) {
      navLinks.classList.remove("show");
    }
  });   