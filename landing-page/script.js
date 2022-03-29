
/////////////     BURGER-HEADER        /////////////////


let burgerBtm = document.querySelector('.burger-btm');
let burgerMenu = document.querySelector('.burger-menu');


burgerBtm.addEventListener('click', event => {
    burgerMenu.classList.toggle('hidden');
})