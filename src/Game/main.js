var chopper;
var gameOver;
var makeProjectiles = [];

$(document).ready(function() {
  var startGame = function(){
  chopper = new Chopper(100);

  makeProjectiles.push(setInterval(function() {
    var projectile = new Projectiles();//CUPCAKE
  }, 1000));

  makeProjectiles.push(setInterval(function() {
    var projectile = new Projectile1();
  }, 2000));//CHEEZBURGER

  makeProjectiles.push(setInterval(function() {
    var projectile = new KillerProjectile();
  }, 2000));//DEATH


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
    for(var i =0; i<makeProjectiles.length; i++){
    clearInterval(makeProjectiles[i]);
    }
    $('.projectiles').remove();
    $('.chopper').remove();
  }

});
