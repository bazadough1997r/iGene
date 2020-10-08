//simulations alert
document.getElementById("availability").addEventListener("click", available);
document.getElementById("Explore").addEventListener("click", available);

function available() {
	alert("Simulations are not available right now!");
}


//subscribe alert 
function fillit() {
	var empty = document.getElementById("subbtn").value;
	if (empty == "") {
		alert("you have to write your email first, please!")
	} else {
		alert("You are now subscribed!")
	}
}


//registration form visibilty
document.getElementById("yourprofile").addEventListener("click", account);

 function account() { 
 	console.log("test");
    document.getElementById("register").style.visibility = "visible"; 
    console.log("test");
} 

//marks
function marks() {
	var Q1 = document.quiz.Q1.value;
	var Q2 = document.quiz.Q2.value;	
	var Q3 = document.quiz.Q3.value;
	var Q4 = document.quiz.Q4.value;
	var Q5 = document.quiz.Q5.value;
	var trueValues = 0;
	if(Q1 === "98%"){
		trueValues++;
	}
	if(Q2 === "Nitrogen"){
		trueValues++;
	}
	if(Q3 === "8 minutes"){
		trueValues++;
	}
	if(Q4 === "Stephen Hawking") {
		trueValues++;
	}
	if(Q5 === "-40") {
		trueValues++;
	}
var notes=["you are not interested in science","science is for everyone, try to read and you will get there..","Great! You can be the next legend..","Wow! You're AMAZING!"];

if (trueValues==0||trueValues==1){
	document.getElementById("note").innerHTML= notes[0];
} 
if (trueValues==2){
	document.getElementById("note").innerHTML= notes[1];
}
if (trueValues==3||trueValues==4){
	document.getElementById("note").innerHTML= notes[2];
}
if (trueValues==5){
	document.getElementById("note").innerHTML= notes[3];
} 
    document.getElementById("afterSubmit").style.visibility = "visible";
 	document.getElementById("numberCorrect").innerHTML = "You got " + trueValues + " right of 5 Questions!";
}
