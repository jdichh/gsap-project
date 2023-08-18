import gsap from "gsap";

gsap.from("#stripes", 0.75, {
    opacity: 0,
    delay: 3,
    y: -800,
    ease: "expo.inOut",
  });