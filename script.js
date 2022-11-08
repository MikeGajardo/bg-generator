var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

console.log(btn);

css.innerHTML = "linear-gradient(to right, #00ff00 , #ff0000);"

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


var rndmcol = Math.floor(Math.random()*16777215).toString(16);
var rndmcol2 = Math.floor(Math.random()*16777215).toString(16);

function setRandomGradient() {

	body.style.background = 
	"linear-gradient(to right, " + "#"
	+ rndmcol
	+ ", " + "#"
	+ rndmcol2
	+ ")";

	color1.value = "#" + rndmcol
	color2.value = "#" + rndmcol2

	css.textContent = body.style.background + ";";
}

btn.addEventListener("load", setRandomGradient());

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);