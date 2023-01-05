class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    endbossBar = new EndbossBar();
    throwableObjects = [];
    throwableBottles = 0;
    totalCoins = 0;
    checkTime = true;
    jump_sound = new Audio("./audio/jump.mp3");
    coin_sound = new Audio("./audio/coin.mp3");
    pickup_sound = new Audio("./audio/pickup.mp3");
    hit_sound = new Audio("./audio/hit.mp3");
    endboss = new Endboss();


    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.ctx = canvas.getContext("2d");
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkThrowObjects();
        }, 1000 / 30);
    }


    async checkThrowObjects() {
        if (this.keyboard.D && this.throwableBottles > 0 && this.checkTime) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 50);
            this.throwableObjects.push(bottle);
            this.throwableBottles--;
            this.bottleBar.setPercentage(this.throwableBottles);
            if (this.throwableBottles > 0) {
                this.checkTime = false;
                await new Promise(resolve => setTimeout(resolve, 2000));
                this.checkTime = true;
            }
        }
    }
    

    checkCollision() {
        this.collidingEnemy();
        this.collidingBottle();
        this.collidingCoin();
        this.collidingEnemyJump();
        this.CollidingBottleWithEnemy();
        this.gameOver();
    }


    collidingEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround()) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy)
            }
        });
    }


    collidingEnemyJump() {
        this.level.enemies.forEach((enemy) => {
            if (!this.character.isHurt() && this.character.speedY <0 && this.character.isColliding(enemy) && this.character.isAboveGround() && (enemy instanceof Chicken || enemy instanceof SmallChicken)) {
                enemy.hit();
                setTimeout(() => {
                    const index = this.level.enemies.indexOf(enemy);
                    console.log(index);
                    this.level.enemies.splice(index, 1);
                }, 200);
                this.character.jump();
                if (!stopAudio) {
                    this.jump_sound.play();
                }
            }
        });
    }


    collidingBottle() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.throwableBottles++;
                if (!stopAudio) {
                    this.pickup_sound.play();
                }
                this.level.bottles.splice(index, 1);
                this.bottleBar.setPercentage(this.throwableBottles);
            }
        });
    }


    CollidingBottleWithEnemy() {
        this.level.enemies.forEach((enemy, index1) => {
            this.throwableObjects.forEach((bottle, index2) => {
                if (bottle.isColliding(enemy)) {
                    enemy.hit();
                    if (!stopAudio) {
                        this.hit_sound.play();
                    }
                    setTimeout(() => {
                        this.throwableObjects.splice(index2, 1);
                    }, 100);
                    if (enemy instanceof Endboss) {
                        this.endbossBar.setPercentage(enemy.energy);
                    } else {
                        setTimeout(() => {
                            const index = this.level.enemies.indexOf(enemy);
                            this.level.enemies.splice(index, 1);
                        }, 200);
                    }
                }
            })
        })
    }


    collidingCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                if (!stopAudio) {
                    this.coin_sound.play();
                }
                this.totalCoins++;
                this.level.coins.splice(index, 1);
                this.coinBar.setPercentage(this.totalCoins);
            }
        });
    }


    gameOver() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isDead() || (enemy.isDead() && enemy instanceof Endboss)) {
                this.characterIsDead();
            }
            if (enemy.isDead() && enemy instanceof Endboss) {
                this.endbossIsDead();
            }
        });
    }


    characterIsDead() {
        return setTimeout(() => {
            clearAllIntervals();
            checkScreen();
            document.getElementById('endscreen-container').classList.remove('d-none');
        }, 1000);
    }


    endbossIsDead() {
        return setTimeout(() => {
            clearAllIntervals();
            checkScreen();
            document.getElementById('endscreen-container').classList.remove('d-none');
        }, 1400);
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawMO();
        // Space for fixed objects
        this.ctx.translate(-this.camera_x, 0);
        this.drawDO();
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        // draw() wird immer wieder aufgerufen.
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    drawMO() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
    }


    drawDO() {
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.endbossBar);
    }


    addObjectsToMap(objects) {
        objects.forEach((o) => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    
    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }
}
