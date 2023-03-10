
var hole = document.getElementById("hole")
var game = document.getElementById("game")
var text = document.getElementById("text")
var result = document.getElementById("result")

var jumping = 0;
var score = 0
hole.addEventListener("animationiteration", Ranhole)

function Ranhole() {
    var random = -((Math.random() * 350) + 150)
    document.getElementById("naa").innerHTML = random
    hole.style.top = random + "px"
    console.log(random);
    score++
}

var fall = setInterval(function () {
    var birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if (jumping == 0) {
        bird.style.top = (birdtop + 2) + "px"
    }
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var htop = (500 + holeTop)

    console.log(holeTop)
    console.log(htop);

    if ((birdtop > 450) || (blockleft < 50) && (birdtop < htop) || ( birdtop < holeTop + 100)) {
        result.style.display = "block"
        text.innerHTML = `Your final score is :${score}`
        game.style.display = "none"

    }

    // if ((birdtop > 450) || ((blockleft < -50)) && (blockleft > -50) && ((birdtop < htop) || (birdtop > htop + 100)))
}, 10)

window.addEventListener("keydown", hop)
function hop() {
    jumping = 1
    var birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if (birdtop > 6) {
        bird.style.top = (birdtop - 60) + "px";
    }
    setTimeout(() => {
        jumping = 0
    }, 100);
}
