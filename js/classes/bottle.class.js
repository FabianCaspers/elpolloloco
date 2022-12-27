class Bottle extends MovableObject {
    y = 350;
    width = 60;
    height = 75;
    IMAGES = ["./img/6_salsa_bottle/1_salsa_bottle_on_ground.png"];

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    constructor() {
        super().loadImage(this.IMAGES);

        this.x = 200 + Math.random() * 3500;

    }
}
