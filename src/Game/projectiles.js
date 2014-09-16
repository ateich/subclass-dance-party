var Projectiles = function() {
  this.x = $('body').width();
  this.y = Math.random() * $('body').height();


  this.$node = $('<div class="projectiles"></div>');
  $('body').append(this.$node);
  console.log(this.$node);
  // this.projectile = d3.select(this.$node);
  this.$node.css('left', this.x);
  this.$node.css('top', this.y);
  console.log(this.$node, " HMM");
  setInterval(this.move.bind(this), 1000);
};

Projectiles.prototype.move = function() {
  //this.x -= 20;
  //this.$node.css({left: this.x});
  //
  this.x -= 20;
  console.log('yolo', this.x, this.$node.css('left'));
  this.$node.css('left', this.x);
  console.log('Moving');
};
