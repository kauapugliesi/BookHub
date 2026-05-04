const resultMessage = document.querySelector("#result-message");
const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", asynv(event) => {
event.preventDefault()});

const user = {
    name: document.querySelector("#name").value,
    nickname: document.querySelector("#nickname").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password"),
};