gsap.registerPlugin(SplitText, ScrollTrigger);

SplitText.create(".split", {
  type: "words, chars",
  onSplit: (self) => {
    return gsap.from(self.chars, {
      duration: 0.25,
      y: 40,
      opacity: 0,
      stagger: 0.01,
      ease: "power1.inOut",
      smartWrap: true,
      /*scrollTrigger: {
    trigger: ".split",
    toggleActions: "play none none none",
    start: "top 30%",
    once: true,
  },*/
    });
  },
});

SplitText.create(".split_delayed", {
  type: "lines",
  autoSplit: true,
  onSplit: (self) => {
    return gsap.from(self.lines, {
      duration: 0.25,
      y: 40,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power1.inOut",
      delay: 0.15,
      /*scrollTrigger: {
    trigger: ".split",
    toggleActions: "play none none none",
    start: "top 30%",
    once: true,
  },*/
    });
  },
});

// Line 1 and 3: Move Left
gsap.to(".line-top .track", {
  xPercent: -50,
  ease: "none",
  duration: 10,
  repeat: -1
});

gsap.to(" .line-bottom .track", {
  xPercent: -50,
  ease: "none",
  duration: 8,
  repeat: -1
});

// Line 2: Move Right (Inverted)
// Note: We start at -50 and move to 0
gsap.set(".line-middle .track", { xPercent: -50 });

gsap.to(".line-middle .track", {
  xPercent: 0,
  ease: "none",
  duration: 18,
  repeat: -1
});