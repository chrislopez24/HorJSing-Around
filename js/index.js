window.onload = function() {
  var game = new Game("canvas");
  var startButton = document.getElementById("start-button");
  var resetButton = document.getElementById("reset-button");
  var creditsButton = document.getElementById("credits-button")
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
  
  //game.start();
  
};