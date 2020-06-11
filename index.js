//gsap = animations, autoAlpha = opacity in gsap, takes 0 seconds to render

gsap.to(['#playerRock','#playerPaper' , '#playerScissor', '#compRock', '#compPaper', '#compScissor'], 0, {autoAlpha: 0})



var playerPick = ""
var compPick = ""
var playerScore = 0
var compScore = 0
var drawScore = 0
var choices = ["rock", "paper", "scissor"]
var playerLabel = document.getElementById('playerScore')
var compLabel = document.getElementById('compScore')
var drawLabel = document.getElementById('drawScore')
var playerSide = document.getElementById('playerGame')
var compSide = document.getElementById('compGame')
var timeWait = 1000
var gameWait = 1000

function resetGame() {
    //gsap.to('#playerRock', 1, {autoAlpha: 0})
    gsap.to(['#playerRock','#playerPaper' , '#playerScissor', '#compRock', '#compPaper', '#compScissor'], 1, {autoAlpha: 0})
    gsap.fromTo(['#rock', '#paper', '#scissor'], 1, {autoAlpha: 0}, {autoAlpha: 1})
    playerSide.style.backgroundColor = 'white'
    compSide.style.backgroundColor = 'white'

}

function compPlay() {
    var random = Math.floor((Math.random() * 3))
    compPick = choices[random]

    // switch is the same as multiple if statements 
    switch (compPick) {
        case 'rock':
                gsap.fromTo('#compRock', 1, {autoAlpha: 0}, {autoAlpha: 1})
            break;
        case 'paper':
                gsap.fromTo('#compPaper', 1, {autoAlpha: 0}, {autoAlpha: 1})
            break;
        case 'scissor':
                gsap.fromTo('#compScissor', 1, {autoAlpha: 0}, {autoAlpha: 1})
            break;
    
        default:
            break;
    }
}

function determineWinner(pPick, cPick) {
    switch (pPick) {
        case "rock":
            switch (cPick) {
                case "rock":
                    drawScore = drawScore + 1
                    playerSide.style.backgroundColor = 'orange'
                    compSide.style.backgroundColor = 'orange'
                    setTimeout(() => {
                        window.alert('It is a draw')
                        gsap.fromTo(['#playerRock','#playerPaper' , '#playerScissor', '#compRock', '#compPaper', '#compScissor'], 0, {autoAlpha: 1}, {autoAlpha: 0})
                    }, timeWait);
                    
                    break;
                case "paper":
                    compScore = compScore + 1
                    playerSide.style.backgroundColor = 'blue'
                    compSide.style.backgroundColor = 'green'
                    setTimeout(() => {
                        window.alert('Computer wins')
                        gsap.fromTo(['#playerRock','#playerPaper' , '#playerScissor', '#compRock', '#compPaper', '#compScissor'], 0, {autoAlpha: 1}, {autoAlpha: 0})
                    }, timeWait);
                    break;
                case "scissor":
                    playerScore = playerScore + 1
                    playerSide.style.backgroundColor = 'green'
                    compSide.style.backgroundColor = 'blue'
                    setTimeout(() => {
                        window.alert('Player wins')
                        gsap.fromTo(['#playerRock','#playerPaper' , '#playerScissor', '#compRock', '#compPaper', '#compScissor'], 0, {autoAlpha: 1}, {autoAlpha: 0})
                    }, timeWait);
                    break;
                default:
                    break;
            }
        break;
        case "paper":
            switch (cPick) {
                case "rock":
                    playerScore = playerScore + 1
                    playerSide.style.backgroundColor = 'green'
                    compSide.style.backgroundColor = 'blue'
                    setTimeout(() => {
                        window.alert('Player wins')
                    }, timeWait);
                    break;
                case "paper":
                    drawScore = drawScore + 1
                    playerSide.style.backgroundColor = 'orange'
                    compSide.style.backgroundColor = 'orange'
                    setTimeout(() => {
                        window.alert('It is a draw')
                    }, timeWait);
                    break;
                case "scissor":
                    compScore = compScore + 1
                    playerSide.style.backgroundColor = 'blue'
                    compSide.style.backgroundColor = 'green'
                    setTimeout(() => {
                        window.alert('Computer wins')
                    }, timeWait);
                   
                    break;
                default:
                    break;
                }
        break;
        case "scissor":
            switch (cPick) {
                case "rock":
                    compScore = compScore + 1
                    playerSide.style.backgroundColor = 'blue'
                    compSide.style.backgroundColor = 'green'
                    setTimeout(() => {
                        window.alert('Computer wins')
                    }, timeWait);
                    break;
                case "paper":
                    playerScore = playerScore + 1
                    playerSide.style.backgroundColor = 'green'
                    compSide.style.backgroundColor = 'blue'
                    setTimeout(() => {
                        window.alert('Player wins')
                    }, timeWait);
                    
                    break;
                case "scissor":
                    drawScore = drawScore + 1
                    playerSide.style.backgroundColor = 'orange'
                    compSide.style.backgroundColor = 'orange'
                    setTimeout(() => {
                        window.alert('It is a draw')
                    }, timeWait);
                    
                    break;
                default:
                    break;
                        }
        break;
        default:
            break;
    
    }
}

function pickRock()  {
    playerPick = "rock"
    compPlay()
    gsap.to(['#rock', '#paper', '#scissor'], 0, {autoAlpha: 0})
    gsap.fromTo('#playerRock', 1, {autoAlpha:0}, {autoAlpha: 1})
    determineWinner(playerPick, compPick)
    playerLabel.innerHTML = playerScore
    compLabel.innerHTML = compScore
    drawLabel.innerHTML = drawScore
    setTimeout(() => {
        resetGame()
    }, gameWait);
    
}

function pickPaper() {
    playerPick = "paper"
    compPlay()
    gsap.to(['#rock', '#paper', '#scissor'], 0, {autoAlpha: 0})
    gsap.fromTo('#playerPaper', 1, {autoAlpha:0}, {autoAlpha: 1})
    determineWinner(playerPick, compPick)
    playerLabel.innerHTML = playerScore
    compLabel.innerHTML = compScore
    drawLabel.innerHTML = drawScore
    setTimeout(() => {
        resetGame()
    }, gameWait);
    
    
}

function pickScissor() {
    playerPick = "scissor"
    compPlay()
    gsap.to(['#rock', '#paper', '#scissor'], 0, {autoAlpha: 0})
    gsap.fromTo('#playerScissor', 1, {autoAlpha:0}, {autoAlpha: 1})
    determineWinner(playerPick, compPick)
    playerLabel.innerHTML = playerScore
    compLabel.innerHTML = compScore
    drawLabel.innerHTML = drawScore
    setTimeout(() => {
        resetGame()
    }, gameWait);
    
    
}

function end() {
    if (compScore > playerScore) {
        window.alert('Computer has won the game')
    }

    if (playerScore > compScore) {
        window.alert('Player has won the game')
    }

    if (playerScore == compScore) {
        window.alert('The game is a draw')
    }
    playerScore = 0
    compScore = 0
    drawScore = 0
    playerLabel.innerHTML = playerScore
    compLabel.innerHTML = compScore
    drawLabel.innerHTML = drawScore

}




