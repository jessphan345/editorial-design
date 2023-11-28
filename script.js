// GSAP library
// https://unpkg.co/gsap@3/dist/gsap.min.js

// ScrollTrigger plugin
// https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js

// Install Plugin
gsap.registerPlugin(ScrollTrigger);

// defaults
ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});

// Panel One
gsap.to(".one h1", {
  scrollTrigger: "one",
  backgroundColor: "blue",
  duration: 1,
  rotate: 0,
  opacity: 1
});

// Panel Two
gsap.to(".two", {
  scrollTrigger: "two"
});

// Panel Three
gsap.to(".three p", {
  scrollTrigger: "three",
  duration: 5,
  letterSpacing: 0
});

// Panel Four
gsap.to(".four", {
  scrollTrigger: "four"
});

// Panel Five
gsap.to(".five", {
  scrollTrigger: "five"
});

// Panel six
gsap.to(".six", {
  scrollTrigger: "six",
  translateX: 0,
  duration: 5
});
