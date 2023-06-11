let wins = 0;
let loses = 0;
const choices = ["pierre", "caillou","ciseau"];
const gameStatus = document.getElementById('gameStatus');
const gameScore = document.getElementById('gameScore');
const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');

function runGame(userChoice){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    switch(userChoice + '_' + computerChoice){
        case 'papier_ciseau':
        case 'caillou_papier':
        case 'ciseau_caillou':
            loses += 1;
            gameStatus.innerHTML = `Me: ${userChoice} / C: ${computerChoice} -> C Wins`
            break;
        case 'papier_ciseau':
        case 'caillou_ciseau':
        case 'ciseau_papier':
            wins += 1;
            gameStatus.innerHTML = `Me: ${userChoice} / C: ${computerChoice} -> M Wins`
            break;
        case 'papier_papier':
        case 'caillou_caillou':
        case 'ciseau_ciseau':
            gameStatus.innerHTML = `Me: ${userChoice} / C: ${computerChoice} -> Egalité`
            break;
    }
    gameScore.innerHTML = `Me: ${wins} / Co: ${loses}`;
}

paper.addEventListener('click', () => runGame("papier"));
rock.addEventListener('click', () => runGame("caillou"));
scissors.addEventListener('click', () => runGame("ciseau"));