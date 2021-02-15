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
 
const bb = [1, 23, 30];

// pass a function to mapCSE and index to skip
const new_a = bb.mapCSE(function (x, y, z)
{
return x + y + z[0];

}, 0, 2, 15);

console.log(new_a);
addHTML("new_a is now "+ new_a);
// expected output: Array [1, 25, 30]
//there is no index 15, so nothing was skipped, 0 and 2 are skipped

};
