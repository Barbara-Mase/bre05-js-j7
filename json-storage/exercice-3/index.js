let data = {
    firstName : "Harry",
    lastName : "Bow",
    motto : "C'est beau la vie !"
};

let str = "{\"firstName\":\"Colonel\",\"lastName\":\"Sanders\",\"motto\":\"Il est bon mon poulet\"}";

document.addEventListener("DOMContentLoaded", function(){
    
    let dataJson = JSON.stringify(data);
    console.log(dataJson);


    let strJS = JSON.parse(str);
    console.log(strJS);

});


