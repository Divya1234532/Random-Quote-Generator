const quotes = [
    "Success starts with self-discipline.",
    "Dream big and dare to fail.",
    "Small steps every day matter.",
    "Stay consistent, not perfect.",
    "Believe in yourself."
];

function generateQuote() {

    const randomIndex = Math.floor(
        Math.random() * quotes.length
    );

    document.getElementById("quote").innerText =
        quotes[randomIndex];
}