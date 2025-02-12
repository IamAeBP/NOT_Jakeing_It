// Define a deck of 52 cards
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

function drawCard() {
    // Generate a random card
    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomRankIndex = Math.floor(Math.random() * ranks.length);

    const card = ranks[randomRankIndex] + ' of ' + suits[randomSuitIndex];

    // Display the result in the HTML
    const cardDisplay = document.getElementById('cardDisplay');
    cardDisplay.textContent = card;
}