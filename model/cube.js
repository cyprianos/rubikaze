var Wall = require('./wall');
console.log(Wall);

//Rubik as constructor - create 6 walls and relationships between walls
//create 6 walls
var Cube = function() {
	var walls = this.walls = {};
	walls.front = new Wall();
	// for(var i=0;i<6;i++) {
	// 	var w = new Wall();
	// 	wall.push(w);
	// }
};
Cube.prototype = {
	move: move,
	//default relationships
	position: {
		front: 'front',
		back: 'back',
		left: 'left',
		right: 'right',
		top: 'top',
		bottom: 'bottom'
	},
	NAME: {
		FRONT:1,
		BACK:2,
		LEFT:3,
		RIGHT:4,
		TOP:5,
		BOTTOM:6
	},
	front: front
	//swap: swap
};

function swap4(a,b,c,d) {
	var tmp = a;
	a = b;
	b = c;
	c = d;
	d = tmp;
	//rotate left wall
	//rotate right wall
}

//rotate - x,y,z

function rotate(dimension,direction){
	
	var top = this.position.top,
		bottom = this.position.bottom,
		left = this.position.left,
		right = this.position.right,
		front = this.position.front,
		back = this.position.back,
		swap = this.swap;
	
	switch (dimension) {
		case 'z':
			if(direction === true){
				swap4(top,front,bottom,back);
				//right.rotateTRUE
				//left.rotateFALSE
			} else if(direction === false) {
				swap4(back,bottom,front,top);
				//right.rotateMatriix.TRUE
				//left.rotateMatrix.FALSE
			} else throw 'bad direction'
		break;

		case 'x':
			if(direction === true){
				swap4(top,front,bottom,back);
			} else if(direction ===false) {
				swap4(back,bottom,front,top);
			} else throw 'bad direction'
		case 'z': break;
		default: throw 'bad dimension';break;
	}
};
//set as front layer
function move(layer,direction){

}

function front(layer) {

}


module.exports = Cube;
