const resultMessage = document.querySelector("#result-message");
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async(event) => {
event.preventDefault();
    const user = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
    }

    try{

        const response = await fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        if(!response.ok){
            resultMessage.style.display = "block";
            resultMessage.style.color = "red"

            if(Array.isArray(data)){
                resultMessage.style.display = "block";
                resultMessage.innerHTML = data.join("<br>");
            } else{
                resultMessage.style.display = "block";
                resultMessage.textContent = data.message || "Erro ao realizar login. ";
            }

            return;
        }

        resultMessage.style.display = "block";
        resultMessage.style.color = "green";
        resultMessage.textContent = data.message 

        localStorage.setItem("userName", data.nickame);

        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);

    } catch(erro){
        resultMessage.style.display = "block";
        resultMessage.style.color = "red";
        resultMessage.textContent = "Erro ao conectar com o servidor!";
    }
});