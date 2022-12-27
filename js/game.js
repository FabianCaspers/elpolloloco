let canvas;
let world;
let keyboard = new Keyboard();
let game = document.getElementById('content');
let stopAudio = false;




function init() {
  canvas = document.getElementById('canvas');
  initLevel();
  world = new World(canvas, keyboard, stopAudio);
  mobileBtn();
  checkScreen();
  document.getElementById('startscreen-container').classList.add('d-none');
  document.getElementById('endscreen-container').classList.add('d-none');
}

function restart() {
  location.reload();
}



function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
};

window.addEventListener('keydown', (event) => {
  if (event.keyCode == 39) {
    keyboard.right = true;
  }
  if (event.keyCode == 37) {
    keyboard.left = true;
  }
  if (event.keyCode == 38) {
    keyboard.up = true;
  }
  if (event.keyCode == 40) {
    keyboard.down = true;
  }
  if (event.keyCode == 32) {
    keyboard.space = true;
  }
  if (event.keyCode == 68) {
    keyboard.D = true;
  }
})

window.addEventListener('keyup', (event) => {
  if (event.keyCode == 39) {
    keyboard.right = false;
  }
  if (event.keyCode == 37) {
    keyboard.left = false;
  }
  if (event.keyCode == 38) {
    keyboard.up = false;
  }
  if (event.keyCode == 40) {
    keyboard.down = false;
  }
  if (event.keyCode == 32) {
    keyboard.space = false;
  }
  if (event.keyCode == 68) {
    keyboard.D = false;
  }
})

/* Mobileversion Character Control*/

function mobileBtn() {
  document.getElementById('walk-button-left').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.left = true;
  });

  document.getElementById('walk-button-left').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.left = false;
  });

  document.getElementById('walk-button-right').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.right = true;
  });

  document.getElementById('walk-button-right').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.right = false;
  });

  document.getElementById('jump-button').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.space = true;
  });

  document.getElementById('jump-button').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.space = false;
  });

  document.getElementById('shoot-button').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.D = true;
  });

  document.getElementById('shoot-button').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.D = false;
  });
}

function checkScreen() {
  setInterval(() => {
    if (window.innerHeight < window.innerWidth) {
      document.getElementById('turnPhone').classList.add('d-none');
    } else {
      document.getElementById('turnPhone').classList.remove('d-none');
    }
  }, 10)
}

function muteAudio() {
  if (!stopAudio) {
    document.getElementById('audioOff').classList.remove('d-none');
    document.getElementById('audioOn').classList.add('d-none');
    stopAudio = true;
  }

}


function turnSoundOn() {
  if (stopAudio) {
    document.getElementById('audioOff').classList.add('d-none');
    document.getElementById('audioOn').classList.remove('d-none');
    stopAudio = false;
  }

}