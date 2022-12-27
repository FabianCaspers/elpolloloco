class Cloud extends MovableObject {
  y = 5;
  width = 600;
  height = 400;

  constructor(imagePath, x) {
    super().loadImage(imagePath);

    this.x = x;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 20);
  }
}
