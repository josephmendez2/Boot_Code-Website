var form = document.querySelector("form");
var elements = document.querySelectorAll("[data-admin]");
//when you click on log in on the log in page, you will be redirected the the challenges tab page
form.addEventListener("submit", (e) => {
	//submit has a default action (refresh), preventDefault doesn't allow that behavior to occur
	e.preventDefault();
	validate();
})

//validate log in
function validate() {
	var username = document.getElementById("name").value;
	
	if (username === "admin") {
		window.location.replace("adminChallenges.html");	
	} else if (username === "organizer") {
		window.location.replace("organizerChallenges.html");
	} else if (username === "participant") {
		window.location.replace("challenges.html");
	} else
		alert("Invalid Log-in Information.");
	}
