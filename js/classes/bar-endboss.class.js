class EndbossBar extends DrawableObject {
    IMAGES = [
        "./img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png",
        "./img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png",
        "./img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png",
        "./img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png",
        "./img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png",
        "./img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png",
       
    
    ];


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 10;
        this.y = 45;
        this.width = 200;
        this.height = 60;
        this.setPercentage(25);
    }
    
    setPercentage(percentage) {
        this.percentage = percentage; 
        let path = this.IMAGES[this.resolveImageIndex()]
        this.img = this.imageCash[path];
    }

    resolveImageIndex() {
        if (this.percentage == 25) {
            return 5;
        } else if (this.percentage > 20) {
            return 4;
        } else if (this.percentage > 15) {
            return 3;
        } else if (this.percentage > 10) {
            return 2;
        } else if (this.percentage > 5) {
            return 1;
        } else {
            return 0;
        }
    }
}