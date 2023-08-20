import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const body = document.body
body.classList.add("loading");

gsap.fromTo(".canvas-container",{
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

gsap.fromTo("nav",{
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

gsap.fromTo(".main-content",{
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

gsap.fromTo(".main-content__order__button",{
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
  }
}
);

gsap.fromTo(".feature-section",{
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


function saveAnimationProgress(key, value) {
  localStorage.setItem(key, value);
}

function getSavedAnimationProgress(key) {
  return localStorage.getItem(key);
}

function animateCanvasAndStripes() {
  const savedCanvasProgress = getSavedAnimationProgress('canvasProgress');
  const canvasContainer = document.querySelector('.canvas-container');
  
  let xOffset;

  if (window.innerWidth >= 5120) {
    xOffset = window.innerWidth * 0.325;
  } else if (window.innerWidth >= 3840) {
    xOffset = window.innerWidth * 0.425;
  } else if (window.innerWidth >= 3440) {
    xOffset = window.innerWidth * 0.475;
  }  else if (window.innerWidth >= 2560) {
    xOffset = window.innerWidth * 0.425;
  }

  const canvasAnimation = gsap.fromTo(
    canvasContainer,
    {
      x: savedCanvasProgress || 0,
    },
    {
      x: xOffset,
      ease: 'none',
      scrollTrigger: {
        trigger: '#breakpoint',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onUpdate: (self) => {
          saveAnimationProgress('canvasProgress', self.progress);
        },
      },
    }
  );

  const savedStripesProgress = getSavedAnimationProgress('stripesProgress');

  gsap.fromTo(
    '.stripe__one, .stripe__two, .stripe__three',
    {
      x: savedStripesProgress || 0,
    },
    {
      x: xOffset,
      ease: 'none',
      scrollTrigger: {
        trigger: '#breakpoint',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onUpdate: (self) => {
          saveAnimationProgress('stripesProgress', self.progress);
        },
      },
    }
  );

  if (savedCanvasProgress) {
    canvasAnimation.progress(Number(savedCanvasProgress));
  }
}

animateCanvasAndStripes();