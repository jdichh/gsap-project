const themeToggle = document.querySelector('#theme-toggle');
const orderButton = document.querySelector('.order-button');
const nav = document.querySelector('nav')
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  nav.classList.toggle('dark');
  orderButton.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

themeToggle.addEventListener("change", () => {
    const selectedTheme = themeToggle.isPressed ? "dark" : "light";
    body.classList.remove("light", "dark");
    body.classList.add(selectedTheme);
    nav.classList.remove("light", "dark");
    nav.classList.add(selectedTheme);
    orderButton.classList.remove("light", "dark");
    orderButton.classList.add(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  });
  
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
    nav.classList.add(savedTheme);
    orderButton.classList.add(savedTheme);
    themeToggle.isPressed = savedTheme === "dark";
  }