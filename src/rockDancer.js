var makeRockDancer = function(top, left, timeBetweenSteps){
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="rockDancer"></span>');
  makeDancer.prototype.setPosition.call(this, top, left);

};

  makeRockDancer.prototype = Object.create(makeDancer.prototype);
  makeRockDancer.prototype.constructor = makeRockDancer;

  makeRockDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    // makeDancer.prototype.step();
    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
    // console.log(this.grow);
    this.$node.addClass('infinity tossing');
  };
  makeRockDancer.prototype.setPosition = function(top, left){
    makeDancer.prototype.setPosition.call(this, top, left);


  };


