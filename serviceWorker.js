var doc = "https://md-mcps-psv.edupoint.com/PXP2_Login_Student.aspx?Logout=1&regenerateSessionId=True"

var username = doc.getElementById("ctl00_MainContent_username");
var password = doc.getElementById("ctl00_MainContent_password");
var form = doc.getElementById("aspnetForm");

chrome.storage.sync.get(["a"], function(result) {
        value = result["a"]
  	username.value = atob(value[0])
	password.value = atob(value[1])
	form.submit()
});
