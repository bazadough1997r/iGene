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
 function account() { 
    document.getElementById("register").style.visibility = "visible"; 
    console.log("test");
} 

