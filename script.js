document.addEventListener('DOMContentLoaded', () => {
  const scoreEl = document.getElementById('score-value');
  const bestEl = document.getElementById('best-value');
  const newGameBtn = document.getElementById('new-game');
  const tilesEl = document.getElementById('tile-container');
  const overlayEl = document.getElementById('overlay');
  const overlayMsgEl = document.getElementById('overlay-message');
  const tryAgainBtn = document.getElementById('try-again');

  scoreEl.textContent = '0';
  bestEl.textContent = localStorage.getItem('bestScore2048') || '0';

  // Placeholder scaffold; logic will be implemented next
  newGameBtn.addEventListener('click', () => {
    overlayEl.classList.add('hidden');
    tilesEl.innerHTML = '';
    scoreEl.textContent = '0';
  });
  tryAgainBtn.addEventListener('click', () => newGameBtn.click());
});
