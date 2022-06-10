import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.feedback-form input');
const inputText = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

const STORAGE_KEY = "feedback-form-state";


checksLocalStorage();

function onFormInput(event) {
    const formData = localStorage.getItem(STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(STORAGE_KEY))
    : {};

    formData[event.target.name] = event.target.value
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}

function checksLocalStorage() {
  const objFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (objFormData) {
    form.elements.email.value = objFormData.email || '';
    form.elements.message.value = objFormData.message || '';
  }
}

// localStorage.clear()