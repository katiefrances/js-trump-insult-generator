// app that changes a phrase to a random element in an array eg math.random
// let's try to copy Detrumpify 

const wordList = [
    "cheeto faced monster", "unbelievably incompetent bufoon", "the smartest guy in the room everybody says so", ""
]



let result = wordList[Math.floor(Math.random()*wordList.length)];

console.log(result)