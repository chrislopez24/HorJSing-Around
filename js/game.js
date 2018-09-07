function Game(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext("2d");
  this.version = "0.1";
  this.fps = 60;
  this.framesCounter = 0;
  this.reset();

}

var counter = 0;
Game.prototype.start = function () {
  this.reset();
  this.interval = setInterval(function () {
    this.clear();
    this.framesCounter++;
    this.framesCounterBarLeft++;
    this.framesCounterBarRight++;
    //limit framecounter
    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }
    this.draw();
    this.moveBackground();
    this.checkWinner();
  }.bind(this), 1000 / this.fps);
};

Game.prototype.stop = function () {
  clearInterval(this.interval);
};

Game.prototype.checkWinner = function () {
  if (counter > 100) {
    this.stop();
    if (this.horse1.x > this.horse2.x) {
      this.winner = "Horse 1";
      this.drawWinnerText();
    } else if (this.horse2.x > this.horse1.x) {
      this.winner = "Horse 2";
      this.drawWinnerText();
    } else { //TIED (?)
      document.getElementById("start-button").innerText = `TIED!!`;
      this.ctx.font = "65px Caveat";
      this.ctx.fillStyle = '#ffffff'; //white
      this.ctx.fillText(`TIED!!`, this.canvas.width / 2 - 150,
        this.canvas.height / 2)
    }
    document.getElementById("start-button").innerText = "Start New Game";
    document.getElementById("start-button").disabled = false;
    document.getElementById("reset-button").disabled = true;
  }
};

Game.prototype.drawWinnerText = function () {
  document.getElementById("start-button").innerText = `${this.winner} WON!!`;
  this.ctx.font = "80px Caveat";
  this.ctx.fillStyle = '#add8e6';
  this.ctx.fillText(` ${this.winner} WON !!`, this.canvas.width / 2,
    this.canvas.height / 2 + 50)
}

var PLAYER1_KEY = 90; // Z
var PLAYER2_KEY = 77; // M
var PLAYER1_KEY_POWER = 65; // A
var PLAYER2_KEY_POWER = 75; // K
//For testing purposes
var PLAYER1_EXP_KEY = 81; //Q
var PLAYER2_EXP_KEY = 79; //O

Game.prototype.setListeners = function () {
  var powerModLeft, powerModRight;
  document.onkeyup = function (event) {
    switch (event.keyCode) {
      case PLAYER1_KEY: //M
        this.horse1.animateImg();
        this.horse1.x += 30;
        if (powerModLeft) this.horse1.x += powerModLeft;
        break;
      case PLAYER2_KEY: //M
        this.horse2.animateImg();
        this.horse2.x += 30;
        if (powerModRight) this.horse2.x += powerModRight;
        break;
      case PLAYER1_KEY_POWER: //A
        powerModLeft = Math.floor(this.framesCounterBarLeft * 0.10);
        console.log(`A pressed : ${powerModLeft} value`)
        this.uielements.resetPowerBarLeft();
        return powerModLeft;
      case PLAYER2_KEY_POWER: // K
        powerModRight = Math.floor(this.framesCounterBarRight * 0.10);
        console.log(`K pressed : ${powerModRight} value`)
        this.uielements.resetPowerBarRight();
        return powerModRight;
      case PLAYER1_EXP_KEY: //Q
        counter = 99;
        this.horse1.x = this.canvas.width - 100;
        break;
      case PLAYER2_EXP_KEY: //O
        counter = 99;
        this.horse1.x = this.canvas.width - 100;
        break;
    }
  }.bind(this)
}

Game.prototype.reset = function () {
  // new instances 
  this.background = new Background(this);
  this.uielements = new UIElements(this);
  this.horse1 = new Horse(this, './img/p1.png', 0, 430);
  this.horse2 = new Horse(this, './img/p2.png', 0, 480);
  //reset vars
  this.framesCounterBarLeft = 0;
  this.framesCounterBarRight = 0;
  counter = 0;
  this.winner = "";
};

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.moveBackground = function () {
  this.background.move();
};

Game.prototype.howTo = function () {
  this.ctx.font = '45px Caveat';
  this.ctx.fillStyle = '#ffff00';
  this.ctx.fillText('Game Made by:', this.canvas.width / 2 - 250,
    this.canvas.height / 2 + 150);
  this.ctx.fillStyle = '#ffffff'; //white
  this.ctx.fillText('Christian Lopez', this.canvas.width / 2 - 0,
    this.canvas.height / 2 + 150)
  this.ctx.fillText('How-To:', this.canvas.width / 2 - 50,
    this.canvas.height / 2 + 200);
  this.ctx.font = '25px Caveat';
  this.ctx.fillText('Player1: ', this.canvas.width / 2 - 250,
    this.canvas.height / 2 + 250)
  this.ctx.fillText('Player2: ', this.canvas.width / 2 + 150,
    this.canvas.height / 2 + 250);
  this.ctx.fillStyle = '#ffff00'; //yellow
  this.ctx.fillText(' "Z" to move / "A" to stop PowerBar', this.canvas.width / 2 - 360,
    this.canvas.height / 2 + 280)
  this.ctx.fillText(' "M" to move / "K" to stop PowerBar', this.canvas.width / 2 + 45,
    this.canvas.height / 2 + 280)
}

Game.prototype.draw = function () {
  this.background.draw();
  this.drawVersion();
  this.uielements.drawProgressBar();
  this.uielements.drawPowerBars();
  this.horse1.draw();
  this.horse2.draw();
};

Game.prototype.drawVersion = function () {
  this.ctx.font = '30px Caveat';
  this.ctx.fillStyle = '#ffffff'; //white
  this.ctx.fillText(`version: ${this.version}`, this.canvas.width - 100,
    this.canvas.height - 25);
};