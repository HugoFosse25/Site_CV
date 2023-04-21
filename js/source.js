const nameForm = document.getElementById("name-form");
const emailForm = document.getElementById("email-form");
const subjectForm = document.getElementById("subject-form");
const messageForm = document.getElementById("message-form");
const submitMessage = document.getElementById("submit-message");
const sendBtnForm = document.getElementById("btn-form");

sendBtnForm.addEventListener("click", (Event) => {
    let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    Event.preventDefault();

    if(!nameForm.value || !emailForm.value || !messageForm.value || !subjectForm.value) { //Si un des champs est vide
        submitMessage.style.color = "#FF0000";
        submitMessage.innerHTML = "Veuillez remplir tout les champs"
    } else if(!emailFormat.test(emailForm.value)) {
        submitMessage.style.color = "#FF0000";
        submitMessage.innerHTML = "Veuillez rentrez une adresse mail valide"
    }else { //Formulaire OK

        submitMessage.innerHTML = null;

        const xhr = new XMLHttpRequest();
        const url = './serv/postmessage.php'
        const params = `&name=${nameForm.value}&email=${emailForm.value}&message=${messageForm.value}&subject=${subjectForm.value}`;

        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200) {
                nameForm.value=null;
                emailForm.value=null;
                messageForm.value=null;
                subjectForm.value=null;
                submitMessage.innerHTML = null;

                submitMessage.style.color = "#000000";
                submitMessage.innerHTML = "Message envoyé."
            }
        };
        xhr.send(params);
    }
})