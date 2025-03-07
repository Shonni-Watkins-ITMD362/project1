document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const images = slider.querySelectorAll("a"); // Selects the `<a>` elements wrapping images
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  let currentIndex = 0;

  function updateSlider() {
    const offset = -currentIndex * slider.clientWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });

  // Adjust slider size dynamically
  window.addEventListener("resize", updateSlider);
});
