const resultMessage = document.querySelector("#result-message");
const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", async(event) => {
event.preventDefault();

const user = {
    name: document.querySelector("#name").value,
    nickname: document.querySelector("#nickname").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
};

try{

    const response = await fetch("http://localhost:8080/User/register", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();

    if(!response.ok){
        resultMessage.style.color = "red"

        if(Array.isArray(data)){
            resultMessage.innerHTML = data.join("<br>"); //mais de uma resposta, junta em uma só e separa pela quebra
        }else{
            resultMessage.textContent = data.message || "Erro ao cadastrar usuário.";
        }

        return;
    } 

    resultMessage.style.color = "green";
    resultMessage.textContent = data.message || "Usuário cadastrado com sucesso!";

} catch(error){
    resultMessage.style.color = "red";
    resultMessage.textContent = "Erro ao conectar com o servidor!";
}
});