const button = document.getElementById("btn")
const scoreSpan = document.getElementById("score")
let score = 0;

let clickable = true;
let difficulty = 500;

const updatePosition = () => {
    button.style.marginTop = 64 + Math.random()*(window.innerHeight *0.8)+"px";
    button.style.marginLeft = Math.random()*(window.innerWidth *0.9)+"px";
    clickable = true;
}

updatePosition();
button.addEventListener("click",() => {
    if(!clickable) return;
    clickable = false;
    score++;
    scoreSpan.innerText = score;
})

button.addEventListener("mouseenter", () => {
    setTimeout(() => {
        difficulty = 500 - 100*(score / 3);
        updatePosition();
    }, difficulty);
});