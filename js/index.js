window.onload = function() {
  var game = new Game("canvas");
  var startButton = document.getElementById("start-button");
  var resetButton = document.getElementById("reset-button");
  var creditsButton = document.getElementById("credits-button")
  var audioMenu = new Audio("./audios/music-menu.mp3")
  document.addEventListener("mousemove", function() {
    audioMenu.loop = true;
    audioMenu.play();
  });

  startButton.addEventListener("click", function() {
    game.start();
    startButton.innerText = "Game Ongoing";
    startButton.disabled = true;
    resetButton.disabled = false;
    creditsButton.disabled = true;
  })
  resetButton.addEventListener("click", function(){
    game.reset();
  })
  creditsButton.addEventListener("click", function() {
    game.credits()
  })
  
};