const open = document.getElementById("open");
const close = document.getElementById("close");
const slider = document.querySelector(".slider");
const listItem = document.querySelectorAll(".list_item");
const typewriterElements = document.querySelectorAll(".hero_header");

// Nav slider open and close
function navSlider() {
  slider.classList.toggle("slide");
  open.classList.toggle("hidden");
  close.classList.toggle("hidden");
}

open.addEventListener("click", navSlider);
close.addEventListener("click", navSlider);

listItem.forEach((el) => {
  el.addEventListener("click", navSlider);
});

// Typewriter effect for heading
typewriterElements.forEach((element, index) => {
  const text = element.textContent;
  element.textContent = "";

  [..."A healthy organic meal to get you through the day"].forEach(
    (char, i) => {
      setTimeout(() => {
        element.textContent += char;
      }, i * 100 + index * 1000);
    }
  );
});
