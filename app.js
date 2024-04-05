const gameBoard = document.querySelector("#game");
const cards = document.querySelectorAll(".card");
let flippedCards = document.querySelectorAll(".flipped");
const startOver = document.querySelector("#startOver");
const cardList = ["&#128049", "&#128049", "&#128054", "&#128054", "&#129418", "&#129418", "&#129437", "&#129437", "&#128052", "&#128052", "&#128045", "&#128045", "&#128048", "&#128048", "&#128035", "&#128035", "&#129417", "&#129417", "&#128013", "&#128013", "&#128030", "&#128030", "&#128032", "&#128032"];
const currentScore = document.querySelector("#currentScore");
const bestScore = document.querySelector("#currentBest");
let score = 0;
let cardPair = [];
let cardPairSource = [];
let cardPairFound = [];



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

function setBestScore(){
if (localStorage.getItem("lowestScore") !== null){
    bestScore.innerText = parseFloat(localStorage.getItem("lowestScore"));
}
}

setBestScore();

shuffleCards(cardList);

setCardValues();

gameBoard.addEventListener("click", function (e){
    console.log(e.target);
})

gameBoard.addEventListener("click", function (e){
    if (e.target.classList.contains("flipped") || !e.target.classList.contains("card") || cardPair.length === 2){
        return null;
    } else if (e.target.classList.contains("down")){
        e.target.parentElement.classList.add("flip");
        cardPair.push(e.target.nextElementSibling.innerHTML);
        cardPairSource.push(e.target.parentElement);
    }
    else {
        e.target.classList.add("flip");
        cardPair.push(e.target.lastElementChild.innerHTML);
        cardPairSource.push(e.target);
    }
})

gameBoard.addEventListener("click", function(){
    if (cardPair.length === 2){
        if (cardPair[0] !== cardPair[1]){
            setTimeout(function (){
                for (let card of cardPairSource){
                    card.classList.remove("flip");
                    cardPair = [];
                    cardPairSource = [];
                }
            }, 1000);
        } else {
            cardPairFound.push([cardPair[0], cardPair[1]])
            cardPair = [];
            cardPairSource = [];
            if (cardPairFound.length === (cardList.length)/2){
                if (currentScore.innerText +1 < bestScore.innerText || bestScore.innerText === ''){
                    bestScore.innerText = parseFloat(currentScore.innerText)+1;
                    localStorage.removeItem("lowestScore");
                    localStorage.setItem("lowestScore", bestScore.innerText);
                }
                setTimeout(function(){
                    alert("You win!");}, 750);
            }
        }
    }
})

gameBoard.addEventListener("click", function(e){
    if (e.target.classList.contains("flipped") || !e.target.classList.contains("card")){
        score += 0;
    } else {
        score += 1;
    }
    currentScore.innerText = score;
})


startOver.addEventListener("click", function(e){ 
    e.preventDefault();
    for (let card of cards){
        if (card.classList.contains("flip")){
            card.classList.remove("flip");
        }
    }
    cardPairFound = [];
    shuffleCards(cardList);
    setCardValues();
    score=0;
    currentScore.innerText=score;
    })

