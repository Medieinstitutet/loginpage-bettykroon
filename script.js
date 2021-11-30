let userName = document.getElementById("anv");
let passWrd = document.getElementById("losen");
let myBtn = document.getElementById("myBtn");

localStorage.setItem("user", "janne");
localStorage.setItem("pass", "test");

let user = localStorage.getItem("user");
let pass = localStorage.getItem("pass");

let message = document.getElementById("myText");

myBtn.addEventListener("click", function(){
    if(user == userName.value && pass == passWrd.value){
        alert("success");
        userName.value = "";
        passWrd.value = "";
    } else {
        alert("fail");
        userName.value = "";
        passWrd.value = "";
    }
});
