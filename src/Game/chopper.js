var Chopper = function(yPosition){
  this.lives = 3;
  this.health = 3;
  this.y = $('body').height()/2-50;
  this.x = 100;

  this.$node = '<div class="chopper"></div>';
  $('body').append(this.$node);
  $('.stats').text("Lives: " + this.lives + "   Health: " + this.health);


  $('.chopper').css({left: this.x, top: this.y});
};

Chopper.prototype.moveUp = function(){
  if(this.y-10 > 0){
    this.y -= 20;
    $('.chopper').css({top: this.y});
  }
};

Chopper.prototype.moveDown = function(){
  if(this.y+100 < $('body').height()){
    this.y += 20;
    $('.chopper').css({top: this.y});
  }
};

Chopper.prototype.loseLife = function(){
  this.lives--;
  $('.stats').text("Lives: " + this.lives + " Health: " + this.health);
  if(this.lives === 0)
  {
    //Game Over
    gameOver();
    $('.stats').text("GAME OVER");
  } else {
    this.health = 3;
    $('.stats').text("Lives: " + this.lives + " Health: " + this.health);
    //Restart level
  }
};

Chopper.prototype.loseHealth = function(){
  this.health--;
  $('.stats').text("Lives: " + this.lives + " Health: " + this.health);
  if(this.health === 0)
  {
    this.loseLife();
  }
};

