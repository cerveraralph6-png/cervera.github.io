  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.getElementById("nav-links");

 
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });


  document.addEventListener("click", function (event) {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove("show");
    }
  });

