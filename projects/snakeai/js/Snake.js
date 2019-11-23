class Snake {
  constructor(player, clone) {
    if (!clone) {
      this.player = player;
      this.x = [];
      this.y = [];
      this.length = 3;
      this.dir = 0;
    } else {
      this.player = player;
      this.x = snake.x;
      this.y = snake.y;
      this.length = snake.length;
      this.dir = snake.dir;
    }

    this.refresh = 0;

    this.init();

  }

  init() {
    for (var i = this.length-1 ; i > -1 ; i--) {
      this.x.push(i + 5);
      this.y.push(5);
    }

  }

  moveNow() {
    for (var i = this.length-1 ; i > 0 ; i--) {
      this.x[i] = this.x[i-1];
      this.y[i] = this.y[i-1];
    }

    if (this.dir == 0) {
      this.x[0]++;
    } else if (this.dir == 1) {
      this.x[0]--;
    } else if (this.dir == 2) {
      this.y[0]++;
    } else if (this.dir == 3) {
      this.y[0]--;
    }
  }

  changeDirection(newDir) {
    //if (this.dir+1 != newDir && this.dir-1 != newDir) {
      this.dir = newDir;
    //}
  }

  show() {
    for (var i = 0 ; i < this.length ; i++) {
      fill(255, 255, 255);
      rect(this.x[i] * pixel, this.y[i] * pixel, pixel, pixel);
    }
  }

  update() {
    this.refresh++;
    if (this.refresh == 10) {

      if (player == 'ai') {
        this.dir = ai.thinkOfMove();
      }

      for (var i = this.length-1 ; i > 0 ; i--) {
        this.x[i] = this.x[i-1];
        this.y[i] = this.y[i-1];
      }

      if (this.dir == 0) {
        this.x[0]++;
      } else if (this.dir == 1) {
        this.x[0]--;
      } else if (this.dir == 2) {
        this.y[0]++;
      } else if (this.dir == 3) {
        this.y[0]--;
      }

      this.refresh = 0;
    }
  }

  isDead() {
    //overlap
    for (var i = 0 ; i < this.length-1 ; i++) {
      for (var j = 0 ; j < this.length-1 ; j++) {
        if (this.x[i] == this.x[j] && this.y[i] == this.y[j] && i != j) {
          return true;
        }
      }
    }

    //out of bounds
    for (var i = 0 ; i < this.length-1 ; i++) {
      if (this.x[i] < 0 || this.x[i] > dim/pixel*5 || this.y[i] < 0 || this.y[i] > dim/pixel*5) {
        return true;
      }
    }

    return false;
  }

  eatingApple() {
    for (var i = 0 ; i < this.length ; i++) {
      if (this.x[i] == apple.x && this.y[i] == apple.y) {
        apple.generateNewApple();


        var tailX = this.x[this.length-1];
        var tailY = this.y[this.length-1];

        for (var i = this.length-1 ; i > 0 ; i--) {
          this.x[i] = this.x[i-1];
          this.y[i] = this.y[i-1];
        }

        if (this.dir == 0) {
          this.x[0]++;
        } else if (this.dir == 1) {
          this.x[0]--;
        } else if (this.dir == 2) {
          this.y[0]++;
        } else if (this.dir == 3) {
          this.y[0]--;
        }

        this.x.push(tailX);
        this.y.push(tailY);

        this.length++;
      }
    }
  }


}

function cloneSnake() {
  return new Snake('player', true);
}
