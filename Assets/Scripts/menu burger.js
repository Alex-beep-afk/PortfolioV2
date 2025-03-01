const btnburger = document.querySelector('.navbar-burger');
const navlist = document.querySelector('.navbar-list');
btnburger.addEventListener('click', () => {
    btnburger.classList.toggle('open');
    navlist.classList.toggle('open');

});
