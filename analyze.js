const fs = require('fs');

const rawData = fs.readFileSync('jeopardy.json');
let data =JSON.parse(rawData);
const value = '$200'
const randShowNumer = data[Math.floor(Math.random() * data.length)].showNumber
console.log(randShowNumer)

const game = data.filter((questions) => questions.value === value)
console.log(game)