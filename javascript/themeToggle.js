const themeToggle = document.querySelector('#theme-toggle');
const nav = document.querySelector('nav');
const body = document.body;
const orderButtons = document.querySelectorAll('.order-button');

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("light");
});

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  nav.classList.toggle('dark');
  orderButtons.forEach(button => button.classList.toggle('dark'));
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

themeToggle.addEventListener("change", () => {
  const selectedTheme = themeToggle.isPressed ? "dark" : "light";
  body.classList.remove("light", "dark");
  body.classList.add(selectedTheme);
  nav.classList.remove("light", "dark");
  nav.classList.add(selectedTheme);
  orderButtons.forEach(button => button.classList.remove("light", "dark"));
  orderButtons.forEach(button => button.classList.add(selectedTheme));
  localStorage.setItem("theme", selectedTheme);
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  nav.classList.add(savedTheme);
  orderButtons.forEach(button => button.classList.add(savedTheme));
  themeToggle.isPressed = savedTheme === "dark";
}
