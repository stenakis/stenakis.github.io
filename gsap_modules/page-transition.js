// run enter animation
function enterAnimation() {
  gsap.from("body > *:not(script):not(style)", {
    x: -60,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: "power2.out",
  });
}

// normal load
window.addEventListener("load", enterAnimation);

// back/forward navigation
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    enterAnimation();
  }
});
