/* BACKGROUND */
function Background(game) {
  this.game = game;
  this.img = new Image();
  this.img.src = 'img/bg.png';

  this.x = 0;
  this.y = 0;

  this.dx = 100;
}
Background.prototype.draw = function () {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
  this.game.ctx.drawImage(this.img, this.x + this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height);

};

Background.prototype.move = function () {
  var horsePos = this.game.canvas.width - 100;
  if ((this.game.horse1.x > horsePos) || (this.game.horse2.x > horsePos)) {
    this.game.horse1.x = this.game.horse1.x - 100;
    this.game.horse2.x = this.game.horse2.x - 100;
    this.x -= this.dx;
    counter++;
  }
  if (this.x < -this.game.canvas.width) this.x = 0;
};