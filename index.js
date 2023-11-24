let sum;
let cardArr = [];

let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector(".cards");
let newEl = document.querySelector("#new-btn");
let playerEl = document.getElementById("player-id");
sumEl.textContent = "Sum: ";

let player = {
    name: "Harshit", chips: "343"
}

playerEl.textContent = player.name + ":  $" + player.chips

function startGame() {
    isAlive = true;
    cardArr = [getRandom(), getRandom()];
    sum = cardArr[0] + cardArr[1];
    renderGame();
}

function getRandom() {
    let a = Math.floor(Math.random() * 13) + 1;
    if (a === 1)
        return 11;
    else if (a === 11 || a === 12 || a === 13)
        return 10;
    else
        return a;
}
function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cardArr.length; i++)
        cardsEl.textContent += cardArr[i] + " ";

    if (sum < 21) {
        message = "Do you want to draw a new card?";
    }
    else if (sum == 21) {
        message = "You've got BlackJack"
        hasBlackjack = true;
    }
    else {
        message = "You are out of the game";
        isAlive = false;
    }

    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackjack == false) {
        let thirdCard = getRandom();
        sum += thirdCard;
        cardArr.push(thirdCard);
        renderGame();
    }
}