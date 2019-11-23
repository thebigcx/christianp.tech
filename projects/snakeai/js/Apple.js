class Apple {
  constructor() {
    this.generateNewApple();
  }

  show() {
    fill(255, 0, 0);
    rect(this.x*pixel, this.y*pixel, pixel, pixel);
  }

  generateNewApple() {
    this.x = floor(random(0, dim/pixel));
    this.y = floor(random(0, dim/pixel));
  }
}
