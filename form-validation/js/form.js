let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('pass');
let city = document.getElementById('city');

const formdata = () => { 

    event.preventDefault();

    if(name.value == ''){
        document.getElementById("nerr").innerHTML = "Name Required";
        document.getElementById("nnerr").innerHTML = "";
    }
    else{
        document.getElementById("nnerr").innerHTML = "Name Success";
        document.getElementById("nerr").innerHTML = "";
    }

    if(email.value == ''){
        document.getElementById("eerr").innerHTML = "Email Required";
        document.getElementById("eeerr").innerHTML = "";
    }
    else{
        document.getElementById("eeerr").innerHTML = "Email Success";
        document.getElementById("eerr").innerHTML = "";
    }

    if(password.value == ''){
        document.getElementById("perr").innerHTML = "Password Required";
        document.getElementById("pperr").innerHTML = "";
    }
    else{
        document.getElementById("perr").innerHTML = "";
        document.getElementById("pperr").innerHTML = "Password Success";
    }

    if(city.value == ''){
        document.getElementById("cerr").innerHTML = "City Required";
        document.getElementById("ccerr").innerHTML = "";
    }
    else{
        document.getElementById("cerr").innerHTML = "";
        document.getElementById("ccerr").innerHTML = "City Success";
    }

}