let player = new Image()
let spike = new Image()
let background = new Image()

player.src = './images/cube.jpg'
spike.src = './images/spike.png'
background.src = './images/background.jpg'

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 512

background.width = window.innerWidth
background.height = window.innerHeight

let xPos = canvas.width / 5
let yPos = canvas.height / 1.3
let bgX = 0
let jumpState = false

let gravity = 0.5 // 9.8
let velY = 0 // yPos

setInterval (() => {
    ctx.drawImage(background, bgX, 0, canvas.width, canvas.height)
    ctx.drawImage(background, 1024 + bgX, 0, canvas.width, canvas.height)
    ctx.drawImage(player, xPos, yPos, 50, 50)
    bgX -= 4

    if (bgX <= -1024) bgX = 0

    

    if (jumpState) {
        yPos -= 7
        
        if (yPos <= canvas.height - 150) {
            jumpState = false
        }
    }
    else if (yPos  >= canvas.height - 50) {
        velY = 0
    } else {
        velY += gravity
        yPos += velY 
    }
    
}, 33)


canvas.addEventListener('click', () => {
    if (yPos >= canvas.height - 50) {
        jumpState = true
    }
})
