var myCanvas = document.getElementById("canvas"),
myContext = myCanvas.getContext('2d');

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

var myArray = [];

function Circle(r,s,w,x,y) {
	this.r = r;		//		radius
	this.s = s;		//		speed
	this.w = w;		//		width
	this.x = x;
	this.y = y;

	this.opacity = 0.05 + Math.random() * 0.5;

	this.counter = 0;

	var signHelper = Math.floor(Math.random() * 2);

	if (signHelper == 1) {
		this.sign = -1;
	} else {
		this.sign = 1;
	}
}

Circle.prototype.update = function() {

	this.counter += this.sign * this.s;

	myContext.beginPath();

	myContext.arc(	this.x + Math.cos(this.counter / 100) * this.r,
					this.y + Math.sin(this.counter / 100) * this.r,
					this.w,
					0,
					Math.PI * 2,
					false
				);

	myContext.closePath();

	myContext.fillStyle = 'rgba(185, 0, 238,' + this.opacity + ')';
	myContext.fill();
}

function drawCircles() {
	for (var i = 0; i < 50; i++) {
	var r = 100,
		x = Math.round(-100 + Math.random() * (window.innerWidth + 200)),
		y = Math.round(-100 + Math.random() * (window.innerHeight + 200)),
		s = 0.2 + Math.random() * 3,
		w = 5 + Math.random() * 100,
		circle = new Circle(r,s,w,x,y);
		myArray.push(circle);
	}
	draw();
}

function draw() {
	myContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
	for (var i = 0; i < myArray.length; i++) {
		var myCircle = myArray[i];
		myCircle.update();
	}
	requestAnimationFrame(draw);
}

drawCircles();