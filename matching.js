// Initialize variables for Javascript
var holdColor, hash;

hash = {};

function initialize() {
  // create an array of 8 matching pairs

  // initializes variables for this scope;
  var colors, arr, arrRand, boxHash;

  //
  colors = ["lightblue", "darkblue", "lightgreen", "darkgreen", "lightred", "darkred", "lightpurple", "darkpurple"];


  arr = [];
  arrRand = [];
  // Using Compound loops.
  // Has a default length of 8 matching pair, but can be changed using arguments and easily reused.
  // This is the best answer for long term flexibility and reuse.
  function createArray(num = 8) {
    for (i = 0 ; i < num ; i++) {
      for (j = 0 ; j < 2 ; j++) {
        arr.push(i);
      };
    };
    return arr;
  };

  // Creates an array of a designated length and returns a randomized version of the entries.
  // This answer provides flixibility and reuse.
  function arrRandom(num = 16) {
    while (arrRand.length < 16) {
      var rand = Math.floor(Math.random() * num);
      arrRand.includes(rand) ? rand : arrRand.push(rand);
    };
    return arrRand;
  };

  // Creates a hash with: random number, pair number, and pair number color
  function boxHash(num = 16) {
    for (i = 0 ; i < num ; i++) {
      var box = "box" + (i + 1);
      hash[box] = { rand: arrRand[i], arr: arr[i], color: colors[arr[i]] };
    };
  };

  // Sets box color
  function setBackgroundColors(num = 16) {
    // Temporarily set to 2 for checking 2 matching pair next
    for (i = 0 ; i < 2 ; i++) {
      var box = "box" + (i + 1);
      console.log(box);
      console.log(hash[box].color);
      document.getElementById(box).style.backgroundColor = hash[box].color;
      document.getElementById(box).style.border = hash[box].color;
    }
  }

  createArray();
  arrRandom();
  boxHash();
  setBackgroundColors();

  return hash;
}

// Creates 8 pairs of squares with random matching colors
var response = initialize();
// console.log(response);

initialize()

// click on square to reveal color
// Not yet implemented
function onClickColor(name) {
  hash[name].color = "purple";
  holdColor = hash[name].color;
  document.getElementById(name).style.backgroundColor = hash[name].color;
}

// Changes border color of square to yellow when cursor is over it
function highlight(name) {
  holdColor = document.getElementById(name).style.backgroundColor;
  document.getElementById(name).style.border = "5px solid yellow";
}

// Removes border when cursor leaves square
function unhighlight(name) {
  console.log(holdColor);
  document.getElementById(name).style.border = "5px solid " + holdColor;
}
