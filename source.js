const nameForm = document.getElementById("name-form");
const emailForm = document.getElementById("email-form");
const messageForm = document.getElementById("message-form");
const errorMessage = document.getElementById("error-message");

const sendBtnForm = document.getElementById("btn-form");

document.addEventListener("click", () => {
    if(errorMessage.value) {
        errorMessage.innerHTML = null;
    }
})

sendBtnForm.addEventListener("click", (Event) => {
    Event.preventDefault();

    if(!nameForm.value || !emailForm.value || !messageForm.value) { //Si un des champs est vide
        errorMessage.innerHTML = "Veuillez remplir tout les champs"
    } else {
        errorMessage.innerHTML = null;
    }
})