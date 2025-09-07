  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.getElementById("nav-links");

  // Toggle when clicking the hamburger
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // Close when clicking anywhere else
  document.addEventListener("click", function (event) {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove("show");
    }
  });
