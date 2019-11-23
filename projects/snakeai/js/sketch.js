let snake;
let pixel = 20;
let dim = 800;
let apple;
let ai;
let player = 'ai';

function setup() {
  createCanvas(dim, dim);

  snake = new Snake('player', false);
  apple = new Apple();

  ai = new GreedyAI();
}

function draw() {
  showGrid();

  snake.show();
  if (!snake.isDead()) {
    snake.update();
    snake.eatingApple();
  }
  apple.show();
}

function showGrid() {
  background(30);
  for (var i = 0 ; i < dim/pixel ; i++) {
    fill(30);
    strokeWeight(2);
    line(0, i*pixel, dim, i*pixel);
    line(i*pixel, 0, i*pixel, dim);
  }
}

function keyPressed() {
  if (player == 'player') {
    if (keyCode === LEFT_ARROW) {
      snake.changeDirection(1);
    } else if (keyCode === RIGHT_ARROW) {
      snake.changeDirection(0);
    } else if (keyCode === DOWN_ARROW) {
      snake.changeDirection(2);
    } else if (keyCode === UP_ARROW) {
      snake.changeDirection(3);
    }
  }
}
