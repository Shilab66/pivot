/*var doc = "https://md-mcps-psv.edupoint.com/PXP2_Login_Student.aspx?Logout=1&regenerateSessionId=True"

var username = doc.getElementById("ctl00_MainContent_username");
var password = doc.getElementById("ctl00_MainContent_password");
var form = doc.getElementById("aspnetForm");

chrome.storage.sync.get(["a"], function(result) {
        value = result["a"]
  	username.value = atob(value[0])
	password.value = atob(value[1])
	form.submit()
});*/

console.log("hello")

var request = new XMLHttpRequest();
request.open("GET", "https://www.youtube.com/");
request.onload = function () {
  var data = request.responseText;
  const recommendDiv = data.getElementsByClassName("promo-title style-scope ytd-background-promo-renderer")
};
request.send();

console.log(recommendDiv)
