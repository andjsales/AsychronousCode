// Every time you click the button, display a new card, until there are no cards left in the deck

let deckId;
const cardContainer = document.getElementById('card-container');
const drawCardButton = document.getElementById('draw-card');

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
    .then(response => response.json())
    .then(data => {
        deckId = data.deck_id;
        drawCardButton.addEventListener('click', drawCard);
    });

function drawCard() {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(response => response.json())
        .then(data => {
            if (data.cards.length > 0) {
                let card = data.cards[0];
                cardContainer.innerHTML += `<p>${card.value} of ${card.suit}</p>`;
            } else {
                drawCardButton.disabled = true;
                cardContainer.innerHTML += `<p>No more cards in the deck!</p>`;
            }
        });
}
