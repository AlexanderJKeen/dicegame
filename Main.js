const text = document.getElementById('text');
const image = document.getElementById('roll1')
const image1 = document.getElementById('roll2')

let total1 = 0
let total2 = 0
let images = [`lost.jpeg`, `dice2.png`, `dice3.png`, `dice4.png`, `dice5.png`, `dice6.png`]
const play1roll = document.getElementById('play1')
const play2roll = document.getElementById('play2')
const score1 = document.getElementById('score-1')
const score2 = document.getElementById('score-2')
const sound = new Audio()
document.getElementsById('play1').disable = true
const rollDice1 = () => {
    let random = Math.floor(Math.random() * 6 + 1)
    image.src = `./img/${images[random - 1]}`
    score1.innerHTML = total1 += random
    if (random == 1) {
        text.innerHTML = "YOU LOSER!"
        total1 = 0;
        sound.src = `./loser.wav`
        sound.play()
        
        if(play1 === true){
            play1.disable = false
            play2.disable = true
        }else if (play1 === false){
            play1.disable = true
            play2.disable = false
        }else{
            play1.disable = true
            play2.disable = true
        }
        
    }
    if (total1 >= 21) {
        text.innerHTML = "Player 1  WINS!!!"
        score1.innerHTML = 0;
        total1 = 0;
    }

}
const rollDice2 = () => {
    let random = Math.floor(Math.random() * 6 + 1)
    image1.src = `./img/${images[random - 1]}`
    score2.innerHTML = total2 += random
    if (random == 1) {
        text.innerHTML = "YOU LOSER! Press q to restart"
        score2.innerHTML = 0;
        total2 = 0;
        sound.src = `./loser.wav`
        sound.play()
        
    }
    if (total2 >= 21) {
        text.innerHTML = "Player 2 WINS!!! press q to restart"
        total2 = 0;
        
        
    }

}

 play1roll.addEventListener('click', () => {
     rollDice1()  
})
play2roll.addEventListener('click', () => {
    rollDice2()   
})

document.addEventListener("keypress", event => {
    switch(event.key){
        case "q":
            sound.pause()
            text.innerHTML = "THIS TOOK 2 MINUTES"
            

        break;
    }


})