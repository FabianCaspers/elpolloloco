class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');  // Definiert den Kontex das es sich um 2D handelt
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();

    }


    setWorld(){
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.level.enemies);
        
        this.ctx.translate(-this.camera_x, 0);


        // Draw() wird immer weider aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });

    }

    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

    addToMap(mo) {
        if(mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);  // verschiebt
            this.ctx.scale(-1, 1);  // mirrow the pic
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}