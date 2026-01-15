
window.addEventListener("DOMContentLoaded", () => {
 

    let url = "https://corsproxy.io/?" + encodeURIComponent(
        "https://maridoucet.sites.3wa.io/user-api/create-user"
    );


    let formData = new FormData();
    formData.append('username', "Polux");
    formData.append('firstName', "Barbara");
    formData.append('lastName', "Mase");
    formData.append('email', "polux@3WA.io");
    
    fetch(url, {
        method: 'POST',
        body: formData
    })
    
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
    
    let url1 = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/users"
    );

    fetch(url1)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
});

