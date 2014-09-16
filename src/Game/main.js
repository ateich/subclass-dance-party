var chopper;
var gameOver;
var makeProjectiles = [];
var projectileTime = 2000;
var instructionWindow;

$(document).ready(function() {
  var startGame = function(){

    instructionWindow.remove();
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

  var instructions = function(){
    instructionWindow = $('<div class="instructions"></div>');
    instructionWindow.append('<h3>Instructions</h3>');
    instructionWindow.append('<div>Use the Up and Down Arrow Keys to Move <img height="75px" src="cat.gif"/></div>');
    instructionWindow.append('<div>Eat yummy cheezburgers to gain points! <img src = "cheeseburger.gif"/></div>');
    instructionWindow.append('<div>Avoid the Poisonous Cupcakes! They cause diabetes... <img width="40px" src = "cupcake.gif"/></div>');
    instructionWindow.append('<div>Hide from DEATH! He will kill you! <img class="pulse" width="40px" src = "death.gif"/></div>');
    $('body').append(instructionWindow);
    $('body').append($('<button style="height:100px; margin-top:10;" class="newGameButton">Start Game</button>'));
    $('.newGameButton').on('click', function(){
      // console.log('NEW GAME');
      startGame();
    });
  };

  instructions();
  // startGame();

  $( "body" ).keydown(function(e) {
    if(e.keyCode === 38){
      chopper.moveUp();
    }
    if(e.keyCode === 40){
      chopper.moveDown();
    }
  });

  gameOver = function(){
    console.log("IN GAME OVER");
    for(var i =0; i<makeProjectiles.length; i++){
    clearInterval(makeProjectiles[i]);
    }
    $('body').append($('<button class="newGameButton">New Game</button>'));
    $('.projectiles').remove();
    $('.chopper').remove();

    $('.newGameButton').on('click', function(){
      console.log('NEW GAME');
      startGame();
    });
  }

});
