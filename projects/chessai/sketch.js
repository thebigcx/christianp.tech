let tilesize = 100;
let board;

function setup() {
  createCanvas(800, 800);

  board = new Board();
}

function draw() {
  background(200);


  board.show();
}
