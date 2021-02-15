/*
 * This files holds all the code for Project 0.
 */

//Run once broswer has loaded everything
window.onload = function () {

 //Function that adds new Divs to the HTML page
 function addHTML(text)
{
  //Grab the container div
  var start_div = document.getElementById('start');
  //make a new Div element
  var newElement = document.createElement('div');
  //add text to that div
  newElement.innerHTML = text;
  //append it to the main 
  start_div.appendChild(newElement);
}

//add code for mapCSE here


//following is a test that should run
addHTML("Testing");

};
