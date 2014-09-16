var chopper;
var gameOver;
var makeProjectiles;

$(document).ready(function() {
  var startGame = function(){
  chopper = new Chopper(100);

  makeProjectiles = setInterval(function() {
    var projectile = new Projectiles();
  }, 1000);

  // setInterval(function() {
  //   var projectile = new Projectiles();
  // }, 1000);


  };


  startGame();

  $( "body" ).keydown(function(e) {
    if(e.keyCode === 38){
      chopper.moveUp();
    }
    if(e.keyCode === 40){
      chopper.moveDown();
    }
  });

  gameOver = function(){
    clearInterval(makeProjectiles);
    $('.projectiles').remove();
  }

});
