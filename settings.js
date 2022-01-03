document.addEventListener('DOMContentLoaded', function() {
        var submit = document.getElementById('submit');
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        
        submit.addEventListener('click', function(){
                chrome.storage.sync.set({"0": [username.value, password.value]}, function() {
  	                alert('Username and password are updated');
                 });
        }, false);
}, false);
