function reduction (age)
{
    //la promise prend en paramètres resolve et reject
    return new Promise((resolve, reject) => {
        if ( age <= 25)
        {
            resolve("Réduction jeunes");
        }
        
        else if ( age >= 65)
        {
            resolve("Réduction seniors");
        }
        else 
        {
            reject("Pas de réduction");
        }
    });
};

reduction(70) // la fonction reduction prend en paramètre l'age
.then(response => console.log(response)) //Renvoie la réponse des resolves (if et else if)
.catch(error => console.log(error)); // renvoie le reject "Pas de réduction"