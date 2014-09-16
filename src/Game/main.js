$(document).ready(function() {
  var startGame = function(){
  chopper = new Chopper(100);
  setInterval(function() {
    var projectile = new Projectiles();
    console.log("hit");
  }, 1000);
  };

  var chopper;
  startGame();

  $( "body" ).keydown(function(e) {
    if(e.keyCode === 38){
      chopper.moveUp();
    }
    if(e.keyCode === 40){
      chopper.moveDown();
    }
  });

});
