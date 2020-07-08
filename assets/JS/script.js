var numSquares = 6 ;
var colors = pickRandomColors(numSquares);
var colorDisplay = document.querySelector("#colorDisplay");
var squares= document.querySelectorAll(".square");
var mainColor = pickColor(); 
var body = document.querySelector("body");
var bgColor = document.querySelector("body").style.backgroundColor;
var resetButton = document.querySelector("#resetButton");
var displayOutput = document.querySelector("#displayOutput");
var mainHeader = document.querySelector("#mainHeader");
var easy =document.querySelector("#easy");
var medium = document.querySelector("#medium");
var high =document.querySelector("#high");
colorDisplay.textContent= mainColor;

for(var i=0 ; i<squares.length ; i++){
	squares[i].style.backgroundColor = colors[i];
}

for(var i=0 ; i<squares.length ; i++){
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor != mainColor){ 
			this.style.backgroundColor = bgColor;
			displayOutput.textContent = "Wrong !" ;
		}
		else if(clickedColor = mainColor) {
			correctSelection();
			displayOutput.textContent = "Correct !";
			mainHeader.style.backgroundColor = clickedColor;

		}
	});	

}

 easy.addEventListener("click",function(){
 	easy.classList.add("selected");
 	medium.classList.remove("selected");
 	high.classList.remove("selected");
 	numSquares = 3;
 	colors = pickRandomColors(numSquares);
	 mainColor = pickColor();
	 colorDisplay.textContent= mainColor;
	 for(var i=0 ; i<squares.length ; i++){
	 	if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
		}
		else {
		squares[i].style.display = "none";	
		}	
	}
	mainHeader.style.backgroundColor = "#1E90FF";
	displayOutput.textContent = "";
 });

 medium.addEventListener("click",function(){
 	easy.classList.remove("selected");
 	medium.classList.add("selected");
 	high.classList.remove("selected");
 	numSquares = 6;
 	colors = pickRandomColors(numSquares);
 	/*for(var i=0 ;i<colors.length; i++)
 		console.log(colors[i]+" ");*/
	 mainColor = pickColor();
	 /*console.log(mainColor + "<- Main Color");*/
	 colorDisplay.textContent= mainColor;
	 for(var i=0 ; i<squares.length ; i++){
	 	/*console.log(squares.length);*/
	 	if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		}
		else {
		squares[i].style.display = "none";	
		}	
	}
	mainHeader.style.backgroundColor = "#1E90FF";
	displayOutput.textContent = "";
 });

high.addEventListener("click",function(){
	easy.classList.remove("selected");
	medium.classList.remove("selected");
 	high.classList.add("selected");
	numSquares = 9;
 	colors = pickRandomColors(numSquares);
	 mainColor = pickColor();
	 colorDisplay.textContent= mainColor;
	 for(var i=0 ; i<squares.length ; i++){
		squares[i].style.backgroundColor = colors[i];	
		squares[i].style.display = "block";
	}
	mainHeader.style.backgroundColor = "#1E90FF";
	displayOutput.textContent = "";
});

resetButton.addEventListener("click",function(){
	 //change the colours
	 colors = pickRandomColors(numSquares);
	 //change mainColor;
	 mainColor = pickColor();
	 //diplay maincolor
	 colorDisplay.textContent= mainColor;
	 // allot change colors t
	 	for(var i=0 ; i<squares.length ; i++){
		squares[i].style.backgroundColor = colors[i];
		}
	 //change main header background back to normal

	 mainHeader.style.backgroundColor = "#1E90FF";
	 displayOutput.textContent = "";
});

function correctSelection(){
	for(var i=0 ; i<numSquares ; i++){
 	squares[i].style.backgroundColor = mainColor;
	}
}


function pickColor() {
	return (colors[Math.floor(Math.random() * colors.length)]);
	console.log("I'm working !");
}

function pickRandomColors(num){
	var arr = [];

	for(var i=0; i<num ; i++){
		arr[i] = randomColor();
	}
	return arr;
}


function randomColor (){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r +", " + g + ", " + b + ")" ;

}
