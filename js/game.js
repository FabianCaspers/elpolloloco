let canvas;
let ctx;
let world = new World();


function init() {
    canvas = document.getElementById('canvas');   // Greift auf die ID canvas in HTML zu
    ctx = canvas.getContext('2d');  // Definiert den Kontex das es sich um 2D handelt


    // character.src = '../img/2_character_pepe/2_walk/W-21.png';  // Lädt das Charakter Bild W-21.png
    // ctx.drawImage(character, 20, 20, 50, 150); // Fügt den Charakter ins Bild hinzu 20,20 ist die grösse vom IMG,  50 = Breit, 150 = Höhe der XY Achsen
  
    
}