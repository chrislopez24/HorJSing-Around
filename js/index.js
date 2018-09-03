window.onload = function() {
  var game = new Game("canvas");
  document.getElementById("start-button").addEventListener("click", function() {
    game.start();
    document.getElementById("start-button").innerText = "Game Ongoing";
    document.getElementById("start-button").disabled = true;


  })
  
  //game.start();
  
};