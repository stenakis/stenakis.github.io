gsap.registerPlugin(ScrollTrigger);


window.addEventListener("load", () => {
  const masterTl = gsap.timeline();

  // Transition from Loader to Content
  masterTl
    .to("#loader-wrapper", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        document.getElementById("loader-wrapper").style.display = "none";
      },
    })
    .to(
      "#main-content",
      {
        visibility: "visible",
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3",
    ); // Overlap slightly for smoothness

  // --- Your Existing Track Animations ---
  document.querySelectorAll(".track").forEach((track) => {
    track.innerHTML += track.innerHTML;
  });
  // Top line: scrolls left
  gsap.fromTo(
    ".line-top .track",
    { xPercent: 0 },
    { xPercent: -50, ease: "none", duration: 12, repeat: -1 },
  );

  // Bottom line: scrolls left, different speed
  gsap.fromTo(
    ".line-bottom .track",
    { xPercent: 0 },
    { xPercent: -50, ease: "none", duration: 16, repeat: -1 },
  );

  // Middle line: scrolls RIGHT (opposite direction)
  gsap.fromTo(
    ".line-middle .track",
    { xPercent: -50 },
    { xPercent: 0, ease: "none", duration: 24, repeat: -1 },
  );
});
