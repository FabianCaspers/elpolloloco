class MovableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    currenImage = 0;
    ImageCache = {};
    speed = 0.15;

    // loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); // gleich wie this.img =  document.getElementById('image') <img id="image">
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.ImageCache[path] = img;
        });
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