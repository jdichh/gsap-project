import gsap from "gsap";

gsap.fromTo(".canvas-container",{
  opacity: 0,
  x: -800,
},
{
  opacity: 1,
  x: 0,
  delay: 4.25,
  ease: "expo.inOut",
  duration: 0.5,
}
);

gsap.fromTo("nav",{
  opacity: 0,
  x: 800,
},
{
  opacity: 1,
  x: 0,
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
  delay: 5,
  ease: "expo.inOut",
  duration: 1,
}
);