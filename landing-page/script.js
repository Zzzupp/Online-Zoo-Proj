
/////////////     BURGER        /////////////////


const burgerBtm = document.querySelector('.burger-btm');
const burgerMenu = document.querySelector('.burger-menu');
const logInButton = document.querySelector('.log-in');
const burgerLoginMenu = document.querySelector('.burger-login')
const burgerRegistration = document.querySelector('.burger-registration');
const signUp = document.querySelector('.sign-up');
const logInSwitcher = document.querySelector('.log-in-btn');
const createAccountSwitcher = document.querySelector('.create-account-btn');
const leaveFeedback = document.querySelector('.leave-feedback');
const leaveFeedbackBurger = document.querySelector('.leave-feedback-burger');
const contactBurgerTrigger = document.querySelector('.contact-burger-trigger');
const contactUsBurger = document.querySelector('.contact-us-burger');
const crossFeedback = document.querySelector('.feedback-burger-del');
const donatesBurgerTrigger = document.querySelector('.donates');
const donatesBurgerMenu = document.querySelector('.donate-burger-menu');
const perBtns = document.querySelectorAll('.per-btn');
const period = document.querySelector('.periods');
const amount = document.querySelector('.amount');
const amountBtns = document.querySelectorAll('.amount-btn');
crossFeedback.addEventListener('click', event =>{
    leaveFeedbackBurger.classList.add('disabled');
})
period.addEventListener('click', event => {
    event.preventDefault();
    perBtns.forEach(btn => {
        btn.classList.remove('active-button');
    })
    let selectBtn = event.target;
    selectBtn.classList.add('active-button');
})
amount.addEventListener('click', event => {
    event.preventDefault();
    amountBtns.forEach(btn => {
        btn.classList.remove('active-button');
    })
    let selectBtn = event.target;
    selectBtn.classList.add('active-button');
})

// perBtns.forEach(btn => {
    
//     btn.addEventListener('click', event => {
//         event.preventDefault();
//         btn.classList.add('active-button');
//     })
// })




donatesBurgerTrigger.addEventListener('click', (event) =>{
    donatesBurgerMenu.classList.remove('disabled');
})


contactBurgerTrigger.addEventListener('click', event => {
    contactUsBurger.classList.remove('disabled');
})

leaveFeedback.addEventListener('click', (event) => {
    leaveFeedbackBurger.classList.remove('disabled');
})

createAccountSwitcher.addEventListener('click', event =>{
    burgerLoginMenu.classList.add('disabled');
    burgerRegistration.classList.remove('disabled');
})
logInSwitcher.addEventListener('click', event =>{
    burgerLoginMenu.classList.remove('disabled');
    burgerRegistration.classList.add('disabled');
})


logInButton.addEventListener('click', (event) =>{
    burgerLoginMenu.classList.toggle('disabled');
})

signUp.addEventListener('click', (event) =>{
    burgerRegistration.classList.toggle('disabled');
})

window.addEventListener('click', (event) => {
    if(event.target == burgerLoginMenu){
        burgerLoginMenu.classList.add('disabled');
    } else if(event.target == burgerRegistration){
        burgerRegistration.classList.add('disabled');
    } else if(event.target == leaveFeedbackBurger){
        leaveFeedbackBurger.classList.add('disabled');
    } else if(event.target == contactUsBurger){
        contactUsBurger.classList.add('disabled');
    } else if(event.target == donatesBurgerMenu){
        donatesBurgerMenu.classList.add('disabled');
    }
    
})

burgerBtm.addEventListener('click', (event) => {
    burgerMenu.classList.toggle('hidden');
})