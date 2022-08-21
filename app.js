//player object
const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2display')
}

const resetBtn = document.querySelector('#reset');
const winningScore = document.querySelector('#playto');
let upToScore = 0;
let isGameOver = false;

//passing in two objects
function updateScores(player, opponent) {
    // if the isGameOver is not true increase the score by 1
    if (!isGameOver) {
        player.score += 1;
        // if the score is equal to the selected winning score turn isGameover to true
        if (player.score === upToScore) {
            isGameOver = true;
            //changing the score colours when game over
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            //disabling buttons
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
    //edit the score display
    player.display.textContent = `${player.score}`; 
}


p1.button.addEventListener('click', () => {
    updateScores(p1,p2);
})
p2.button.addEventListener('click', () => {
    updateScores(p2,p1);
})

// checking if there's a change of event (the user selects a different number)
winningScore.addEventListener('change', function () {
    // getting the value the user selected
    upToScore = parseInt(this.value);
})

// resetting the values and game
resetBtn.addEventListener('click', () => {
    isGameOver = false;
    //for every player object
    for(let p of [p1, p2]) {
        p.score = 0;
        // updating the score display, removing text colour & enabling buttons 
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
})
