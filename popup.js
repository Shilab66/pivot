document.addEventListener('DOMContentLoaded', function() {
    var canvasButton = document.getElementById('canvas');
    var synergyButton = document.getElementById('synergy');
    var settingButton = document.getElementById('settings');

    canvasButton.addEventListener('click', function(){
        var newURL = "https://mcpsmd.instructure.com/";
        chrome.tabs.create({ url: newURL });
    }, false);

    synergyButton.addEventListener('click', function(){
        var newURL2 = "https://md-mcps-psv.edupoint.com/PXP2_Login_Student.aspx?regenerateSessionId=True";
        chrome.tabs.create({ url: newURL2 });
    }, false);
    
    settingButton.addEventListener('click', function(){
        chrome.tabs.create({ url: 'options.html'});
    }, false);
    
    /*settingButton.addEventListener('click', function(){ 
	chrome.action.setPopup({popup: "blank.html"});
    }, false);*/


    key = 1
    value  = 100
    value2 = 200


    chrome.storage.sync.set({key: value}, function() {
  	alert('Value is set to ' + value);
    });

    chrome.storage.sync.set({key: value2}, function() {
  	alert('Value is updated to ' + value2);
    });

    chrome.storage.sync.get(['key'], function(result) {
  	alert('Value currently is ' + result.key);
    });
 
}, false);
