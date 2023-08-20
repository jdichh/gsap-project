import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const body = document.body;
body.classList.add("loading");

gsap.fromTo(
  ".canvas-container",
  {
    opacity: 0,
    x: -800,
  },
  {
    opacity: 1,
    x: 0,
    delay: 2.25,
    ease: "expo.inOut",
    duration: 0.5,
  }
);

gsap.fromTo(
  "nav",
  {
    opacity: 0,
    y: -300,
  },
  {
    opacity: 1,
    y: 0,
    delay: 2.5,
    ease: "expo.inOut",
    duration: 0.5,
  }
);

gsap.fromTo(
  ".main-content",
  {
    opacity: 0,
    x: 800,
  },
  {
    opacity: 1,
    x: 0,
    delay: 2.75,
    ease: "expo.inOut",
    duration: 0.5,
  }
);

gsap.fromTo(
  ".main-content__order__button",
  {
    opacity: 0,
    x: 800,
  },
  {
    opacity: 1,
    x: 0,
    delay: 3,
    ease: "expo.inOut",
    duration: 1,
    onComplete: () => {
      body.classList.remove("loading");
    },
  }
);

gsap.fromTo(
  ".feature-section",
  {
    opacity: 0,
    x: 800,
  },
  {
    opacity: 1,
    x: 0,
    delay: 3.25,
    ease: "expo.inOut",
    duration: 1,
  }
);

///// ScrollTriggers
gsap.registerPlugin(ScrollTrigger);

let canvasAnimation;
let stripesAnimation;

function animateCanvasAndStripes() {
  const canvasContainer = document.querySelector(".canvas-container");

  function resetAnimations() {
    if (canvasAnimation) {
      canvasAnimation.scrollTrigger.kill();
    }
    if (stripesAnimation) {
      stripesAnimation.scrollTrigger.kill();
    }

    let xOffset;

    if (window.innerWidth >= 5120) {
      xOffset = window.innerWidth * 0.325;
    } else if (window.innerWidth >= 3840) {
      xOffset = window.innerWidth * 0.425;
    } else if (window.innerWidth >= 3440) {
      xOffset = window.innerWidth * 0.475;
    } else if (window.innerWidth >= 2560) {
      xOffset = window.innerWidth * 0.425;
    } else if (window.innerWidth >= 1920) {
      xOffset = window.innerWidth * 0.6;
    } else if (window.innerWidth >= 1200) {
      xOffset = window.innerWidth * 0.55;
    }

    canvasAnimation = gsap.fromTo(
      canvasContainer,
      {
        x: 0,
      },
      {
        x: xOffset,
        ease: "none",
        scrollTrigger: {
          trigger: "#breakpoint",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    stripesAnimation = gsap.fromTo(
      ".stripe__one, .stripe__two, .stripe__three",
      {
        x: 0,
      },
      {
        x: xOffset,
        ease: "none",
        scrollTrigger: {
          trigger: "#breakpoint",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }

  resetAnimations();
  window.addEventListener("resize", resetAnimations);
}

animateCanvasAndStripes();