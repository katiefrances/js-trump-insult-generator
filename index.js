// app that changes a phrase to a random element in an array eg math.random
// let's try to replicate Detrumpify!

const wordList = [
  "a cheeto faced monster",
  "an unbelievably incompetent bufoon",
  "the smartest guy in the room; everybody says so",
  "an about to be impeached idiot",
  "a racist left over chicken tikka",
  "an extremely talented accordion player",
  "the winner of bankruptcy contests",
  "a flamboyant dumpster makeover",
  "the greatest president who ever lived",
  "a shiny golden turd"
];

function newQuote() {
  let randomNumber = Math.floor(Math.random() * wordList.length);
  document.getElementById("quoteDisplay").innerHTML =
    "Trump is" + " " + wordList[randomNumber];
}
