var greeting = "hola, ";
var button = document.getElementById("search_btn");
var sform = document.getElementById("sform");
sform.action = "https://google.com/search";
button.addEventListener("click", function() {
   
  //location.href="https://google.com/search?q=" + q;
  alert("https://google.com/search?q=" + q.text);
  

}, false);