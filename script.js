// Hämta element
let myDiv = document.getElementById("myDiv");
let content = document.getElementById("content");

// Kollar om användare är inloggad
function checkLoggedIn(){
    if((localStorage.getItem("user") == null) && (localStorage.getItem("pass") == null)){
        myDiv.innerText = ""
        content.innerText = "INTE INLOGGAD!!!"
        loggedOut();
    } else {
        myDiv.innerText = ""
        content.innerText ="INLOGGAD!!!!"
        loggedIn();
    }
}
checkLoggedIn();

// Om användaren är inloggad
function loggedIn(){
    //visa "logga ut"-knapp
    let logOut = document.createElement("button");
    logOut.id = "logOut";
    logOut.innerText = "Logga ut";
    myDiv.append(logOut);
    // Om man klickar på "logga ut"-knappen 
    document.getElementById("logOut").addEventListener("click", function(){
        // Rensar localStorage
        localStorage.clear();
        checkLoggedIn();
    })
    //Hej "användarnamn"
    
}

// Om användaren INTE är inloggad
function loggedOut(){
    //visa formulär för login
    let myInput = document.createElement("input");
    myInput.id = "myInput";
    myInput.placeholder = "Användarnamn";
    myDiv.append(myInput);
    let myPassWrd = document.createElement("input");
    myPassWrd.id = "myPassWrd";
    myPassWrd.type = "password";
    myPassWrd.placeholder = "Lösenord";
    myDiv.append(myPassWrd);
    let logIn = document.createElement("button");
    logIn.id = "logInBtn";
    logIn.innerText = "Logga in";
    myDiv.append(logIn);
    // Om man klickar på "logga in"-knappen
    document.getElementById("logInBtn").addEventListener("click", function(){
        // Sätter user = janne och pass = test
        localStorage.setItem("user", "janne");
        localStorage.setItem("pass", "test");
        let user = localStorage.getItem("user");
        let pass = localStorage.getItem("pass");
        // Om jag skriver in rätt användarnamn samt lösenord
        if((localStorage.getItem("user") == myInput.value) && (localStorage.getItem("pass") == myPassWrd.value)){  
            // Kollar igen om jag är inloggad, vilket jag borde vara
            checkLoggedIn();
            // Döljer inloggnings formuläret
            hideForm();
            // Visar istället "logga ut"-knappen
            loggedIn();
        } else {
            content.innerText = "FEL ANVÄNDARNAMN ELLER LÖSENORD!"
            myInput.value = "";
            myPassWrd.value = "";
            localStorage.clear();
        }
    })
}

// Döljer inloggnings formuläret
function hideForm() {
    document.getElementById("myInput").style.visibility = "hidden";
    document.getElementById("myPassWrd").style.visibility = "hidden";
    document.getElementById("logInBtn").style.visibility = "hidden";
}