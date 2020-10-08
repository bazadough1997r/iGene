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


