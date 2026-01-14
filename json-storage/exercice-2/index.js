//EXERCICE NON FINI


let username = null

if (username === null) {
    username = window.prompt("Saisissez votre nom : ")
    sessionStorage.setItem("username", username);
} else {
    window.alert("Bonjour " + username + " !")
}