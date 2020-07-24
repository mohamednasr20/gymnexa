class Slide {
  constructor(el, count, amount) {
    this.el = el;
    this.count = count;
    this.amount = amount;
  }

  slideInternal() {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    if (this.count < 5) {
      this.count++;
      this.el.style.transition = "transform 1s ease";
      this.el.style.transform = `translate(${this.count * this.amount}%)`;
    } else {
      this.count = 0;
      this.el.style.transform = "translate(0)";
    }
  }

  prevSlide(num) {
    if (this.count > num) {
      this.el.style.transition = "transform 1s ease";
      this.count--;
      this.el.style.transform = `translate(${this.count * this.amount}%)`;
    } else {
      count = 5;
      this.el.style.transform = `translate(${this.count * this.amount}%)`;
    }
  }

  slideLoop(min, max) {
    if (this.count < min || this.count > max) this.el.style.transition = "none";
  }
}
