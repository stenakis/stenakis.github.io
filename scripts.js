const demoDiv = document.querySelector("#animatedDiv");
  window.addEventListener('scroll', function() {
    // Map scroll range (0px to 2000px) to scale (0.2 to 0.7)
    let scale = 0.2 + (pageYOffset / 2000) * (0.7 - 0.2);
    scale = Math.max(0.2, Math.min(scale, 0.7)); // clamp between 0.2 and 0.7
    animatedDiv.style.transform = `scale(${scale})`;
  });