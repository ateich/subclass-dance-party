var Chopper = function(yPosition){
  this.lives = 3;
  this.health = 3;
  this.y = $('body').height()/2-50;
  this.x = 100;
  this.points = 0;
  this.alive = true;

  this.$node = $('<div class="chopper shadow"></div>');
  $('body').append(this.$node);
  //this.$node.addClass('explosion');
  // this.$node.toggleClass('explosion');
  $('.stats').text("Lives: " + this.lives + " Health: " + this.health + " Points: " + this.points);

  // this.chopper = document.getElementsByClassName("chopper")[0];

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

Chopper.prototype.loseLife = function(livesLost){
  // var chopper = $('.chopper');

  if(!livesLost){
    livesLost = 1;
  }
  this.lives-=livesLost;
  if(this.lives < 0){
    this.lives = 0;
    this.health = 0;
  }
  if(this.health < 0)
  {
    this.health = 0;
  }
  $('.stats').text("Lives: " + this.lives + " Health: " + this.health + " Points: " + this.points);
  if(this.lives <= 0)
  {
    //this.$node.toggleClass('explosion');
     this.$node.addClass('explosion shadow');
     // console.log(document.getElementsByClassName("chopper"));
    // this.chopper.setAttribute('class', 'explosion');
    //Game Over

    setTimeout(function(){
      $('.stats').html("GAME OVER <br> Final Score: " + this.points);
      if(this.alive){
        gameOver();
      }
      this.alive = false;
    }.bind(this), 1000);

  } else {
    this.health = 3;
  $('.stats').text("Lives: " + this.lives + " Health: " + this.health + " Points: " + this.points);
    //Restart level
  }
};

Chopper.prototype.loseHealth = function(){
  this.health--;
  $('.stats').text("Lives: " + this.lives + " Health: " + this.health + " Points: " + this.points);
  if(this.health === 0)
  {
    this.loseLife();
  }
};

Chopper.prototype.gainPoints = function(points){
  this.points += points;
  $('.stats').text("Lives: " + this.lives + " Health: " + this.health + " Points: " + this.points);
};

