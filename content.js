var username = document.getElementById("ctl00_MainContent_username");
var password = document.getElementById("ctl00_MainContent_password");
var form = document.getElementById("aspnetForm");

//alert("opened")
chrome.storage.sync.get(["a"], function(result) {
        value = result["a"]
  	username.value = atob(value[0])
	password.value = atob(value[1])
	form.submit()
});

/*alert("webpage opened")

username.addEventListener("click", () => {
	console.log('username clicked');
	
});
password.addEventListener("click", () => {
	console.log('password clicked');
});*/
