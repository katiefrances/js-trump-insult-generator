// app that changes a phrase to a random element in an array eg math.random
// let's try to replicate Detrumpify!

const wordList = [
  "cheeto faced monster",
  "unbelievably incompetent bufoon",
  "the smartest guy in the room; everybody says so",
  "about to be impeached idiot",
  "racist left over chicken tikka",
  "I don't care about refugees, do u?",
  "extremely talented accordion player",
  "winner of bankruptcy contests",
  "flamboyant dumpster makeover",
  "the dolt in cheif"
];

let result = wordList[Math.floor(Math.random() * wordList.length)];
console.log(result);

// let element = document.getElementById(display);

function changeColor(newColor) {
  var elem = document.getElementById("para");
  elem.style.color = newColor;
}
