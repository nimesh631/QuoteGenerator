const quotes = {
    science: [
        "Science is a way of thinking much more than it is a body of knowledge. – Carl Sagan",
        "The important thing is to never stop questioning. – Albert Einstein",
        "Somewhere, something incredible is waiting to be known. – Carl Sagan",
        "Research is what I'm doing when I don't know what I'm doing. – Wernher von Braun"
    ],
    inspiration: [
        "The best way to get started is to quit talking and begin doing. – Walt Disney",
        "Don't let yesterday take up too much of today. – Will Rogers",
        "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
        "The harder you work for something, the greater you'll feel when you achieve it."
    ]
};

let currentCategory = 'science';
let currentIndex = 0;
let fontSize = 16;

const quoteText = document.getElementById('quoteText');
const categorySelect = document.getElementById('categorySelect');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');
const themeSwitch = document.getElementById('themeSwitch');
const increaseFont = document.getElementById('increaseFont');
const decreaseFont = document.getElementById('decreaseFont');

// display initial quote 
function displayQuote(){
    const categoryQuotes = quotes[currentCategory];
    quoteText.textContent = categoryQuotes[currentIndex];
}

categorySelect.addEventListener('change', ()=> {
    currentCategory = categorySelect.value;
    currentIndex = 0;
    displayQuote();
})

nextBtn.addEventListener('click',()=>{
    const categoryQuotes = quotes[currentCategory];
    currentIndex = (currentIndex + 1) % categoryQuotes.length;
    displayQuote();
})

prevBtn.addEventListener('click',()=>{
    const categoryQuotes = quotes[currentCategory];
    currentIndex = (currentIndex - 1 + categoryQuotes.length) %categoryQuotes.length;
    displayQuote();
})

randomBtn.addEventListener('click', ()=>{
    const categoryQuotes = quotes[currentCategory];
    currentIndex = Math.floor(Math.random() * categoryQuotes.length);
    displayQuote();
})

themeSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark',themeSwitch.checked);
});

increaseFont.addEventListener('click', ()=>{
    if(fontSize <28){
    fontSize +=2;
    quoteText.style.fontSize = `${fontSize}px`;
    }
});

decreaseFont.addEventListener('click', ()=>{
    if(fontSize > 12){
        fontSize -=2;
         quoteText.style.fontSize = `${fontSize}px`;
    }
});

displayQuote();
