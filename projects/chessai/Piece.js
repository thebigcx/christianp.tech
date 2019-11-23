class Piece {
  constructor(letter, x, y, color) {
    this.matPosition = createVector(x, y);
    this.pixelPosition = createVector(x * tilesize + (tilesize/2), y * tilesize + (tilesize/2));

    this.letter = letter;
    this.color = color;
    this.selected = false;



  }


  show() {
    fill(125, 125, 125);
    textSize(30);
    if (this.letter != null) {
      textAlign(CENTER);
      text(this.letter, this.pixelPosition.x, this.pixelPosition.y+10);
    }
  }

  move() {

  }
}

class King extends Piece {
  constructor(x, y, color) {
    super(x, y, color);
    this.matPosition = createVector(x, y);
    this.pixelPosition = createVector(x * tilesize + (tilesize/2), y * tilesize + (tilesize/2));
    this.letter = 'K';
  }

  canMove(x, y, board) {
    if ()
  }
}

class Queen extends Piece {
  constructor(x, y, color) {
    super(x, y, color);
    this.matPosition = createVector(x, y);
    this.pixelPosition = createVector(x * tilesize + (tilesize/2), y * tilesize + (tilesize/2));
    this.letter = 'Q';
  }

  canMove() {

  }
}

class Pawn extends Piece {
  constructor(x, y, color) {
    super(x, y, color);
    this.matPosition = createVector(x, y);
    this.pixelPosition = createVector(x * tilesize + (tilesize/2), y * tilesize + (tilesize/2));
    this.letter = 'P';
  }

  canMove() {

  }
}

class Bishop extends Piece {
  constructor(x, y, color) {
    super(x, y, color);
    this.matPosition = createVector(x, y);
    this.pixelPosition = createVector(x * tilesize + (tilesize/2), y * tilesize + (tilesize/2));
    this.letter = 'B';
  }

  canMove() {

  }
}

class Knight extends Piece {
  constructor(x, y, color) {
    super(x, y, color);
    this.matPosition = createVector(x, y);
    this.pixelPosition = createVector(x * tilesize + (tilesize/2), y * tilesize + (tilesize/2));
    this.letter = 'N';
  }

  canMove() {

  }
}

class Rook extends Piece {
  constructor(x, y, color) {
    super(x, y, color);
    this.matPosition = createVector(x, y);
    this.pixelPosition = createVector(x * tilesize + (tilesize/2), y * tilesize + (tilesize/2));
    this.letter = 'R';
  }

  canMove() {

  }
}
