import Glide from "@glidejs/glide";

class HeroSlider {
  constructor() {
    const allSlideShow = document.querySelectorAll(".hero-slider");

    allSlideShow.forEach((currentSlideShow) => {
      // count how many slides there are
      const dotCount = currentSlideShow.querySelectorAll(".hero-slider__slide").length;

      // Generate the HTML for the navigation dots
      let dotHTML = "";
      for (let i = 0; i < dotCount; i++) {
        dotHTML += `<button class="slider__bullet glide__bullet" data-glide-dir="=${i}"></button>`;
      }

      // Add the dots HTML to the DOM
      currentSlideShow
        .querySelector(".glide__bullets")
        .insertAdjacentHTML("beforeend", dotHTML);

      // Actually initialize the glide / slider script
      var glide = new Glide(currentSlideShow, {
        type: "carousel",
        perView: 1,
        autoplay: 3000,
      });

      glide.mount();
    });
  }
}

export default HeroSlider;
