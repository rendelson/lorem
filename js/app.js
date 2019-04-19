/*
 * Create a list that holds all of your cards
 */
let card = document.getElementsByClassName("card");
let cards = [...card]

//variaveis para o movimento

let moves = 0;
let counter = document.querySelector(".moves");

let matchedCard = document.getElementsByClassName("match");

let closeicon = document.querySelector(".close");

//cartas no jogo
const deck = document.getElementById("deck");
var openedCards = [];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//começar o jogo e embraralhar
document.body.onload = startGame();

function startGame(){
    // embaralhar
    cards = shuffle(cards);
    // remove classes das cartas para adicionar com seletor toggle
    for (var i = 0; i < 16; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
    //zeando movimentos
    moves = 0;
    conter.innerHTML = moves;
    //zerando o tempo
    second = 0;
    minute = 0;
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "o mins 0 secs";
    clearInterval(interval);
}

//mostrar as cartas removento e adicionando classes com toggle
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

//matched e unmatched
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};

//quando as cartas são iguais
function matched(){
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("show", "open", "no-event");
    openedCards[1].classList.remove("show", "open", "no-event");
    openedCards = [];
}

//quando as cartas não são iguais
function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "no-event","unmatched");
        openedCards[1].classList.remove("show", "open", "no-event","unmatched");
        enable();
        openedCards = [];
    },500);
}


//desabilitar
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

//abrir e desabilitar cartas compativeis
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove("disabled");
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}



//contar movimentos
  function moveConter(){
      moves++;
      counter.innerHTML = moves;
      if(moves == 1){
          second = 0;
          minute = 0;
          hour = 0;
          startTime();
  };

//contar tempo
var second = 0, minute = 0; hour = 0;
var time = document.querySelector(".timer");
var interval;
function startTimer(){
      interval = setInterval(function(){
          timer.innerHTML = minute+"mins "+second+"secs";
          second++;
          if(second == 60){
                minute++;
                second=0;
          }
          if(minute == 60){
            hour++;
            minute = 0;
          }
      }, 2000);
}


// add events
for (var i = 0; i < 16; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
};

//jogar novamente

function jogarNovamente(){
    modal.classList.remove("show");
    startGame();
}



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
//debug pesquisa
{}};
