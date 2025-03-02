const btnburger = document.querySelector('.navbar-burger');
const navlist = document.querySelector('.navbar-list');
const lien = document.querySelectorAll('.navbar-list>li>a');
btnburger.addEventListener('click', () => {
    btnburger.classList.toggle('open');
    navlist.classList.toggle('open');

});
lien.forEach((li) => {
    li.addEventListener('click', () => {
        btnburger.classList.remove('open');
        navlist.classList.remove('open');
    });
});
