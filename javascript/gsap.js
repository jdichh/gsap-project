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

gsap.fromTo('.canvas-container', {
  x: 0, 
},
{
  x: '100%',
  ease: 'none', 
  scrollTrigger: {
    trigger: '#the-big-question',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  },
});

gsap.fromTo('.stripe__one, .stripe__two, .stripe__three', {
  x: 0, 
},
{
  x: '920%',
  ease: 'none', 
  scrollTrigger: {
    trigger: '#the-big-question',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  },
});