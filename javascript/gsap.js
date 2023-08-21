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
  ".reviews-section",
  {
    opacity: 0,
    x: -800,
  },
  {
    opacity: 1,
    x: 0,
    delay: 2.75,
    ease: "expo.inOut",
    duration: 1,
  }
);

gsap.fromTo(
  ".question-section",
  {
    opacity: 0,
    x: 800,
  },
  {
    opacity: 1,
    x: 0,
    delay: 2.75,
    ease: "expo.inOut",
    duration: 1,
  }
);

gsap.fromTo(
  ".purchase_prompt",
  {
    opacity: 0,
    x: -800,
  },
  {
    opacity: 1,
    x: 0,
    delay: 2.75,
    ease: "expo.inOut",
    duration: 1,
  }
);

gsap.fromTo(
  ".order-button",
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
    delay: 2.75,
    ease: "expo.inOut",
    duration: 1,
  }
);

///// ScrollTriggers
gsap.registerPlugin(ScrollTrigger);

let canvasAnimation;
let stripesAnimation;
// let resetCanvasAnimation;
// let resetStripesAnimation;

function animateCanvasAndStripes() {

  function resetAnimations() {
    if (canvasAnimation) {
      canvasAnimation.scrollTrigger.kill();
    }
    if (stripesAnimation) {
      stripesAnimation.scrollTrigger.kill();
    }
    // if (resetCanvasAnimation) {
    //   resetCanvasAnimation.scrollTrigger.kill();
    // }
    // if (resetStripesAnimation) {
    //   resetStripesAnimation.scrollTrigger.kill();
    // }

    let xOffset;

    if (window.innerWidth >= 5120) {
      xOffset = window.innerWidth * 0.2;
    } else if (window.innerWidth >= 3840) {
      xOffset = window.innerWidth * 0.27;
    } else if (window.innerWidth >= 3440) {
      xOffset = window.innerWidth * 0.3;
    } else if (window.innerWidth >= 2560) {
      xOffset = window.innerWidth * 0.425;
    } else if (window.innerWidth >= 1920) {
      xOffset = window.innerWidth * 0.57;
    } else if (window.innerWidth >= 1200) {
      xOffset = window.innerWidth * 0.59;
    }

    canvasAnimation = gsap.fromTo(
      ".canvas-container",
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

    // The stripes do not work properly on refreshing the page.
    // resetCanvasAnimation = gsap.fromTo(
    //   ".canvas-container",
    //   {
    //     x: xOffset,
    //   },
    //   {
    //     x: 0,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: "#breakpoint2",
    //       start: "top center",
    //       end: "bottom center",
    //       scrub: true,
    //     },
    //   }
    // );

    // resetStripesAnimation = gsap.fromTo(
    //   ".stripe__one, .stripe__two, .stripe__three",
    //   {
    //     x: xOffset,
    //   },
    //   {
    //     x: 0,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: "#breakpoint2",
    //       start: "top center",
    //       end: "bottom center",
    //       scrub: true,
    //     },
    //   }
    // );

  }

  resetAnimations();
  window.addEventListener("resize", resetAnimations);
}

animateCanvasAndStripes();