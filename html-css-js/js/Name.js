const userName = localStorage.getItem("userName");

if(userName){
    const titleElement = document.querySelector("#main-title");
    if(titleElement) titleElement.textContent = `Olá, ${userName}`;
}