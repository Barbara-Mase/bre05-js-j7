//EXERCICE NON FINI

//window.addEventListener("DOMContentLoaded", function() {
    

    let username = sessionStorage.getItem("username")
    
    if (!username) {
        username = window.prompt("Saisissez votre nom : ")
        sessionStorage.setItem("username", username);
        window.alert("Bonjour " + username + " ! ")
    } else {
        window.alert("Bonjour " + username + " !")
    }
//});