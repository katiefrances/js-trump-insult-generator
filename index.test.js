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

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
