function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  // Toggle 'open' class
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  
  // Set aria-expanded for accessibility
  const isOpen = menu.classList.contains("open");
  icon.setAttribute("aria-expanded", isOpen);
}

document.addEventListener('DOMContentLoaded', () => {
  const arrows = document.querySelectorAll('.arrow-down');
  arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
          const targetId = arrow.getAttribute('data-target');
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
          } else {
              console.warn(`Target section with ID '${targetId}' not found.`);
          }
      });
  });

  // Close menu on link click
  const menuLinks = document.querySelectorAll('.menu-links a');
  menuLinks.forEach(link => {
      link.addEventListener('click', toggleMenu);
  });
});
