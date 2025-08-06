document.addEventListener("DOMContentLoaded", function () {
  // Navigation functionality
  const navLinks = document.querySelectorAll(".nav-links a");
  const pages = document.querySelectorAll(".page");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links and pages
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      pages.forEach((page) => page.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      // Show corresponding page
      const pageId = this.getAttribute("data-page");
      document.getElementById(pageId).classList.add("active");

      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });

  // Dynamic year in footer
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;

  // Dark mode toggle (example placeholder - you would need to implement the actual dark mode logic)
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      // Change icon
      const icon = this.querySelector("i");
      if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
    });
  }

  // Hover effects for cards
  const cards = document.querySelectorAll(".card, .exp-card, .hobby-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Click animation for buttons
  const buttons = document.querySelectorAll("button, .btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.add("clicked");
      setTimeout(() => {
        this.classList.remove("clicked");
      }, 300);
    });
  });
});
