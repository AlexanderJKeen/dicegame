const text = document.getElementById('text');
const image = document.getElementById('roll1')
const image1 = document.getElementById('roll2')
const name1 = document.getElementById('play1')
const name2 = document.getElementById('play2')
const resetButton = document.getElementById('resetButton')
let total1 = 0
let total2 = 0
let images = [`it.png`, `dice2.png`, `dice3.png`, `dice4.png`, `dice5.png`, `dice6.png`]
const play1roll = document.getElementById('play1Button')
const play2roll = document.getElementById('play2Button')
const score1 = document.getElementById('score-1')
const score2 = document.getElementById('score-2')
play2roll.disabled = true;

const sound = new Audio()
const rollDice1 = () => {
    let random = Math.floor(Math.random() * 6 + 1)
    image.src = `./img/${images[random - 1]}`
    score1.innerHTML = total1 += random
    if (random == 1) {
        text.innerHTML = "YOU LOSER!"
        total1 = 0;
        sound.src = `./loser.wav`
        sound.play()
        play1Button.disabled = true;
        play2Button.disabled = true;
    }

    if (play1roll.disabled == false) {
        play1roll.disabled = true
        play2roll.disabled = false
    }

    if (total1 >= 21) {
        text.innerHTML = "Player 1  WINS!!!"
        score1.innerHTML = 0;
        total1 = 0;
        play1roll.disabled = true;
        play2roll.disabled = true;
    }

}


const rollDice2 = () => {
    let random = Math.floor(Math.random() * 6 + 1)
    image1.src = `./img/${images[random - 1]}`
    score2.innerHTML = total2 += random
    if (random == 1) {
        text.innerHTML = "YOU LOSER!"
        score2.innerHTML = 0;
        sound.src = `./loser.wav`
        sound.play()
        play1Button.disabled = true;
        play2Button.disabled = true;

    }
    if (play2roll.disabled == false) {
        play1roll.disabled = false
        play2roll.disabled = true
    } 


    if (total2 >= 21) {
        text.innerHTML = "Player 2 WINS!!!"
        score2 = 0;
        sound.src = ``
        sound.play()
        play1Button.disable = true;
        play2Button.disable = true;


    }

}

play1roll.addEventListener('click', () => {
    rollDice1()
})
play2roll.addEventListener('click', () => {
    rollDice2()
})

resetButton.addEventListener("click", () => {
    sound.pause();
    text.innerHTML = "Ben's Dice";
    image.src = "";
    image1.src = "";
    score1.textContent = "0";
    score2.textContent = "0";
    play1Button.disable = true;
    play2Button.disable = true;

})