function UIElements(game) {
  this.game = game;
  //Common vars
  this.x = 0;
  this.y = 0;
  //Progress Bar vars
  this.diff; // diff for progress bar
  this.start = 4.80; //starting point
  this.amountProgressLoaded = 0;
  //Power Bar vars
  this.game.framesCounterBarLeft;
  this.game.framesCounterBarRight;

}
UIElements.prototype.drawProgressBar = function () {
  diff = (counter / 100) * Math.PI * 2;
  //GAME PROGRESS TEXT
  this.game.ctx.font = '20px Caveat';
  this.game.ctx.fillStyle = '#ffffff';
  this.game.ctx.fillText('GAME PROGRESS', this.x + 600, this.y + 150);
  this.game.ctx.beginPath();
  //Progress Bar
  this.game.ctx.fillStyle = '#FFF'; // for color of circle
  this.game.ctx.fill(); // fill function
  this.game.ctx.strokeStyle = '#e7f2ba'; // for border color
  this.game.ctx.stroke(); // Stroke function
  this.game.ctx.fillStyle = '#ffffff'; // For text color
  this.game.ctx.strokeStyle = '#90ee90'; //For Stroke Color
  this.game.ctx.textAlign = 'center'; //you know already for aligning text in center;
  this.game.ctx.lineWidth = 20; // for Stroke width
  this.game.ctx.font = '25pt Caveat'; // for font specifying
  this.game.ctx.closePath();
  this.game.ctx.beginPath(); // starting circle drawing function
  this.game.ctx.arc(this.x + 600, this.y + 70, 50, this.start, diff + this.start, false);
  this.game.ctx.stroke();
  this.game.ctx.fillText(`${counter} %`, this.x + 600, this.y + 80);
  this.game.ctx.closePath();
  this.amountProgressLoaded++;
  if (counter == 101) {
    this.game.stop();
  }
}
UIElements.prototype.drawPowerBar = function () {

  this.drawPowerBar1();
  this.drawPowerBar2();

  if (this.game.framesCounterBarLeft  >= 200) {
    this.game.framesCounterBarLeft = 0;
  } else if (this.game.framesCounterBarRight >= 200) {
    this.game.framesCounterBarRight = 0;
  }
}
UIElements.prototype.drawPowerBar1 = function () {
  this.game.ctx.beginPath();
  this.game.ctx.rect(188, 50, 200, 50);
  this.game.ctx.lineWidth = 4;
  this.game.ctx.strokeStyle = '#add8e6'; //lightblue
  this.game.ctx.stroke()
  this.game.ctx.closePath();
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = '#ff4d4d'; //red
  this.game.ctx.fillText('POWER', 240, 140);
  this.game.ctx.rect(190, 52, this.game.framesCounterBarLeft, 45);
  this.game.ctx.fill();
  this.game.ctx.fillStyle = '#ffffff';//white
  this.game.ctx.fillText('Player 1', 340, 140); 
  this.game.ctx.closePath();
}
UIElements.prototype.drawPowerBar2 = function() {
  this.game.ctx.beginPath();
  this.game.ctx.rect(790, 50, 200, 50);
  this.game.ctx.lineWidth = 4;
  this.game.ctx.strokeStyle = '#add8e6'; //lightblue
  this.game.ctx.stroke()
  this.game.ctx.closePath();
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = '#ffff00'; //yellow
  this.game.ctx.fillText('POWER', 840, 140);
  this.game.ctx.rect(792, 52, this.game.framesCounterBarRight, 45);
  this.game.ctx.fill();
  this.game.ctx.fillStyle = '#ffffff';//white
  this.game.ctx.fillText('Player 2', 940, 140); 
  this.game.ctx.closePath();
}
UIElements.prototype.resetPowerBarLeft = function () {
  this.game.framesCounterBarLeft = 0;
}
UIElements.prototype.resetPowerBarRight = function () {
  this.game.framesCounterBarRight = 0;
}
