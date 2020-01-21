const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

function pyramidWord(word) {
  let count = 0;
  let freq = [];

  // create array of letters and sort
  const letters = word
    .toLowerCase()
    .split("")
    .sort();

  // save first letter to begin comparison
  let current = letters[0];

  // iterate over each letter and increment its frequency
  letters.forEach((letter, index) => {
    if (letter === current) count++;
    else {
      freq.push(count);
      current = letter;
      count = 1;
    }

    // if its the last letter, push and sort the freqs
    if (index === letters.length - 1) {
      freq.push(count);
      freq.sort();
    }
  });

  // iterate over freqs to confirm no duplicates or gaps
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] !== i + 1) return false;
  }

  // found no duplicates or gaps, we found a pyramid word
  return true;
}

app.get("/pyramid_word", (req, res) => {
  // retrieve word string from query params
  let string = req.query.string;

  // return a boolean to determine if its a pyramid word
  if(!string){
    res.status(400).send("Word string required");
  }else{
    res.send(pyramidWord(string));
  }

});

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
