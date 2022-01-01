var username = document.getElementById("ctl00_MainContent_username");
var password = document.getElementById("ctl00_MainContent_password");

alert("webpage opened")

username.addEventListener("click", () => {
	console.log('username clicked');
});
password.addEventListener("click", () => {
	console.log('password clicked');
});
