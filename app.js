const p1Display = document.querySelector('#p1display');
const p2Display = document.querySelector('#p2display');
const p1Btn = document.querySelector('#p1button');
const p2Btn = document.querySelector('#p2button');
const resetBtn = document.querySelector('#reset');
const winningScore = document.querySelector('#playto');

p1Score = 0;
p2Score = 0;
upToScore = 0;
isGameOver = false;

p1Btn.addEventListener('click', () => {
    // if the isGameOver is true increase the score by 1
    if (!isGameOver) {
        p1Score += 1;
        // if the score is equal to the selected winning score turn 
        if (p1Score === upToScore) {
            isGameOver = true;
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
        }
    }
    // edit the score display
    p2Display.textContent = `${p2Score}`; 
})

// checking if there's a change of event (the user selects a different number)
winningScore.addEventListener('change', () => {
    upToScore = parseInt(winningScore.value);
})

// resetting the values and game
resetBtn.addEventListener('click', () => {
    p1Score = 0;
    p2Score = 0;

    p1Display.textContent = `${p1Score}`;
    p2Display.textContent = `${p2Score}`;

    isGameOver = false;
})
