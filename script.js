var myCanvas = document.getElementById("canvas"),
myContext = myCanvas.getContext('2d');

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

var myArray = [];

function Circle(o, flagO, r, flagRadius, s, w, flagW, x, y, сolorR, flagR, сolorG, flagG, сolorB, flagB) {
	this.o = o; 	//		opacity
	this.flagO = flagO;
	this.r = r;		//		radius
	this.flagRadius = flagRadius;
	this.s = s;		//		speed
	this.w = w;		//		width
	this.flagW = flagW;
	this.x = x;
	this.y = y;
	this.сolorR = сolorR;
	this.flagR = flagR;
	this.сolorG = сolorG;
	this.flagG = flagG;
	this.сolorB = сolorB;
	this.flagB = flagB;
	this.counter = 0;
	this.sign = 1;
	if (Math.floor(Math.random() * 2) === 0) this.sign = -1;
}

Circle.prototype.update = function() {

	this.counter += this.sign * this.s;
	
	if (this.сolorR < 0) this.flagR = true;
	if (this.сolorR > 150) this.flagR = false;
	if (this.flagR === true) this.сolorR++; 
	if (this.flagR === false) this.сolorR--; 

	if (this.сolorG < 0) this.flagG = true;
	if (this.сolorG > 150) this.flagG = false;
	if (this.flagG === true) this.сolorG++; 
	if (this.flagG === false) this.сolorG--;

	if (this.сolorB < 0) this.flagB = true;
	if (this.сolorB > 150) this.flagB = false;
	if (this.flagB === true) this.сolorB++; 
	if (this.flagB === false) this.сolorB--;

	if (this.w < 1) this.flagW = true;
	if (this.w > 50) this.flagW = false;
	if (this.flagW === true) this.w = this.w + .1; 
	if (this.flagW === false) this.w = this.w - .1;

	if (this.o < 0.3) this.flagO = true;
	if (this.o > 0.9) this.flagO = false;
	if (this.flagO === true) this.o = this.o + .005; 
	if (this.flagO === false) this.o = this.o - .005;

	if (this.r < 50) this.flagRadius = true;
	if (this.r > 100) this.flagRadius = false;
	if (this.flagRadius === true) this.r = this.r + .5; 
	if (this.flagRadius === false) this.r = this.r - .5;

	myContext.beginPath();

	myContext.arc(	this.x + Math.cos(this.counter / 100) * this.r,
					this.y + Math.sin(this.counter / 100) * this.r,
					this.w,
					0,
					Math.PI * 2,
					false
				);

	myContext.closePath();

	myContext.fillStyle = 	'rgba(' + 0 // 	this.сolorR 
							+ ', ' + 0 	//	this.сolorG 
							+ ', ' + this.сolorB
							+ ', ' + this.o + ')';
	myContext.fill();
}


function drawCircles() {
	for (var i = 0; i < 200; i++) {
	var r = 50 + Math.floor(Math.random() * 50),
		flagRadius = true,
		x = Math.round(-100 + Math.random() * (window.innerWidth + 200)),
		y = Math.round(-100 + Math.random() * (window.innerHeight + 200)),
		s = 0.2 + Math.random() * 3,
		flagW = true,		
		w = Math.floor(Math.random() * 50),
		flagR = true,
		сolorR = Math.floor(Math.random() * 150),
		flagG = true,
		сolorG = Math.floor(Math.random() * 150),
		flagB = true,
		сolorB = Math.floor(Math.random() * 150);
		flagO = true,
		o = Math.random();
		if (Math.random() * 2 === 0) flagRadius = false;
		if (Math.random() * 2 === 0) flagR = false;
		if (Math.random() * 2 === 0) flagG = false;
		if (Math.random() * 2 === 0) flagB = false;
		if (Math.random() * 2 === 0) flagW = false;
		if (Math.random() * 2 === 0) flagO = false;

		circle = new Circle(o, flagO, r, flagRadius, s, w, flagW, x, y, сolorR, flagR, сolorG, flagG, сolorB, flagB);
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