

const rollDice = document.querySelector("#roll-dice")
const diceImage = document.querySelector("#roll-dice-image")
const diceImageContainer = document.querySelector(".dice-image")
const reset = document.querySelector(".reset")
const hold = document.querySelector(".hold")
const section1 = document.querySelector(".player_1")
const section2 = document.querySelector(".player_2")


const current1 = document.querySelector(".current-1")
const current2 = document.querySelector(".current-2")
const score_1 = document.querySelector(".score-1")
const score_2 = document.querySelector(".score-2")
const image_list = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png']

let player_if = 1


rollDice.addEventListener('click', ()=> {
    let randomNumber = Math.trunc(Math.random() * 6) + 1
    console.log(randomNumber)
    if (randomNumber == 1) {
        if(player_if == 1) {
            section1.classList.remove("active")
            section2.classList.add("active")
            player_if = 2
            score_1.textContent = Number(score_1.textContent) + Number( current1.textContent)
            current1.textContent = 0
            score_2.textContent = Number(score_2.textContent) + Number( current2.textContent)
            current2.textContent = 0
        }
        else {
            section2.classList.remove("active")
            section1.classList.add("active")
            player_if = 1
            score_1.textContent = Number(score_1.textContent) + Number( current1.textContent)
            current1.textContent = 0
            score_2.textContent = Number(score_2.textContent) + Number( current2.textContent)
            current2.textContent = 0
        }
        diceImageContainer.classList.remove("hidden")
        diceImage.setAttribute("src", `${randomNumber}.png`)
    }
    else {
        if (player_if == 1){
            diceImageContainer.classList.remove("hidden")
            diceImage.setAttribute("src", `${randomNumber}.png`)
            current1.textContent = Number(current1.textContent) + randomNumber
        }
        if (player_if == 2) {
            diceImageContainer.classList.remove("hidden")
            diceImage.setAttribute("src", `${randomNumber}.png`)
            current2.textContent = Number(current2.textContent) + randomNumber
        }
    }
    
})


hold.addEventListener("click", () => {
    score_1.textContent = Number(score_1.textContent) + Number( current1.textContent)
    current1.textContent = 0
    score_2.textContent = Number(score_2.textContent) + Number( current2.textContent)
    current2.textContent = 0

    if (Number(score_1.textContent)>= 100) {
        console.log("message")
        section1.classList.remove("active")
        section1.classList.add("win")
        rollDice.setAttribute("disabled", '')
        hold.setAttribute("disabled", '')
    }
    if (Number(score_2.textContent)>= 100) {
        console.log("2dssssssssssssss")
        section2.classList.remove("active")
        section2.classList.add("win")
        rollDice.setAttribute("disabled", '')
        hold.setAttribute("disabled", '')
    }
})

reset.addEventListener("click", ()=> {
    player_if = 1
    current1.textContent = '0'
    diceImageContainer.classList.add("hidden")
    section1.classList.remove("win")
    section1.classList.add("active")
    section2.classList.remove("win")
    section2.classList.remove("active")
    score_1.textContent = '0'
    score_2.textContent = '0'
    rollDice.removeAttribute("disabled", "")
    hold.removeAttribute("disabled", "")
})