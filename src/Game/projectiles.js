var Projectiles = function() {
  this.x = $('body').width();
  this.y = Math.random() * ($('body').height()-50);


  this.$node = $('<div class="projectiles"></div>');
  $('body').append(this.$node);
  this.$node.css('left', this.x);
  this.$node.css('top', this.y);
  this.moveInterval = setInterval(this.move.bind(this), 50);
   // this.smoothMovement = new SmoothMovement(1000, 0);
};

Projectiles.prototype.move = function() {
  this.x -= 25;
  this.$node.css('left', this.x);

  var chopperPos = $('.chopper').position();

  if(this.x < chopperPos.left + 150 && this.x > chopperPos.left){
    if(this.y > chopperPos.top && this.y < chopperPos.top + $('.chopper').height()){
      chopper.loseHealth();
      this.$node.remove();
      clearInterval(this.moveInterval);
    }
  } else if(this.x < -50){
    this.$node.remove();
    clearInterval(this.moveInterval);
  }
};
