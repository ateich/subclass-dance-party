var makeSquareDancer = function(top, left, timeBetweenSteps){
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.apply(this, arguments);
  // this.$node = $('<span class="dancerSquare"></span>');
  this.$node.removeClass('dancer');
  console.log(this.$node.attr('class'));
  this.$node.addClass('dancerSquare');
  makeDancer.prototype.setPosition.call(this, top, left);
};

  makeSquareDancer.prototype = Object.create(makeDancer.prototype);
  makeSquareDancer.prototype.constructor = makeSquareDancer;

  makeSquareDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    // makeDancer.prototype.step();
    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.addClass('moveSquare');
  };


