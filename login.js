
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedusername = localStorage.getItem('username');
    const storedpassword = localStorage.getItem('password');

    if (username == storedusername && password == storedpassword) {
        alert("You have successfully logged in");
        open("/farmerhome")
    }
    else {
        document.getElementById("error").innerHTML = "Invalid username or password";
    }
}

function login1() {
    const username1 = document.getElementById("username1").value;
    const password1 = document.getElementById("password1").value;

    const storedusername1 = localStorage.getItem('username1');
    const storedpassword1 = localStorage.getItem('password1');

    if (username1 == storedusername1 && password1 == storedpassword1) {
        alert("You have successfully logged in");
        open("/farmerhome")
    }
    else {
        document.getElementById("error1").innerHTML = "Invalid username or password";
    }
}