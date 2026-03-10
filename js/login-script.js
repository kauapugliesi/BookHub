const email = document.querySelector("#email");
const password = document.querySelector("#password");
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


registerForm.addEventListener("submit", function(event) {
    
    event.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;

    const isValidEmail = validateEmail(emailValue);
    const isValidPassword = validatePassword(passwordValue);

    if (!isValidEmail){
        resultMessage.textContent = "Email inválido !";
        resultMessage.style.display = "block";
        resultMessage.style.color = "red"
    }else if (!isValidPassword) {
        resultMessage.textContent = "Senha inválida !";
        resultMessage.style.display = "block";
        resultMessage.style.color = "red"

    }else{
        registerForm.submit();
    }

});