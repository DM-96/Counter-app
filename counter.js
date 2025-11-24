// Valore iniziale del counter
let counter = 0;

// Creazione del contenitore del counter
const container = document.createElement("div");
container.id = "counter-container";

// Valore visualizzato
const display = document.createElement("span");
display.id = "display";
display.textContent = counter;

// Pulsanti + e -
const incrementButton = document.createElement("button");
incrementButton.textContent = "+";

const decrementButton = document.createElement("button");
decrementButton.textContent = "−";

// Appendiamo elementi al contenitore
container.appendChild(decrementButton);
container.appendChild(display);
container.appendChild(incrementButton);

// Appendiamo il contenitore al body
document.body.appendChild(container);

// Funzione per il display
function updateDisplay() {
    display.textContent = counter;
}

// Event listener per incrementare
incrementButton.addEventListener("click", function() {
    counter++;
    updateDisplay();
});

// Event listener per decrementare
decrementButton.addEventListener("click", function() {
    counter--;
    updateDisplay();
});
