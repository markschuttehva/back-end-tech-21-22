//function to login
function validate(){
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (username == "" || password == "") {
        //message please fill in a username and password to login
        window.alert("Please fill in a username and password to login");
    }
}


