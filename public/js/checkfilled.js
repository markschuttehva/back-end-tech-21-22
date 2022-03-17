//function to check if every field has been filled
//checks the classes called login-input
//this is for the login-form
const loginInput = document.querySelectorAll(".login-input");
const loginArray = [...loginInput];

//this is for the register form
const registerInput = document.querySelectorAll(".register-input");
const registerArray = [...registerInput];
const pokemonSelected = document.querySelector('input[name = "pokemon"]:checked');

//whenever the mouse cursor leaves the field of a form
loginInput.forEach(item => item.addEventListener("blur", blur));
registerInput.forEach(item => item.addEventListener("blur", blur));

let errormessage = 0;
// const submitButton = document.getElementById("submit");

function blur(e) {
    //console.log(e.currentTarget.value);
    //whenever there is nothing filled inside a form field
    
    if (!e.currentTarget.value) {
        console.log("One of your fields is empty, please fill in all the fields.");
        e.currentTarget.style.background = "red";
        errormessage++;
        // submitButton.style.display = "none";
        // console.log(errormessage);
        alert("Please fill in all the fields");
    } else {
        e.currentTarget.style.color = "white";
        e.currentTarget.style.background = "rgba(0, 0, 0, 0)";
        errormessage--;
        // console.log(errormessage);
    }
    // if (errormessage == 0) {
    //     submitButton.style.display = "block";
    // }
}