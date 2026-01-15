window.addEventListener("DOMContentLoaded", () => {

    //déclaration de l'url
    let url = "https://corsproxy.io/?" + encodeURIComponent(
        "https://maridoucet.sites.3wa.io/user-api/user/18"
    );
    
    fetch(url) //récupération des données de l'url
        .then(response => response.json()) //l'url renvoie une promise
        
        //récupération des données envoyé par response.json
        .then((data) => {
            
            //récupération de la balise body
            let body = document.querySelector("body");
            
            //Création du h1 pour le nom d'utilisateur
            let h1 = document.createElement("h1");
            
            //récupération du texte
            let usernameText = document.createTextNode(data.data.username);
            
            //ajout du texte au h1 et ajout du h1 au body
            h1.appendChild(usernameText);
            body.appendChild(h1);
            
            //création du h2 pour les nom et prénom
            let h2 = document.createElement("h2");
            
            //récupération du texte 
            let firstName = document.createTextNode(data.data.firstName);
            let lastName = document.createTextNode(data.data.lastName);
            
            //ajout du texte au h2 et du h2 au body
            h2.appendChild(firstName);
            h2.appendChild(lastName);
            body.appendChild(h2);
            
            
            //création du h3 pour l'email
            let h3 = document.createElement('h3');
            let email = document.createTextNode(data.data.email);
            
            //ajout du texte au h3 et du h3 au body
            h3.appendChild(email);
            body.appendChild(h3);
            
            
        })
        .catch(err => console.error(err)) // en cas de rejet de reponse.json, la console affiche une erreur

});


