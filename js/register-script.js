const email = document.querySelector("#email");
const password = document.querySelector("#password");
const name = document.querySelector("#name");
const resultMessage = document.querySelector("#result-message");
const registerForm = document.querySelector("#register-form");

const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};

const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
};

const validateName = (name) => {
    const regex = /^[A-Za-z]{3,}$/;
    return regex.test(name);
};


registerForm.addEventListener("submit", function(event) {
    
    event.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;
    const nameValue = name.value;

    const isValidEmail = validateEmail(emailValue);
    const isValidPassword = validatePassword(passwordValue);
    const isValidName = validateName(nameValue);

    if (!isValidEmail){
        resultMessage.textContent = "Email inválido !";
        resultMessage.style.color = "red"
    }else if (!isValidPassword) {
        resultMessage.textContent = "Senha inválida !";
        resultMessage.style.color = "red"

    }else if (!isValidName){
        resultMessage.textContent = "Nome inválido !";
        resultMessage.style.color = "red"
    }else{
        registerForm.submit();
    }

});

