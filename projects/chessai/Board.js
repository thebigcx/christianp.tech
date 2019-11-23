class Board {
  constructor() {
    this.pieces = [];

    this.setUpPieces();
  }

  setUpPieces() {
    this.pieces.push( new King(3, 7, 'white'));
    this.pieces.push( new Queen(4, 7, 'white'));
    this.pieces.push( new Rook(0, 7, 'white'));
    this.pieces.push( new Rook(7, 7, 'white'));
    this.pieces.push( new Knight(1, 7, 'white'));
    this.pieces.push( new Knight(6, 7, 'white'));
    this.pieces.push( new Bishop(2, 7, 'white'));
    this.pieces.push( new Bishop(5, 7, 'white'));
    this.pieces.push( new Pawn(0, 6, 'white'));
    this.pieces.push( new Pawn(1, 6, 'white'));
    this.pieces.push( new Pawn(2, 6, 'white'));
    this.pieces.push( new Pawn(3, 6, 'white'));
    this.pieces.push( new Pawn(4, 6, 'white'));
    this.pieces.push( new Pawn(5, 6, 'white'));
    this.pieces.push( new Pawn(6, 6, 'white'));
    this.pieces.push( new Pawn(7, 6, 'white'));

    this.pieces.push( new King(3, 0, 'black'));
    this.pieces.push( new Queen(4, 0, 'black'));
    this.pieces.push( new Rook(0, 0, 'black'));
    this.pieces.push( new Rook(7, 0, 'black'));
    this.pieces.push( new Knight(1, 0, 'black'));
    this.pieces.push( new Knight(6, 0, 'black'));
    this.pieces.push( new Bishop(2, 0, 'black'));
    this.pieces.push( new Bishop(5, 0, 'black'));
    this.pieces.push( new Pawn(0, 1, 'black'));
    this.pieces.push( new Pawn(1, 1, 'black'));
    this.pieces.push( new Pawn(2, 1, 'black'));
    this.pieces.push( new Pawn(3, 1, 'black'));
    this.pieces.push( new Pawn(4, 1, 'black'));
    this.pieces.push( new Pawn(5, 1, 'black'));
    this.pieces.push( new Pawn(6, 1, 'black'));
    this.pieces.push( new Pawn(7, 1, 'black'));
  }

  show() {
    for (var i = 0 ; i < 8 ; i++) {
      for (var j = 0 ; j < 8 ; j++) {
        if ( (i + j) % 2 === 0 ) {
          fill(0);
        } else {
          fill(255);
        }
        rect(i * tilesize, j * tilesize, tilesize, tilesize);
      }
    }


    for (var i = 0 ; i < this.pieces.length ; i++) {
      this.pieces[i].show();
    }
  }
}
