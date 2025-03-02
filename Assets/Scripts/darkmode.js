const cards = document.querySelectorAll('.card');
const body = document.querySelector('body');
const darkModeBtn = document.querySelector('.btn-darkmode');
const wrapper = document.querySelector('.wrapper');
const glitchWrapper = document.querySelector('.glitch-wrapper');
const input = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
function darkMode() {
    body.classList.toggle('darkmode');
    wrapper.classList.toggle('darkmode');
    glitchWrapper.classList.toggle('darkmode');
    textarea.classList.toggle('darkmode');
    input.forEach(input => input.classList.toggle('darkmode'));
    cards.forEach(card => card.classList.toggle('darkmode'));
    darkModeBtn.classList.toggle('darkmode');
    if (body.classList.contains('darkmode')) {
        darkModeBtn.textContent = 'Light Mode';
    } else {
        darkModeBtn.textContent = 'Dark Mode';
    }

}
darkModeBtn.addEventListener('click', () => {
   darkMode();
});