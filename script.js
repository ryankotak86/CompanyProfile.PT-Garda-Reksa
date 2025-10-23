// Toggle mobile menu
const toggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Animasi muncul (scroll)
document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach(el => observer.observe(el));
});
