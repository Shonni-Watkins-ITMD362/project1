document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider a");
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");

    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 700; // Moves by 700px each time
        slider.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener("click", () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first image
        }
        updateSlider();
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1; // Loop back to the last image
        }
        updateSlider();
    });
});
