// Request a Single Card from a Newly Shuffled Deck
fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(response => response.json())
    .then(data => {
        let card = data.cards[0];
        console.log(`${card.value} of ${card.suit}`);
    })
    .catch(error => console.error('Error:', error));


// Draw Two Cards from the Same Deck
let deckId;

fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(response => response.json())
    .then(data => {
        deckId = data.deck_id;
        let firstCard = data.cards[0];
        console.log(`${firstCard.value} of ${firstCard.suit}`);
        return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    })
    .then(response => response.json())
    .then(data => {
        let secondCard = data.cards[0];
        console.log(`${secondCard.value} of ${secondCard.suit}`);
    })
    .catch(error => console.error('Error:', error));



