var request = new XMLHttpRequest();
request.open("GET", "http://help.websiteos.com/websiteos/example_of_a_simple_html_page.htm");
request.onload = function () {
  var data = request.responseText;
  const  = data.getElementByTagName('<p>')
};
request.send();
