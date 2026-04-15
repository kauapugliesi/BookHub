const email = document.querySelector("#email");
const password = document.querySelector("#password");
const name = document.querySelector("#name");
const nickname = document.querySelector("#usuario");
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
    const regex = /^[A-Za-zÀ-ÿ\s]{3,}$/;
    return regex.test(name);
};

const validateNickname = (nickname) => {
    return nickname.trim().length >= 3;
};

registerForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const nameValue = name.value.trim();
    const nicknameValue = nickname.value.trim();

    const isValidEmail = validateEmail(emailValue);
    const isValidPassword = validatePassword(passwordValue);
    const isValidName = validateName(nameValue);
    const isValidNickname = validateNickname(nicknameValue);

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

    if (!isValidName) {
        resultMessage.textContent = "Nome inválido!";
        resultMessage.style.display = "block";
        resultMessage.style.color = "red";
        return;
    }

    if (!isValidNickname) {
        resultMessage.textContent = "Nickname inválido!";
        resultMessage.style.display = "block";
        resultMessage.style.color = "red";
        return;
    }

    const userData = {
        name: nameValue,
        nickname: nicknameValue,
        email: emailValue,
        password: passwordValue
    };

    try {
        const response = await fetch("http://localhost:8080/users/register", {
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
                window.location.href = "login.html";
            }, 1200);
        } else {
            resultMessage.style.color = "red";
        }

    } catch (error) {
        resultMessage.textContent = "Erro ao conectar com o servidor!";
        resultMessage.style.display = "block";
        resultMessage.style.color = "red";
    }
});

