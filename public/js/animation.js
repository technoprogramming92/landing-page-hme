// Ensure GSAP and ScrollTrigger are loaded in your layout before this script runs.
gsap.registerPlugin(ScrollTrigger, TextPlugin);

/*
 * Animation 1: Fade and Slide Up
 * Target: Elements with the class .animate-section
 * Effect: As you scroll, the element fades in and slides upward.
 */

gsap.from(".animate-section", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  stagger: 0.3, // each element starts 0.3 seconds after the previous one
  scrollTrigger: {
    trigger: ".animate-section",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// Animate the left card: Fade in and slide from left
gsap.from(".card-left", {
  opacity: 0,
  x: -50, // Move from 50px left
  duration: 2, // Increase duration for a smoother effect
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".card-left",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

// Animate the center card: Fade in and slide up (default)
gsap.from(".card-center", {
  opacity: 0,
  y: 50, // Move from 50px below
  duration: 4,
  ease: "power2.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".card-center",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

// Animate the right card: Fade in and slide from right
gsap.from(".card-right", {
  opacity: 0,
  x: 50, // Move from 50px right
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".card-right",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

/*
 * Animation 2: Slide In Text from Left
 * Target: Elements with the class .animate-text-left
 * Effect: As the element scrolls into view, it slides in from the left while fading in.
 */

gsap.from(".animate-text-left", {
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".animate-text-left",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

/*
 * Animation 3: Zoom In Effect
 * Target: Elements with the class .animate-zoom
 * Effect: The element scales up from 0.8 to its full size with a fade-in effect.
 */

// Ensure GSAP, ScrollTrigger, and TextPlugin are loaded and registered

// Create a timeline that triggers when the container (or the first element) enters the viewport
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".animate-zoom", // adjust if needed, e.g., a common container
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// Animation 1: Zoom effect on the heading (or any element with .animate-zoom)
tl.from(".animate-zoom", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  ease: "power2.out",
});

// Animation 2: Typewriter effect on the text (appearing after the zoom effect)
tl.fromTo(
  ".animate-typing",
  { text: "" },
  {
    text: {
      value:
        "At Requiem Consulting, we specialize in providing innovative, reliable solutions—from durable medical equipment to cutting-edge prosthetics, custom orthotics, and essential healthcare supplies. Our focus is on enhancing patient care and ensuring operational excellence across healthcare facilities.",
      delimiter: "", // no extra character between letters
    },
    duration: 3,
    ease: "none",
  }
);

gsap.from(".animate-zoom2", {
  opacity: 0,
  scale: 0.8,
  duration: 3,
  ease: "power2.out",
  stagger: 0.5, // Each element will start 0.3 seconds after the previous one
  scrollTrigger: {
    trigger: ".animate-zoom2",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});
