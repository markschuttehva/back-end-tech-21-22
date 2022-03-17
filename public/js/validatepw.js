//function to see if the passwords are the same
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function validate(){
    if (password != password2) {
        //message please fill in the same passwords
        window.alert("Please use the same password");
    }
}


