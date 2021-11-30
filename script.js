let anvNamn = "janne";
let losOrd = "test";

let userName = document.getElementById("anv");
let psw = document.getElementById("losen");
let myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function(){
    if(anvNamn == userName.value && losOrd == psw.value) {
        alert("YEY");
        userName.value = "";
        psw.value = "";
    } else {
        alert("YOU ARE WRONG");
        userName.value = "";
        psw.value = "";
    }
})