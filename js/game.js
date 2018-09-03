function Game(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;


  this.reset();

}

Game.prototype.start = function () {
  console.log("Start() entro");
  this.interval = setInterval(function () {
    this.clear();

    this.framesCounter++;

    // controlamos que frameCounter no sea superior a 1000
    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }
    this.draw();
  }.bind(this), 1000 / this.fps);
};

Game.prototype.stop = function () {
  clearInterval(this.interval);
};

var PLAYER1_KEY = 90;
var PLAYER2_KEY = 77;

Game.prototype.setListeners = function () {
  document.onkeydown = function (event) {
    if (event.keyCode === PLAYER1_KEY) {
      this.horse1.animateImg();
      this.horse1.x += 8;
    }
    if (event.keyCode === PLAYER2_KEY) {

      this.horse2.animateImg();
      this.horse2.x += 8;
    }
  }.bind(this)
}

Game.prototype.reset = function () {
  this.background = new Background(this);

  this.horse1 = new Horse(this, './img/p1.png');
  this.horse2 = new Horse(this, './img/p2.png');

  this.framesCounter = 0;
  this.winner = false;
};


Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

// Game.prototype.moveAll = function () {
//   this.background.move();
// };


Game.prototype.draw = function () {

  this.background.draw();
  this.horse1.draw();
  this.horse2.draw();
  // this.drawScore();  
};