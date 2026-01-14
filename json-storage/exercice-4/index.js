let user = {
    firstName : "Harry",
    lastName : "Bow",
    motto : "C'est beau la vie !"
};

document.addEventListener("DOMContentLoaded", function(){
    
    
    let userStorage = sessionStorage.getItem("user");
    console.log(userStorage)
    
    if (!userStorage) {
        let userJSON = JSON.stringify(user)
        sessionStorage.setItem("user", userJSON)
        console.log(userJSON)
    } else {
        let getUser = sessionStorage.getItem("user")
        let userJS = JSON.parse(getUser);
        console.log(userJS)
    }
});

