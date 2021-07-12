const input = document.querySelector('.numberInput');
const para = document.querySelector('p');
const button = document.querySelector('button');

let computerHand;

function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        computerHand = 'rock';
        return computerHand;
    } else if (choice === 2) {
        computerHand = 'paper';
        return computerHand;
    } else {
        computerHand = 'scissors';
        return computerHand;
    }
}

const r = document.querySelector('.rock');
const p = document.querySelector('.paper');
const s = document.querySelector('.scissors');

let userHand;

r.onclick = function() {
    userHand = 'rock';

    computerPlay();

    if (computerHand == 'rock' && userHand == 'paper') {
        para.textContent = "Computer chose rock, you win";
    } else if (computerHand == 'paper' && userHand == 'rock') {
        para.textContent = "Computer chose paper, you lose"
    } else if (computerHand == 'rock' && userHand == 'scissors') {
        para.textContent = "Computer chose rock, you lose"
    } else if (computerHand == 'scissors' && userHand == 'rock') {
        para.textContent = "Computer chose scissors, you win"
    } else if (computerHand == 'scissors' && userHand == 'paper') {
        para.textContent = "Computer chose scissors, you lose"
    } else if (computerHand == 'paper' && userHand == 'scissors') {
        para.textContent = "Computer chose paper, you win"
    } else if (computerHand == 'paper' && userHand == 'paper') {
        para.textContent = "Computer chose paper, it's a tie!"
    } else if (computerHand == 'rock' && userHand == 'rock') {
        para.textContent = "Computer chose rock, it's a tie!"
    } else if (computerHand == 'scissors' && userHand == 'scissors') {
        para.textContent = "Computer chose scissors, it's a tie!"
    } else
        para.textContent = "Please enter rock, paper, or scissors"
}


p.onclick = function() {
    userHand = 'paper';

    computerPlay();

    if (computerHand == 'rock' && userHand == 'paper') {
        para.textContent = "Computer chose rock, you win";
    } else if (computerHand == 'paper' && userHand == 'rock') {
        para.textContent = "Computer chose paper, you lose"
    } else if (computerHand == 'rock' && userHand == 'scissors') {
        para.textContent = "Computer chose rock, you lose"
    } else if (computerHand == 'scissors' && userHand == 'rock') {
        para.textContent = "Computer chose scissors, you win"
    } else if (computerHand == 'scissors' && userHand == 'paper') {
        para.textContent = "Computer chose scissors, you lose"
    } else if (computerHand == 'paper' && userHand == 'scissors') {
        para.textContent = "Computer chose paper, you win"
    } else if (computerHand == 'paper' && userHand == 'paper') {
        para.textContent = "Computer chose paper, it's a tie!"
    } else if (computerHand == 'rock' && userHand == 'rock') {
        para.textContent = "Computer chose rock, it's a tie!"
    } else if (computerHand == 'scissors' && userHand == 'scissors') {
        para.textContent = "Computer chose scissors, it's a tie!"
    } else
        para.textContent = "Please enter rock, paper, or scissors"
}


s.onclick = function() {
    userHand = 'scissors';

    computerPlay();

    if (computerHand == 'rock' && userHand == 'paper') {
        para.textContent = "Computer chose rock, you win";
    } else if (computerHand == 'paper' && userHand == 'rock') {
        para.textContent = "Computer chose paper, you lose"
    } else if (computerHand == 'rock' && userHand == 'scissors') {
        para.textContent = "Computer chose rock, you lose"
    } else if (computerHand == 'scissors' && userHand == 'rock') {
        para.textContent = "Computer chose scissors, you win"
    } else if (computerHand == 'scissors' && userHand == 'paper') {
        para.textContent = "Computer chose scissors, you lose"
    } else if (computerHand == 'paper' && userHand == 'scissors') {
        para.textContent = "Computer chose paper, you win"
    } else if (computerHand == 'paper' && userHand == 'paper') {
        para.textContent = "Computer chose paper, it's a tie!"
    } else if (computerHand == 'rock' && userHand == 'rock') {
        para.textContent = "Computer chose rock, it's a tie!"
    } else if (computerHand == 'scissors' && userHand == 'scissors') {
        para.textContent = "Computer chose scissors, it's a tie!"
    } else
        para.textContent = "Please enter rock, paper, or scissors"
}
