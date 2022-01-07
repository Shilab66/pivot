console.log("bg running")

chrome.action.onClicked.addListener(buttonCLicked);

function buttonClicked(){
 console.log("button clicked") 
}
