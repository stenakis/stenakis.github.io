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
