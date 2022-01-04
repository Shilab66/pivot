document.addEventListener('DOMContentLoaded', function() {
        var submit = document.getElementById('submit');
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        
        submit.addEventListener('click', function(){
		const store = new Array(username.value, password.value)
                chrome.storage.sync.set({"a": store}, function() {
  	                //alert(username.value + password.value);
                 });

		chrome.storage.sync.get(["a"], function(result) {
			value = result["a"]
        		alert(value[0]+ value[1])
		});
        }, false);
}, false);
