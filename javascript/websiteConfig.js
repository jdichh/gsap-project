document.addEventListener(window.onload, () => {
  const nav = document.querySelector("nav");
  const navLinks = nav.querySelectorAll(".nav__links li a");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const threshold = 1;

    if (scrollPosition > threshold) {
      console.log('scroll')
      nav.classList.add("scrolled");
      navLinks.forEach((link) => link.classList.add("scrolled"));
    } else {
      nav.classList.remove("scrolled");
      navLinks.forEach((link) => link.classList.remove("scrolled"));
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
});
