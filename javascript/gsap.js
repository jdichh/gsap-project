import gsap from "gsap";

const body = document.body
body.classList.add("loading");

gsap.fromTo(".canvas-container",{
  opacity: 0,
  x: -800,
},
{
  opacity: 1,
  x: 0,
  delay: 4,
  ease: "expo.inOut",
  duration: 0.5,
}
);

gsap.fromTo("nav",{
  opacity: 0,
  y: -300,
},
{
  opacity: 1,
  y: 0,
  delay: 4.5,
  ease: "expo.inOut",
  duration: 0.5,
}
);

gsap.fromTo(".main-content",{
  opacity: 0,
  x: 800,
},
{
  opacity: 1,
  x: 0,
  delay: 4.75,
  ease: "expo.inOut",
  duration: 0.5,
}
);

gsap.fromTo(".main-content__order__button",{
  opacity: 0,
  x: 800,
},
{
  opacity: 1,
  x: 0,
  delay: 5.25,
  ease: "expo.inOut",
  duration: 1,
  onComplete: () => {
    body.classList.remove("loading");
  }
}
);