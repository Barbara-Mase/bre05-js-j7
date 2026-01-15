window.addEventListener("DOMContentLoaded", () => {
 

let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/users"
);

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
    

});