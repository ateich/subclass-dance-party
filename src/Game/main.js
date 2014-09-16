$(document).ready(function() {
  var startGame = function(){
  chopper = new Chopper(100);
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
