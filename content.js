//please go die in a dark hole where you will rot for the rest of eternity, forgotten by all of society
//or you could actully work



var username = document.getElementById("ctl00_MainContent_username");
var password = document.getElementById("ctl00_MainContent_password");
var form = document.getElementById("aspnetForm");

//alert("opened")
chrome.storage.sync.get(["0"], function(result) {
        //alert(result[0])
        //alert(result[1])
  	username.value = result.value[0]
	password.value = result.value[1]
        alert("info recieved")
});

//alert("webpage opened")
//form.submit();

username.addEventListener("click", () => {
	console.log('username clicked');
	//username.value = "176972"
});
password.addEventListener("click", () => {
	console.log('password clicked');
	//password.value = "bdd9zx"
	//form.submit();
});
