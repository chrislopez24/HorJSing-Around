function Horse(game, img, x, y) {
  this.game = game;

  this.x = this.game.canvas.width * 0.08;

  // guardar posición original (suelo)
  this.y0 = y;
  this.y = this.y0;

  this.img = new Image();
  this.img.src = img;

  // número de imágenes diferentes
  this.img.frames = 4;
  this.img.frameIndex = 0;

  // medidas de la imagen a representar en el canvas
  this.w = 90;
  this.h = 95;
  game.setListeners();
}

Horse.prototype.draw = function () {

  // Documentación drawImage:
  // https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
  this.img.onload = this.game.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    10,
    Math.floor(this.img.width / this.img.frames),
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  );

};

Horse.prototype.animateImg = function () {
  // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
  if (this.game.framesCounter % 2 === 0) {
    this.img.frameIndex += 1;
    console.log ('entra animimage');

    // Si el frame es el último, se vuelve al primero
    if (this.img.frameIndex > 3) this.img.frameIndex = 0;
  }
  //console.log("entra reset");
};