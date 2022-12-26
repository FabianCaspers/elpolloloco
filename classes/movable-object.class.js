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

    playAnimation(images){
    let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = images[i];
                this.img = this.ImageCache[path];
                this.currentImage++;
    }


    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

    }

}