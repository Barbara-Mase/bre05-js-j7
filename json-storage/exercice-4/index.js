let user = {
    firstName : "Harry",
    lastName : "Bow",
    motto : "C'est beau la vie !"
};

document.addEventListener("DOMContentLoaded", function(){
    
    let userStorage = sessionStorage.getItem("user");
    
    if (userStorage) {
        let userJS = JSON.parse(userStorage)
        console.log(userJS);
    } else {
        let userJson = JSON.stringify("user")
        sessionStorage.setItem("userJson", user);
    }
});

