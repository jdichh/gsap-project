import gsap from "gsap";

gsap.fromTo("#stripes",{
    opacity: 0,
    x: 100,
    y: -100,
  },
  {
    opacity: 1,
    x: 0,
    y: 0,
    delay: 1.25,
    ease: "expo.inOut",
    duration: 0.5,
  }
);

gsap.fromTo(".media",{
  opacity: 0,
  x: 100,
},
{
  opacity: 1,
  x: 0,
  y: 0,
  delay: 1.5,
  ease: "expo.inOut",
  duration: 1,
}
);

gsap.fromTo("nav",{
  opacity: 0,
  y: -100,
},
{
  opacity: 1,
  x: 0,
  y: 0,
  delay: 1.5,
  ease: "expo.inOut",
  duration: 1,
}
);

gsap.fromTo(".main-content",{
  opacity: 0,
  x: 500,
},
{
  opacity: 1,
  x: 0,
  y: 0,
  delay: 1.5,
  ease: "expo.inOut",
  duration: 1,
}
);

gsap.fromTo(".canvas-container",{
  opacity: 0,
  x: -500,
},
{
  opacity: 1,
  x: 0,
  y: 0,
  delay: 1.5,
  ease: "expo.inOut",
  duration: 1,
}
);