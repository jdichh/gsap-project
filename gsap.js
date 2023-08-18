import gsap from "gsap";

gsap.fromTo(".stripe__one",{
    opacity: 0,
    y: -800,
  },
  {
    opacity: 1,
    y: 0,
    delay: 1.5,
    ease: "expo.inOut",
    duration: 0.5,
  }
);

gsap.fromTo(".stripe__two",{
  opacity: 0,
  y: 800,
},
{
  opacity: 1,

  y: 0,
  delay: 2,
  ease: "expo.inOut",
  duration: 0.5,
}
);

gsap.fromTo(".stripe__three",{
  opacity: 0,
  y: -800,
},
{
  opacity: 1,
  y: 0,
  delay: 2.5,
  ease: "expo.inOut",
  duration: 0.5,
}
);

gsap.fromTo(".canvas-container",{
  opacity: 0,
  x: -800,
},
{
  opacity: 1,
  x: 0,
  delay: 1,
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
  delay: 3,
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
  delay: 3.5,
  ease: "expo.inOut",
  duration: 0.5,
}
);