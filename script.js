/* --- LÓGICA DO MODO ESCURO --- */
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDarkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});

/* --- LÓGICA DO JOGO DA MEMÓRIA --- */
const icons = ['🌱', '☀️', '💧', '🐝', '🚜', '🌲'];
let cardsData = [...icons, ...icons];
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let attempts = 0;
let matchedPairs = 0;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function initGame() {
    const board = document.getElementById('memory-board');
    board.innerHTML = '';
    cardsData = shuffle([...icons, ...icons]);
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
    attempts = 0;
    matchedPairs = 0;
    document.getElementById('game-status').textContent = 'Tentativas: 0';

    cardsData.forEach((icon) => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.icon = icon;
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard || this === firstCard || this.classList.contains('matched')) return;

    this.classList.add('flipped');
    this.textContent = this.dataset.icon;

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    attempts++;
    document.getElementById('game-status').textContent = `Tentativas: ${attempts}`;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.icon === secondCard.dataset.icon;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    matchedPairs++;

    resetBoard();

    if (matchedPairs === icons.length) {
        document.getElementById('game-status').textContent = `🎉 Parabéns! Você venceu em ${attempts} tentativas!`;
    }
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.textContent = '';
        secondCard.textContent = '';
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Inicializa o jogo ao carregar a página
initGame();
