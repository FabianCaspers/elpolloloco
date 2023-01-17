class DrawableObject {
    img;
    imageCash = {};
    currentImage = 0;
    x = 50;
    y = 230;
    height = 200;
    width = 150;
    

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    // loadImage(img/test.png)
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image');  <img id="image" src="">
        this.img.src = path;
    }
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCash[path] = img;
        });
    }


    setPercentage(percentage) {
        this.percentage = percentage; 
        let path = this.IMAGES[this.resolveImageIndex()]
        this.img = this.imageCash[path];
    }


    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}