const gameBoard = document.querySelector("#game");
let cards = document.querySelectorAll(".card");
const startOver = document.querySelector("#startOver");

for (let check of cards){
    if (check.classList.contains("down")){
        check.innerText= "?";
    }
    if (check.classList.contains("flipped")){
        check.innerText= '';
    }
}

gameBoard.addEventListener("click", function(e){
    e.target.classList.remove("down");
    e.target.classList.add("flipped");
})

startOver.addEventListener("click", function(e){ 
    e.preventDefault();
    for (card of cards){
        if (card.classList.contains("flipped")){
            card.classList.remove("flipped");
            card.classList.add("down");
        }
    }
})