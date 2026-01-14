function majeur (age)
{
    return new Promise((resolve, reject) => {
        if ( age >= 18)
        {
            resolve("Autorisation accordée");
        }
        else 
        {
            reject("Autorisation refusée");
        }
    });
};

majeur(42)
.then(response => console.log(response))
.catch(error => console.log(error));