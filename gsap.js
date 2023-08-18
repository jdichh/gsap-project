import gsap from "gsap";

gsap.from("#stripes", 0.5, {
    opacity: 0,
    delay: 1.5,
    x: 800,
    y: -800,
    ease: "expo.inOut",
  });