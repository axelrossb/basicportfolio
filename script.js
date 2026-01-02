// Hamburger Menu (your original)
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark/Light Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
function toggleTheme() {
  const currentTheme = document.body.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
  toggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}
toggleButton.addEventListener('click', toggleTheme);

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.dataset.theme = savedTheme;
  toggleButton.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Fade-in on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
