window.addEventListener("DOMContentLoaded", () => {

let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/users"
);


// Après avoir récupéré les infos avec fetch, faites en sorte de les afficher dans le DOM :

// Affichez une <table> avec une ligne par utilisateur / utilisatrice

    fetch(url)
     .then(response => response.json())
     .then(data => {
        console.log(data)
        
        let body = document.querySelector("body");
        
        let table = document.createElement("table")
        body.appendChild(table) // ajoute le tableau au body
        
        for (let i = 0; i < data.data.length; i++) // boucle sur chacun des tableau
        {
            let trow = document.createElement('tr')// pour chaque tableau creer un trow
            table.appendChild(trow); // ajoute la ligne au tableau
            

            for (let j = 0; j < Object.keys(data.data[i]).length; j++) // pour le nombre de clés de chaque tableau
            {
                let td = document.createElement('td'); // créer un td
                trow.appendChild(td) // ajoute le td au trow
            }
        }
        
        let username = document.createTextNode(data.data[1].username); // créer un text node avec le username
        let tdFirstOfType = document.querySelectorAll("td:first-of-type"); // sélectionne le premier td de chaque trow
        tdFirstOfType.appendChild(username); // ajoute le username au td
        
    })
    .catch(err => console.error(err));
});

//console.log("Nom d'utilisateur : " + data.data[i].username + " Prénom : " + data.data[i].firstName + " Nom : " + data.data[i].lastName);
