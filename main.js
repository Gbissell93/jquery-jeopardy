const rows = 5;
const columns = 5;
const gameboard = $('#gameboard');
const gameMsg = $('#game-message');
const answerBox = $('#answer-box');
const squares =$('.square')
const submitBtn = $('#submit');
let counter = 0;
const scoreboard = $('#score-value');
const gridWidth = 5;


    

//create grid
let count = 0;
while (count < gridWidth * gridWidth) {
    count++
    const div =  $('<div class = "square"> </div>');
    //condition for content text
    if ( count <= 5 && count >= 0) {
        div.text('$100')
    }
    if ( count <= 10 && count >= 6) {
        div.text('$200')
    }
    if ( count <= 15 && count >= 11) {
        div.text('$300')
    }
    if ( count <= 20 && count >= 16) {
        div.text('$400')
    }
    if ( count <= 25 && count >= 21) {
        div.text('$500')
    }

    div.on('click', async function(e) {
  
    
        const rawData = await fetch('jeopardy.json');
        const data = await rawData.json();
        console.log(data);
    
        //generate an array of questions witht he same value
        const byValue = [] 
        data.forEach(element => {
            
            if (element.value === div.text()) {
                byValue.push(element)
            }
        });
    
        const question = byValue[Math.floor(Math.random() * byValue.length)]
            
        //randomly select question based on square.text()
    console.log(div.text())
    console.log(byValue)
    console.log(question.value.slice(1))
    console.log(question.answer.toLowerCase())

    gameMsg.text(question.question)
    const updateScore = (score) => {
        const newScore = Number(question.value.slice(1)) + score;
        scoreboard.text(newScore)
    }
    let answer = question.answer;
    const submitAnswer = () => {
        if (answer.toLowerCase() == answerBox.val().toLowerCase) {
            gameMsg.text('CORRECT!')
            updateScore(counter)
        
        }

        else {
            gameMsg.text('INCORRECT!')
        }
        console.log(answerBox.val())
        console.log('answer', answer.toLowerCase())
    }
    submitBtn.click(submitAnswer)

    }
    )
    
    
    gameboard.append(div);
}




