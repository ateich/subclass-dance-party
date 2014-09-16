var Chopper = function(yPosition){
  this.lives = 3;
  this.health = 3;
  this.y = $('body').height()/2-50;
  this.x = 100;

  console.log($('body').height());

  this.$node = '<div class="chopper">Chopper Goes Here</div>';
  console.log(this.$node);
  $('body').append(this.$node);

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

  if(this.lives === 0)
  {
    //Game Over
  } else {
    this.health = 3;
    //Restart level
  }
};

Chopper.prototype.loseHealth = function(){
  this.health--;

  if(this.health === 0)
  {
    this.loseLife();
  }
};

