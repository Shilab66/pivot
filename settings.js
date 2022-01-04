document.addEventListener('DOMContentLoaded', function() {
        var submit = document.getElementById('submit');
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        
        submit.addEventListener('click', function(){
		const store = new Array(btoa(username.value), btoa(password.value))
                chrome.storage.sync.set({"a": store}, function() {
  	                alert("Your information has been updated");
                 });
        }, false);
}, false);
