class MovableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    currenImage = 0;
    ImageCache = {};
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    isAboveGround() {
        return this.y < 155;
    }

    // loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); // gleich wie this.img =  document.getElementById('image') <img id="image">
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            img.style = 'transform: scaleX(-1)';
            this.ImageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
    }


    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
        setInterval(() => {
        }, 1000 / 60);

    }

    jump() {
        this.speedY = 30;
    }

}

