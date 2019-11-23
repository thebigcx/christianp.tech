class GreedyAI {
  constructor() {

  }

  thinkOfMove() {
    var applePos = createVector(apple.x, apple.y);

    return this.getShortestPath(applePos);
  }

  getShortestPath(applePos) {
    var move;
    if (abs(abs(applePos.x) - abs(snake.x[0])) > abs(abs(applePos.y) - abs(snake.y[0]))) {
      if (applePos.x < snake.x[0]) {
        var move = 1;
      } else {
        var move = 0;
      }
    } else {
      if (applePos.y < snake.y[0]) {
        var move = 3;
      } else {
        var move = 2;
      }
    }

    //if (!this.isSuicidalMove()) {
      return move;
    //}

  }

  isSuicidalMove(move) {
    var clone = new Snake('player', true);

    clone.dir = move;
    clone.moveNow();

    return clone.isDead();
  }
}
