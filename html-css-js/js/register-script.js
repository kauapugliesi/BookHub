const resultMessage = document.querySelector("#result-message");
const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", async(event) => {
event.preventDefault();

const user = {
    name: document.querySelector("#name").value,
    nickame: document.querySelector("#user").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
};

try{

    const response = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const data = await response.text();

    if(!response.ok){

    resultMessage.style.display = "block";
    resultMessage.style.color = "red";

    const data = await response.text();

    console.log(data);

    resultMessage.textContent = data;

    return;
}

    resultMessage.style.display = "block";
    resultMessage.style.color = "green";
    resultMessage.textContent = data.message || "Usuário cadastrado com sucesso!";
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);

} catch(error){
    resultMessage.style.display = "block";
    resultMessage.style.color = "red";
    resultMessage.textContent = "Erro ao conectar com o servidor!";
}
});