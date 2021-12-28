document.addEventListener('DOMContentLoaded', function() {
    var canvasButton = document.getElementById('canvas');
    var synergyButton = document.getElementById('synergy');
    canvasButton.addEventListener('click', function(){
        var newURL = "http://stackoverflow.com/";
        chrome.tabs.create({ url: newURL });
    });
    synergyButton.addEventListener('click', function(){
        var newURL = "http://stackoverflow.com/";
        chrome.tabs.create({ url: newURL });
    });
}
