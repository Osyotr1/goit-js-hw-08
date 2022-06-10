const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.feedback-form input');
const inputText = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
inputEmail.addEventListener('input', onEmailChange);
inputText.addEventListener('input', onTextChange);

const STORAGE_KEY = "feedback-form-state";

const inputElements = {};

emailFormFill();
// textFormFill();

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(inputElements);
};


function onEmailChange(event) {
    inputElements.email = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputElements));
};

function onTextChange(event) {
    inputElements.message = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputElements));
};

function emailFormFill() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedMessage = JSON.parse(savedMessage);

    if (parsedMessage.message) {
        console.log(parsedMessage);
        inputText.value = parsedMessage.message;
        return
    };

    if (parsedMessage.email) {
        console.log(parsedMessage);
        inputEmail.value = parsedMessage.email;
        return
    };

    
};   

// function textFormFill() {
//     const savedMessage = localStorage.getItem("feedback-form-state");
//     const parsedMessage = JSON.parse(savedMessage);
//     if (parsedMessage.message) {
//         console.log(parsedMessage);
//         inputText.value = parsedMessage.message;
//     }
// };   






