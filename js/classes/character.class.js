class Character extends MovableObject {
    y = 160;
    IMAGES_WALKING = [
        "./img/2_character_pepe/2_walk/W-21.png",
        "./img/2_character_pepe/2_walk/W-22.png",
        "./img/2_character_pepe/2_walk/W-23.png",
        "./img/2_character_pepe/2_walk/W-24.png",
        "./img/2_character_pepe/2_walk/W-25.png",
        "./img/2_character_pepe/2_walk/W-26.png",
    ];

    IMAGES_JUMPING = [
        "./img/2_character_pepe/3_jump/J-31.png",
        "./img/2_character_pepe/3_jump/J-32.png",
        "./img/2_character_pepe/3_jump/J-33.png",
        "./img/2_character_pepe/3_jump/J-34.png",
        "./img/2_character_pepe/3_jump/J-35.png",
        "./img/2_character_pepe/3_jump/J-36.png",
        "./img/2_character_pepe/3_jump/J-37.png",
        "./img/2_character_pepe/3_jump/J-38.png",
        "./img/2_character_pepe/3_jump/J-39.png",
    ];

    IMAGES_DEAD = [
        "./img/2_character_pepe/5_dead/D-51.png",
        "./img/2_character_pepe/5_dead/D-52.png",
        "./img/2_character_pepe/5_dead/D-53.png",
        "./img/2_character_pepe/5_dead/D-54.png",
        "./img/2_character_pepe/5_dead/D-55.png",
        "./img/2_character_pepe/5_dead/D-56.png",
        "./img/2_character_pepe/5_dead/D-57.png"
    ];

    IMAGES_STANDING = [
        "./img/2_character_pepe/1_idle/idle/I-1.png",
        "./img/2_character_pepe/1_idle/idle/I-2.png",
        "./img/2_character_pepe/1_idle/idle/I-3.png",
        "./img/2_character_pepe/1_idle/idle/I-4.png",
        "./img/2_character_pepe/1_idle/idle/I-5.png",
        "./img/2_character_pepe/1_idle/idle/I-6.png",
        "./img/2_character_pepe/1_idle/idle/I-7.png",
        "./img/2_character_pepe/1_idle/idle/I-8.png",
        "./img/2_character_pepe/1_idle/idle/I-9.png",
        "./img/2_character_pepe/1_idle/idle/I-10.png"
    ];

    IMAGES_HURT = [
        "./img/2_character_pepe/4_hurt/H-41.png",
        "./img/2_character_pepe/4_hurt/H-42.png",
        "./img/2_character_pepe/4_hurt/H-43.png"
    ];

    speed = 10;
    world;
    walking_sound = new Audio("./audio/steps.mp3");
    jump_sound = new Audio("./audio/jump.mp3");
    death_sound = new Audio("./audio/death.mp3");
    hurt_sound = new Audio("./audio/hurt.mp3")

    offset = {
        top: 100,
        left: 50,
        right: 60,
        bottom: 5,
    };

    constructor() {
        super().loadImage("./img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_STANDING);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }

    animate() {
        this.intervalFunction();
        this.intervalAnimation();

    }


    intervalFunction() {
        setInterval(() => {
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.movingRight();
            }
            if (this.world.keyboard.left && this.x > 0) {
                this.movingLeft()
            }
            if (this.world.keyboard.space && !this.isAboveGround()) {
                this.jump();
                if (!stopAudio) {
                    this.jump_sound.play();
                }
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    }

    movingLeft() {
        this.moveLeft();
        this.otherDirection = true;
        this.playWalkingSound();
    }

    movingRight() {
        this.moveRight();
        this.otherDirection = false;
        this.playWalkingSound();
    }

    playWalkingSound() {
        if (!stopAudio && !this.isAboveGround()) {
            this.walking_sound.play();
            this.walking_sound.playbackRate = 2.0;
        }
    }

    intervalAnimation() {
        setInterval(() => {
            if (!this.world.keyboard.right || !this.world.keyboard.left) {
                this.playAnimation(this.IMAGES_STANDING);
            }
        }, 350);

        setInterval(() => {
            if (this.world.keyboard.right && !this.isAboveGround() || this.world.keyboard.left && !this.isAboveGround()) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 50);


        setInterval(() => {
            if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                if (!stopAudio) {
                    this.hurt_sound.play();
                }
            }
        }, 80);

        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            }
        }, 230);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                if (!stopAudio) {
                    this.death_sound.play();
                }
            }
        }, 190);

    }


}
