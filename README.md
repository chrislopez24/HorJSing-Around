<p align="center">
  <img src="https://i.imgur.com/1QgrNNw.png">
  <img src="https://github.com/chrislopez24/HorJSing-Around/blob/master/img/horse.png" height="99" width="99">
</p>    
<p align="center">  
<span><a href="https://chrislopez24.github.io/HorJSing-Around">HorJSing Around</a></span>
</p>  

## Introducción  
Llegué a Ironhack habiendo solo trabajado en FreeCodeCamp, también había hecho alguna otra cosa programando, pero nada de principio a fin.

## Herramientas
JavaScript (Base)  
Canvas (Elementos IU)  
Bootstrap (Botones)  

## ¿Cuál ha sido el mayor problema técnico al que me he enfrentado?  
El dibujo usando Canvas, sin duda

## ¿Cual es el mayor reto por solucionar en nuestro código?
Con más tiempo me hubiese gustado mejorar o pensar mejor el como funcionaba la barra de potencia

## Si empezara de cero ¿Cómo organizaría el proyecto?
Usando ES6 (clases) una vez aprendido en clase

## Un detalle técnico interesante sobre mi proyecto
``` js
function UIElements(game) {
  this.game = game;
  //Common vars
  this.x = 0;
  this.y = 0;
  //Progress Bar vars
  this.diff; // diff for progress bar
  this.start = 4.80; //starting point of the progressbar
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
  this.game.ctx.fillStyle = '#FFF'; // circle color
  this.game.ctx.fill(); 
  this.game.ctx.strokeStyle = '#e7f2ba'; //border color
  this.game.ctx.stroke();
  this.game.ctx.fillStyle = '#ffffff'; //white
  this.game.ctx.strokeStyle = '#90ee90'; //stroke color
  this.game.ctx.textAlign = 'center'; 
  this.game.ctx.lineWidth = 20; // stroke width
  this.game.ctx.font = '25pt Caveat'; 
  this.game.ctx.closePath();
  this.game.ctx.beginPath(); // starting circle drawing function
  /* 
  x:	The x-coordinate of the center of the circle	
  y:	The y-coordinate of the center of the circle	
  r:	The radius of the circle	
  sAngle:	The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)	
  eAngle:	The ending angle, in radians	
  counterclockwise: false default
  */
  this.game.ctx.arc(this.x + 600, this.y + 70, 50, this.start, diff + this.start, false);
  this.game.ctx.stroke();
  this.game.ctx.fillText(`${counter} %`, this.x + 600, this.y + 80);
  this.game.ctx.closePath();
  this.amountProgressLoaded++;
  //checking winner to stop the progressbars
  this.game.checkWinner();
} 

```
El fragmento de código muestra la forma en la que cree una barra de progreso:
- Creando las variables : start -> punto de inicio
                         diff -> velocidad de dibujo 
- Teniendo en cuenta que el r del circulo es 0, el ángulo de dibujo lo manejan las dos variables
