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
// Rahem um die Objekte, um die Collision festzustellen
    /*drawFrame(ctx) {
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x + 50, this.y + 100, this.width - 100, this.height -110);
            ctx.stroke();
        }
    }

    drawFrameChicken(ctx) {
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "red";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawFrameEndboss(ctx) {
        if (this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x + 40, this.y + 100, this.width -70, this.height - 130);
            ctx.stroke();
        }
    }

    drawFrameCoin(ctx) {
        if (this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x + 30, this.y + 30, this.width - 60, this.height - 60);
            ctx.stroke();
        }
    }

    drawFrameBottle(ctx) {
        if (this instanceof Bottle || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x + 25, this.y + 20, this.width - 40, this.height - 30);
            ctx.stroke();
        }
    }*/
   
}