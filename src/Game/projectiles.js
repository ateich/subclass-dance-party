var Projectiles = function() {
  this.x = $('body').width();
  this.y = Math.random() * ($('body').height()-50);


  this.$node = $('<div class="projectiles cupcake"></div>');
  $('body').append(this.$node);
  this.$node.css('left', this.x);
  this.$node.css('top', this.y);
  this.moveInterval = setInterval(this.move.bind(this, function(){
    chopper.loseHealth();
  }), 2);
};

Projectiles.prototype.move = function(hitCall) {
  this.x -= 1;
  this.$node.css('left', this.x);

  var chopperPos = $('.chopper').position();

  if(!chopperPos){
    clearInterval(this.moveInterval);
    return;
  }

  if(this.x < chopperPos.left + $('.chopper').width() && this.x > chopperPos.left){
    if(this.y > chopperPos.top && this.y < chopperPos.top + $('.chopper').height()){
      //chopper.loseHealth();
      //
      hitCall();
      this.$node.remove();
      clearInterval(this.moveInterval);
    }
  } else if(this.x < -50){
    this.$node.remove();
    clearInterval(this.moveInterval);
  }
};
