const rows = 5;
const columns = 5;
const gameboard = $('#gameboard');
const row = $('<div class = "row"> </div>')
const gridWidth = 5;
console.log(gameboard)

//create grid
let count = 0;
while (count < gridWidth * gridWidth) {
    count++
    const div =  $('<div class = "square"> </div>');
    //condition for content text
    if ( count <= 5 && count >= 0) {
        div.text('$100')
    }
    if ( count <= 10 && count >= 4) {
        div.text('$200')
    }
    if ( count <= 15 && count >= 9) {
        div.text('$300')
    }
    if ( count <= 20 && count >= 14) {
        div.text('$400')
    }
    if ( count <= 25 && count >= 19) {
        div.text('$500')
    }
    gameboard.append(div);

}