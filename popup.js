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
    
    //settingButton.addEventListener('click', function(){ chrome.action.setPopup(blank.html);}, false);
 
}, false);
