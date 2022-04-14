const player1 = document.querySelector(".player1")
const player2 = document.querySelector(".player2")
const img1 = document.querySelector(".player1 img")
const img2 = document.querySelector(".player2 img")

const heading = document.querySelector(".container h1")


let n1 = Math.random();
n1 = n1*6;
n1 = Math.floor(n1) + 1;

let n2 = Math.random();
n2 = n2*6;
n2 = Math.floor(n2) + 1;

// console.log(img1.getAttribute("src"))
img1.setAttribute("src", `./images/dice${n1}.png`)
img2.setAttribute("src", `./images/dice${n2}.png`)

if (n1 > n2){
    heading.innerHTML = "🚩Player 1 Wins "
}else if(n1 < n2){
    heading.innerHTML = "Player 2 Wins🚩"
}else{
    heading.innerHTML = "🚩Tie🚩"
}