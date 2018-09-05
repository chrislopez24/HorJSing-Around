function UIElements(game) {
  this.game = game;
  this.diff; // diff for progress bar
  this.start = 4.80; //starting point
  this.amountProgressLoaded = 0;
  this.x = 0;
  this.y = 0;

}
UIElements.prototype.drawProgressBar = function () {
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
  this.game.ctx.beginPath(); // starting circle drawing function
  this.game.ctx.arc(this.x + 600, this.y + 70, 50, this.start, diff + this.start, false);
  this.game.ctx.stroke();
  this.game.ctx.fillText(`${counter} %`, this.x + 600, this.y + 80);
  
  this.amountProgressLoaded++;
  if (counter == 101) {
    this.game.stop();
  }
}