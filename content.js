var username = document.getElementById("ctl00_MainContent_username");
var password = document.getElementById("ctl00_MainContent_password");
var form = document.getElementById("aspnetForm");

//alert("webpage opened")
username.value = "123456"
password.value = "password"
form.submit();

username.addEventListener("click", () => {
	console.log('username clicked');
	//username.value = "176972"
});
password.addEventListener("click", () => {
	console.log('password clicked');
	password.value = "bdd9zx"
	//form.submit();
});
