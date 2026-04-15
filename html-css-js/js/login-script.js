const email = document.querySelector("#email");
const password = document.querySelector("#password");
const resultMessage = document.querySelector("#result-message");
const loginForm = document.querySelector("#login-form");

const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};

const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
};

loginForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    const isValidEmail = validateEmail(emailValue);
    const isValidPassword = validatePassword(passwordValue);

    if (!isValidEmail) {
        resultMessage.textContent = "Email inválido!";
        resultMessage.style.display = "block";
        resultMessage.style.color = "red";
        return;
    }

    if (!isValidPassword) {
        resultMessage.textContent = "Senha inválida!";
        resultMessage.style.display = "block";
        resultMessage.style.color = "red";
        return;
    }

    const userData = {
        email: emailValue,
        password: passwordValue
    };

    try {
        const response = await fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const message = await response.text();

        resultMessage.textContent = message;
        resultMessage.style.display = "block";

        if (response.ok && message.toLowerCase().includes("sucesso")) {
            resultMessage.style.color = "green";

            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000);
        } else {
            resultMessage.style.color = "red";
        }

    } catch (error) {
        resultMessage.textContent = "Erro ao conectar com o servidor!";
        resultMessage.style.display = "block";
        resultMessage.style.color = "red";
    }
});