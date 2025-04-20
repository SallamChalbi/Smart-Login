var signUpName = document.getElementById('signupName');
var signUpEmail = document.getElementById('signupEmail');
var signUpPassword = document.getElementById('signupPassword');
var result = document.getElementById('result');
var signUpButton = document.getElementById('signupBtn');

var usersList = JSON.parse(localStorage.getItem('users')) || [];

signUpButton.addEventListener('click', function() {

    if (validateName(signUpName.value) && validateEmail(signUpEmail.value) && validatePassword(signUpPassword.value)) {
        var emailRegister = signUpEmail.value.toLowerCase();
        for (var i = 0; i < usersList.length; i++) {
            if (usersList[i].email === emailRegister) {
                result.innerHTML = 'Email already exists!';
                result.style.color = 'red';
                return;
            }
        }
        
        var user = {
            name: signUpName.value,
            email: emailRegister,
            password: signUpPassword.value
        };

        usersList.push(user);
        localStorage.setItem('users', JSON.stringify(usersList));

        signUpName.value = '';
        signUpEmail.value = '';
        signUpPassword.value = '';

        result.innerHTML = 'Success';
        result.style.color = 'green';
        
    }else if(signUpName.value == '' || signUpEmail.value == '' || signUpPassword.value == '') {
        result.innerHTML = 'All inputs are required!';
        result.style.color = 'red';
    }
    else {
        notValid();
    }
});

function validateName(name) {
    // Name must be 3-16 characters long and contain only letters and spaces
    var re = /^[a-zA-Z\s]{3,16}$/;
    return re.test(name);
}

function validatePassword(password) {
    // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function notValid() {
    if(!validateName(signUpName.value)) {
        result.innerHTML = 'Name must be 3-16 characters long and contain only letters and spaces';
        result.style.color = 'red';
    }
    else if(!validateEmail(signUpEmail.value)) {
        result.innerHTML = 'Invalid email!, email example: example@domain.com';
        result.style.color = 'red';
    }
    else if(!validatePassword(signUpPassword.value)) {
        result.innerHTML = 'Password must be at least  characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character';
        result.style.color = 'red';
    }
}