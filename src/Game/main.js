var chopper;
var gameOver;
var makeProjectiles = [];
var projectileTime = 2000;

$(document).ready(function() {
  var startGame = function(){

    $('.newGameButton').remove();

    chopper = new Chopper(100);

    makeProjectiles.push(setInterval(function() {
      var projectile = new Projectiles();//CUPCAKE
    }, projectileTime/4));

    makeProjectiles.push(setInterval(function() {
      var projectile = new Projectile1();
    }, projectileTime));//CHEEZBURGER

    makeProjectiles.push(setInterval(function() {
      var projectile = new KillerProjectile();
    }, projectileTime/2));//DEATH


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
    $('body').append($('<button class="newGameButton">New Game</button>'))
    $('.projectiles').remove();
    $('.chopper').remove();

    $('.newGameButton').on('click', function(){
      console.log('NEW GAME');
      startGame();
    });
  }

});
