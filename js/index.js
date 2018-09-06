window.onload = function() {
  var game = new Game("canvas");
  var startButton = document.getElementById("start-button");
  var resetButton = document.getElementById("reset-button");
  var howToButton = document.getElementById("howto-button")
  var audioMenu = new Audio("./audios/music-menu.mp3");
  //Trick to autoplay music onload due to Chrome limitations
  document.addEventListener("mousemove", function() {
    audioMenu.loop = true;
    audioMenu.play()
  });

  startButton.addEventListener("click", function() {
    game.start();
    startButton.innerText = "Game Ongoing";
    startButton.disabled = true;
    resetButton.disabled = false;
    howToButton.disabled = true;
  })
  resetButton.addEventListener("click", function(){
    game.reset();
  })
  howToButton.addEventListener("click", function() {
    game.howTo();
  })
  
};