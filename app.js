const p1Display = document.querySelector('#p1display');
const p2Display = document.querySelector('#p2display');
const p1Btn = document.querySelector('#p1button');
const p2Btn = document.querySelector('#p2button');
const resetBtn = document.querySelector('#reset');
const winningScore = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let upToScore = 0;
let isGameOver = false;

p1Btn.addEventListener('click', () => {
    // if the isGameOver is not true increase the score by 1
    if (!isGameOver) {
        p1Score += 1;
        // if the score is equal to the selected winning score turn isGameover to true
        if (p1Score === upToScore) {
            isGameOver = true;
            //changing the score colours when game over
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            //disabling buttons
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
    }
    //edit the score display
    p1Display.textContent = `${p1Score}`; 
})
p2Btn.addEventListener('click', () => {
    // if the isGameOver is true increase the score by 1
    if (!isGameOver) {
        p2Score += 1;
        // if the score is equal to the selected winning score turn 
        if (p2Score === upToScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');

            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
    }
    // update the score display
    p2Display.textContent = `${p2Score}`; 
})

// checking if there's a change of event (the user selects a different number)
winningScore.addEventListener('change', function () {
    // getting the value the user selected
    upToScore = parseInt(this.value);
})

// resetting the values and game
resetBtn.addEventListener('click', () => {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;

    // updating the score display
    p1Display.textContent = 0;
    p2Display.textContent = 0;

    p1Display.classList.remove('has-text-success');
    p2Display.classList.remove('has-text-danger');

    p1Btn.disabled = false;
    p2Btn.disabled = false;
})
