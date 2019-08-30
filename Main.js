const text = document.getElementById('text');
const image = document.getElementsByTagName('img')

let total1 = 0
let total2 = 0
let images = [`dice1.png`, `dice2.png`, `dice3.png`, `dice4.png`, `dice5.png`, `dice6.png`]
const play1roll = document.getElementById('play1')
const play2roll = document.getElementById('play2')
const score1 = document.getElementById('score-1')
const score2 = document.getElementById('score-2')

const rollDice1 = () => {
    let random = Math.floor(Math.random() * 6 + 1)
    images.src = `./img/${images[random - 1]}`
    score1.innerHTML = total1 += random
    if (random == 1) {
        text.innerHTML = "YOU LOSER!"
        total1 = 0;
    }
    if (total1 >= 21) {
        text.innerHTML = "Player 1  WINS!!!"
        score1.innerHTML = 0;
        total1 = 0;
    }

}
// const rollDice2 = () => {
//     let random = Math.floor(Math.random() * 6 + 1)
//     image.src = `./img/${images[random - 1]}`
//     score2.innerHTML = total2 += random
//     if (random == 1) {
//         text.innerHTML = "YOU LOSER!"
//         score2.innerHTML = 0;
//         total2 = 0;
//     }
//     if (total2 >= 21) {
//         text.innerHTML = "Player 2 WINS!!!"
//         total2 = 0;
//     }

// }

 play1roll.addEventListener('click', () => {
    rollDice1()
})
// play2roll.addEventListener('click', () => {
//     rollDice2()
// })