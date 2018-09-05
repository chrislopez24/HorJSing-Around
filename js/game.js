function Game(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext("2d");
  this.version = "0.1";
  this.fps = 60;
  this.winner = "";
  this.reset();
  //this.framesCounter = 0;

}
var counter = 0;
Game.prototype.start = function () {
  this.interval = setInterval(function () {
    this.clear();

    this.framesCounter++;
    //console.log(Math.floor(this.framesCounter/this.fps));

    // controlamos que frameCounter no sea superior a 1000
    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }
    this.draw();
    //this.drawVersion();
    this.moveAll();
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
      this.ctx.fillStyle = 'white';
      this.ctx.fillText(`TIED!!`, this.canvas.width / 2 - 150,
        this.canvas.height / 2)

    }
  }
};
Game.prototype.drawWinnerText = function () {
  document.getElementById("start-button").innerText = `${this.winner} WON!!`;
  this.ctx.font = "80px Caveat";
  this.ctx.fillStyle = 'lightblue';
  this.ctx.fillText(` ${this.winner} WON !!`, this.canvas.width / 2 - 200,
    this.canvas.height / 2 + 50)

}

var PLAYER1_KEY = 90; // Z
var PLAYER2_KEY = 77; // M
var PLAYER1_KEY_POWER = 65; //A

Game.prototype.setListeners = function () {
  var powerMod;
  document.onkeyup = function (event) {
    if (event.keyCode === PLAYER1_KEY) {
      this.horse1.animateImg();
      this.horse1.x += 30;
      if (powerMod) {
        this.horse1.x += powerMod;
      }
      console.log(this.horse1.x);
    }
    if (event.keyCode === PLAYER2_KEY) {
      this.horse2.animateImg();
      this.horse2.x += 30;
    }
    if(event.keyCode === PLAYER1_KEY_POWER) {
      powerMod = Math.floor(this.framesCounter / 4);
      console.log(`A pressed : ${powerMod} value`)
      this.uielements.resetPowerBar();
    return powerMod;
    }
  }.bind(this)
}

Game.prototype.reset = function () {
  this.background = new Background(this);
  this.uielements = new UIElements(this);

  this.horse1 = new Horse(this, './img/p1.png', 0, 430);
  this.horse2 = new Horse(this, './img/p2.png', 0, 480);

  this.framesCounter = 0;
  counter = 0;
  this.winner = "";
};


Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.moveAll = function () {
  this.background.move();
};
Game.prototype.credits = function () {
  this.ctx.font = "45px Caveat";
  this.ctx.fillStyle = 'yellow';
  this.ctx.fillText(`Game Made by:`, this.canvas.width / 2 - 250,
    this.canvas.height / 2)
  this.ctx.fillStyle = 'white';
  this.ctx.fillText(`Christian Lopez`, this.canvas.width / 2 - 0,
    this.canvas.height / 2)
}

Game.prototype.draw = function () {
  this.background.draw();
  this.uielements.drawProgressBar();
  this.uielements.drawPowerBar();
  this.horse1.draw();
  this.horse2.draw(); 
};
// Game.prototype.drawVersion = function () {
//   this.ctx.font = '30px Caveat';
//   this.ctx.fillStyle = 'white';
//   this.ctx.fillText(`version: ${this.version}`, this.canvas.width - 100,
//     this.canvas.height - 25);
// };