let level1;

function initLevel() {
  level1 = new Level(
    createEnemies(),
    createClouds(),
    createBackground(),
    createCoins(),
    createBottles()
  );
}

function createEnemies() {
  return [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),

    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),

    new Endboss(),
  ]
}

function createClouds() {
  return [
    new Cloud('./img/5_background/layers/4_clouds/1.png', 50),
    new Cloud('./img/5_background/layers/4_clouds/2.png', 700),
    new Cloud('./img/5_background/layers/4_clouds/1.png', 1350),
    new Cloud('./img/5_background/layers/4_clouds/2.png', 2000),
    new Cloud('./img/5_background/layers/4_clouds/1.png', 2650),
    new Cloud('./img/5_background/layers/4_clouds/2.png', 3300),
    new Cloud('./img/5_background/layers/4_clouds/1.png', 3950),
    new Cloud('./img/5_background/layers/4_clouds/2.png', 4600)
  ]
}

function createBackground() {
  return [
    new BackgroundObjects("./img/5_background/layers/air.png", -719),
    new BackgroundObjects(
      "./img/5_background/layers/3_third_layer/2.png",
      -719
    ),
    new BackgroundObjects(
      "./img/5_background/layers/2_second_layer/2.png",
      -719
    ),
    new BackgroundObjects(
      "./img/5_background/layers/1_first_layer/2.png",
      -719
    ),
    new BackgroundObjects("./img/5_background/layers/air.png", 0),
    new BackgroundObjects("./img/5_background/layers/3_third_layer/1.png", 0),
    new BackgroundObjects("./img/5_background/layers/2_second_layer/1.png", 0),
    new BackgroundObjects("./img/5_background/layers/1_first_layer/1.png", 0),
    new BackgroundObjects("./img/5_background/layers/air.png", 719),
    new BackgroundObjects(
      "./img/5_background/layers/3_third_layer/2.png",
      719
    ),
    new BackgroundObjects(
      "./img/5_background/layers/2_second_layer/2.png",
      719
    ),
    new BackgroundObjects(
      "./img/5_background/layers/1_first_layer/2.png",
      719
    ),
    new BackgroundObjects("./img/5_background/layers/air.png", 719 * 2),
    new BackgroundObjects(
      "./img/5_background/layers/3_third_layer/1.png",
      719 * 2
    ),
    new BackgroundObjects(
      "./img/5_background/layers/2_second_layer/1.png",
      719 * 2
    ),
    new BackgroundObjects(
      "./img/5_background/layers/1_first_layer/1.png",
      719 * 2
    ),
    new BackgroundObjects("./img/5_background/layers/air.png", 719 * 3),
    new BackgroundObjects(
      "./img/5_background/layers/3_third_layer/2.png",
      719 * 3
    ),
    new BackgroundObjects(
      "./img/5_background/layers/2_second_layer/2.png",
      719 * 3
    ),
    new BackgroundObjects(
      "./img/5_background/layers/1_first_layer/2.png",
      719 * 3
    ),
    new BackgroundObjects("./img/5_background/layers/air.png", 719 * 4),
    new BackgroundObjects(
      "./img/5_background/layers/3_third_layer/1.png",
      719 * 4
    ),
    new BackgroundObjects(
      "./img/5_background/layers/2_second_layer/1.png",
      719 * 4
    ),
    new BackgroundObjects(
      "./img/5_background/layers/1_first_layer/1.png",
      719 * 4
    ),
    new BackgroundObjects("./img/5_background/layers/air.png", 719 * 5),
    new BackgroundObjects(
      "./img/5_background/layers/3_third_layer/2.png",
      719 * 5
    ),
    new BackgroundObjects(
      "./img/5_background/layers/2_second_layer/2.png",
      719 * 5
    ),
    new BackgroundObjects(
      "./img/5_background/layers/1_first_layer/2.png",
      719 * 5
    ),
    new BackgroundObjects("./img/5_background/layers/air.png", 719 * 6),
    new BackgroundObjects(
      "./img/5_background/layers/3_third_layer/1.png",
      719 * 6
    ),
    new BackgroundObjects(
      "./img/5_background/layers/2_second_layer/1.png",
      719 * 6
    ),
    new BackgroundObjects(
      "./img/5_background/layers/1_first_layer/1.png",
      719 * 6
    ),
  ]
}

function createCoins() {
  return [
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),

  ]
}

function createBottles() {
  return [
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
  ]
}
