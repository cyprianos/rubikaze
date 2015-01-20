
var Matrix = require('functional-matrix');

var Wall = function(dim, color) {
  //corners && edges separately? -- not scalable for other dimensions than 3x3.
  this.dim = dim;
  // this.rel = {
  //   //relative directions:
  //   'u': null,
  //   'd': null,
  //   'l': null,
  //   'b': null,
  //   'f': this,
  //   'r': null
  // };
  this.matrix = new Matrix(dim,dim, color);
};

Wall.prototype = {
  // fill: function(color){
  //   this.matrix = this.matrix.map(function(item){
  //     return color;
  //   })
  // },
  //clock true or false

  rotate: function(clock){
    //use matrix rotation in future
    var m = this.matrix;
    if(clock === true) {
      m = m.rotateCW();
    } else if(clock === false) {
      m = m.rotateCCW();
    } else throw 'bad clock direction';
  }
}