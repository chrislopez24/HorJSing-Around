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

}
UIElements.prototype.drawProgressBar = function() {
  diff = (counter / 100) * Math.PI * 2;
  //GAME PROGRESS TEXT
  this.game.ctx.font = "20px Caveat";
  this.game.ctx.fillStyle = 'white';
  this.game.ctx.fillText('GAME PROGRESS', this.x + 600, this.y + 150);
  this.game.ctx.beginPath();
  //this.game.ctx.arc(this.x + 100,this.y + 80,50,0,2*Math.PI,false);
  //Progress Bar
  this.game.ctx.fillStyle = '#FFF'; // for color of circle
  this.game.ctx.fill(); // fill function
  this.game.ctx.strokeStyle = '#e7f2ba'; // for border color
  this.game.ctx.stroke(); // Stroke function
  this.game.ctx.fillStyle = 'white'; // For text color
  this.game.ctx.strokeStyle = 'lightgreen'; //For Stroke Color
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
UIElements.prototype.drawPowerBar = function() {
  this.drawPowerBar1();
  //this.drawPowerBar2();

  if (this.game.framesCounter >= 192) {
    this.game.framesCounter = 0;
  }
}
UIElements.prototype.drawPowerBar1 = function() {
  var power = this.game.ctx.createLinearGradient(0,0,500,0);
    power.addColorStop(0,"yellow");
    power.addColorStop(1,"red");
  this.game.ctx.beginPath();
  this.game.ctx.rect(188, 50, 200, 50);
  this.game.ctx.lineWidth = 4;
  this.game.ctx.strokeStyle = 'green';
  this.game.ctx.stroke()
  this.game.ctx.closePath();
  this.game.ctx.beginPath();
  this.game.ctx.fillText(`POWER`, 220, 40);
  this.game.ctx.fillStyle = power;
  this.game.ctx.rect(190, 52, this.game.framesCounter , 45);
  this.game.ctx.fill();
  this.game.ctx.closePath();
}
UIElements.prototype.resetPowerBar = function() {
  
}