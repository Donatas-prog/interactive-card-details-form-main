const form = document.getElementById('forma');
const inputNumber = document.getElementById('number');
const inputName = document.getElementById('name_input');
const inputMonth = document.getElementById('month_input');
const inputYear = document.getElementById('year_input');
const inputCvc = document.getElementById('cvc_input');
const cardNumber = document.getElementById('card_number');
const cardName = document.getElementById('card_name');
const cardMonth = document.getElementById('card_month');
const cardYear = document.getElementById('card_year');
const cardCvc = document.getElementById('cvc_card');
const thanks = document.getElementById('success_message');
const button = document.getElementById('submit_button');



const  handleSubmit = (e) =>  {
    e.preventDefault();
    if(!inputNumber.value) {
        inputNumber.classList.add('error');
        inputNumber.parentElement.classList.add('error_message');
    } else {
        inputNumber.classList.remove('error');
        inputNumber.parentElement.classList.remove('error_message');
        inputNumber.classList.add('success')
    }
    if(!inputName.value) {
        inputName.classList.add('error');
        inputName.parentElement.classList.add('error_message');
    } else {
        inputName.classList.remove('error');
        inputName.parentElement.classList.remove('error_message');
        inputName.classList.add('success');
    }
    if(!inputMonth.value) {
        inputMonth.classList.add('error');
        inputMonth.parentElement.classList.add('error_message');
    } else {
        inputMonth.classList.remove('error');
        inputMonth.parentElement.classList.remove('error_message');
        inputMonth.classList.add('success');
    }
    if(!inputYear.value) {
        inputYear.classList.add('error');
        inputYear.parentElement.classList.add('error_message');
    } else {
        inputYear.classList.remove('error');
        inputYear.parentElement.classList.remove('error_message');
        inputYear.classList.add('success');
    } 
    if(!inputCvc.value) {
        inputCvc.classList.add('error');
        inputCvc.parentElement.classList.add('error_message');
    } else {
        inputCvc.classList.remove('error');
        inputCvc.parentElement.classList.remove('error_message');
        inputCvc.classList.add('success');
    }
}
    
form.addEventListener('click', handleSubmit);
const validateEmail = (email) => {
    const regEx = /[\d{4}\s]/g;
    return regEx.match();
}


const submitBtn = () => {

if(inputName.value &&
    inputMonth.value &&
    inputYear.value &&
    inputCvc.value &&
    inputNumber.value.length === 16) {
        thanks.classList.remove('done');
        form.classList.add('hidden');
    }
}
button.addEventListener('click', submitBtn);

const displayNumber = (e) => {
    cardNumber.innerText = getGap(e.target.value);
}
const getGap = (s) => {
    return s.replace(/\d{4}(?=.)/g, '$& ');
}
const displayName = (e) => {
    cardName.innerText = e.target.value.toUpperCase();
}
const displayMonth = (e) => {
    cardMonth.innerText = e.target.value + ' /'
}
const displayYear = (e) => {
    cardYear.innerText = e.target.value;
}
const displayCvc = (e) => {
    cardCvc.innerText = e.target.value
}
inputNumber.addEventListener('keyup', displayNumber);
inputName.addEventListener('keyup', displayName);
inputMonth.addEventListener('keyup', displayMonth);
inputYear.addEventListener('keyup',displayYear);
inputCvc.addEventListener('keyup', displayCvc)


