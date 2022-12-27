class ThrowableObject extends MovableObject {
    y = 350;
    width = 60;
    height = 75;

    IMAGES = [
        "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "./img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "./img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "./img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"
    ];

    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };
    splash_sound = new Audio("./audio/splash.mp3")

    constructor(x, y) {
        super().loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.x = x;
        this.y = y;

        if (world.character.otherDirection == true) {
            this.throwLeft()
        } else {
            this.throw();
        }

    }


    throw() {
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 40)
        this.animate();
    }

    throwLeft() {
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            this.x -= 10;
        }, 40)
        this.animate();
    }

    animate() {
        var id1 = setInterval(() => {
            if (this.y > 350) {
                this.playSplashAnimation();
                clearInterval(id1);
            } else {
                this.playAnimation(this.IMAGES);
            }
        }, 1000 / 60);
    }

    playSplashAnimation() {
        this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
        if (stopAudio == false) {
            this.splash_sound.play();
        }
        this.speedY = 0;
    }
}
