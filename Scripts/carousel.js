class ImageCarousel {
  constructor(container) {
    this.container = typeof container === "string"
      ? document.querySelector(container)
      : container;

    this.track = this.container.querySelector(".carousel-track");
    this.images = this.track.querySelectorAll("img");

    this.currentIndex = 0;
    this.imageWidth = this.images[0].getBoundingClientRect().width;

    this.nextButton = this.container.querySelector(".next");
    this.prevButton = this.container.querySelector(".prev");

    this.nextButton.addEventListener("click", () => this.next());
    this.prevButton.addEventListener("click", () => this.previous());

    this.update();
  }

  update() {
    this.track.style.transform =
      `translateX(-${this.currentIndex * this.imageWidth}px)`;
  }

  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }

    this.update();
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }

    this.update();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach((container) => {
    new ImageCarousel(container);
  });
});
