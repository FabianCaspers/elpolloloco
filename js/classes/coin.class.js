class Coin extends MovableObject {
  width = 90;
  height = 90;
  IMAGES = ["./img/8_coin/coin_1.png", "./img/8_coin/coin_2.png"];

  offset = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
  };

  constructor() {
    super().loadImage(this.IMAGES[0]);
    this.loadImages(this.IMAGES);
    this.x = 200 + Math.random() * 3500;
    this.y = 135 + Math.random() * 200;
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES.length; 
      let path = this.IMAGES[i]; 
      this.img = this.imageCash[path];
      this.currentImage++;
    }, 400);
  }
}
