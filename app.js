const gameBoard = document.querySelector("#game");
const cards = document.querySelectorAll(".card");
let flippedCards = document.querySelectorAll(".flipped");
const startOver = document.querySelector("#startOver");
const cardList = ["&#128049", "&#128049", "&#128054", "&#128054", "&#129418", "&#129418", "&#129437", "&#129437", "&#128052", "&#128052", "&#128045", "&#128045", "&#128048", "&#128048", "&#128035", "&#128035", "&#129417", "&#129417", "&#128013", "&#128013", "&#128030", "&#128030", "&#128032", "&#128032"];

function shuffleCards (arr){
    let value;
    for (let i=arr.length-1; i >0; i--){
        const j = Math.floor(Math.random()*i+1);
       value = arr[i];
       arr[i]=arr[j];
       arr[j]=value;
    }
    return arr;
}


function setCardValues (){
    for (let i=0; i < flippedCards.length; i++){
        flippedCards[i].innerHTML=cardList[i];
    }
}

shuffleCards(cardList);

setCardValues();



startOver.addEventListener("click", function(e){ 
    e.preventDefault();
    shuffleCards(cardList);
    setCardValues();
    })

