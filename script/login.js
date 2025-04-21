var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var loginButton = document.getElementById("loginBtn");
var result = document.getElementById("result");

loginButton.addEventListener("click", function () {
    if(validateEmail(loginEmail.value) && loginPassword.value != ''){
        var emailLogin = loginEmail.value.toLowerCase();
        var usersList = JSON.parse(localStorage.getItem("users")) || [];

        for (var i = 0; i < usersList.length; i++) {
            if (usersList[i].email === emailLogin && usersList[i].password === loginPassword.value) {
                result.innerHTML = "Login successful!";
                result.style.color = "green";

                sessionStorage.setItem("loggedInUser", JSON.stringify(usersList[i]));
                window.location.href = "./welcome.html"; // Redirect to welcome.html after successful login
                return;
            }
        }

        result.innerHTML = "Incorrect email or password!";
        result.style.color = "red";
    }else if(loginEmail.value == '' || loginPassword.value == '') {
        result.innerHTML = "All inputs are required!";
        result.style.color = "red";
    }else{
        result.innerHTML = 'Invalid email!, email example: example@domain.com';
        result.style.color = 'red';
    }
});

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}