# CSE264 Project 0: Add new method to JavaScript Array prototype
## Due: Mon Sept 16 at 11:59 PM

## Write your name and Lehigh e-mail address here in the README before you submit!

In this assignment, you will be adding a new method to the Array prototype, meaning that all Arrays will have access to this new method.
All the code you need is in this GitHub Classroom repo. 

### Instructions 
You will be implementing a new method to the Array Prototype called "mapRoulette".  mapRoulette will work similarly to the regular map method for Arrays (see here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map for more information about map and how it works).

Map takes a function as an argument, and applies it to every element in the array, returning a new array with the results.

mapRoulette will take a number of functions and randomly apply one of this set of functions to each element of the array. In other words, for each element of the array, mapRoulette will randomly use one of the functions it has been given. For example, if mapRoulette was given 3 functions, each function at a 1/3 chance of being used on any element of the array.


For example.

```javascript

const bb = [1, 1, 1, 1];

// pass functions to mapRoulette 
const new_a = bb.mapRoulette(x => x + 2, x => x + 5, x => x + 10);

console.log(new_a);
// One possible expected output: Array [6, 6, 11, 3]

```

mapRoulette can have any number of arguments (functions). If only one function is given, then it should work exactly like regular map (by definition). 


Also notice that in normal map, the function (the callback function applied to each element of the array) can have three arguments. 

* currentValue - The current element being processed in the array.
* index (optional) - The index of the current element being processed in the array.
* array (optional) - The array map was called upon.

for example:
```javascript

const bb = [1, 23, 25];

// pass a function to mapRoulette and index to skip
const new_a = bb.mapRoulette(function (x, y, z)
{

//value of current element
console.log(x);

//value of current index
console.log(y);

//original array
console.log(z);

return x + y + z[0];

});

console.log(new_a);
// expected output: Array [2, 25, 28] as only one function was given

```

Other things to consider:
* You MUST submit a video link in the README (using zoom, etc) that has you walking through your code and discussing its logic and design. 5 minutes max!
* Use no outside javascript libraries. No jQuery, etc. 
* You can use any part of ES6 Javascript.
* Use the developer tools in your browser to help with debugging
* You will need to have a local server to run javascript from a local source on your browser. If you have python installed on your computer, you can run "python -m SimpleHTTPServer” in your cloned repo directory from the command line. Then in your browser go to http://localhost:8000/ You should see the html file and be able to run the javascript code. 

### Grading
* **80 Points** - Current code works as expected (examples in README work)
* **5 Points** - well commented and easy to read/follow
* **15 Points** - Provide a video explaining the logic and flow of your code

* If code doesn't run/compile you can get no more than a 65 (max grade). But please write comments and a README to explain the process, what you were trying to do. You can still get credit with your video and comments that are walking through your thinking of your project. 
