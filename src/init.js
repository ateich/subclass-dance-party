$(document).ready(function() {
  window.dancers = [];
  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */
    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerArray = ['makeRockDancer', 'makeDancer',
      'makeBlinkyDancer', 'makeSquareDancer', 'makeTinyDancer'
    ];
    // var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunctionName = dancerArray[Math.floor(Math.random() *
      dancerArray.length)];
    console.log(dancerMakerFunction);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      ($("body").height() - 20) * Math.random(), ($("body").width() -
        20) * Math.random(), Math.random() * 1000);
    $('body').append(dancer.$node);
    console.log('Adding hit to: ', window.dancers);
    console.log('Adding hit to: ', dancer.$node);
    for (var i = 0; i < window.dancers.length; i++) {
      if (collision(dancer.$node, window.dancers[i].$node)) {
        dancer.$node.addClass('hit');
        window.dancers[i].$node.addClass('hit');
        // console.log('Adding hit to: ', window.dancers[i], 'Pos: ', window.dancers[i].$node.position().top);
        // console.log('Adding hit to: ', dancer.$node);
      }
    }
    window.dancers.push(dancer);
  });
  $(".lineupButton").on("click", function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(Math.floor(Math.random * ($("body")
        .height() - 20)), 10);
    }
  });
});

function collision($div1, $div2) {

  var top1 = $div1.position().top;
  var left1 = $div1.position().left;
  var top2 = $div2.position().top;
  var left2 = $div2.position().left;

  var width1 = $div1.width();
  var height1 = $div1.height();
  var width2 = $div2.width();
  var height2 = $div2.height();

  if(top2 >= top1 && top2 <= top1 + height1
    || top2 + height2 <= top1 + height1 && top2 + height2 >= top1+height1){
    if(left2 >= left1 && left2 <= left1 + width1
    || left2 + width2 <= left1 + width1 && left2 + width2 >= left1+width1){
      console.log("COLLISION: ", $div1, ": ", $div2);
      return true;
    }
  }
  return false;
}
