const form = document.getElementById('form')
const username= document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const captcha = document.getElementById('captcha')

// form

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput();
});


function checkInput() {
    //    get user value
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const password2Val = password2.value.trim();
    const captchaVal = captcha.value.trim();

    if (usernameVal === "") {
        setError(username, "username can not be empty");
    } else if (usernameVal.lenght < 5) {
        setError(username, "The minimum username lenght is 5");
    } else {
        setSuccess(username);
    }
    // email
    if (emailVal === "") {
        setError(email, "username can not be empty");
    } else if (!emailVal.includes("@")) {
        setError(email, "invaild email");
    } else {
        setSuccess(email);
    }
    // password
    if (passwordVal === "") {
        setError(password, "password can not be empty");
    } else if (passwordVal.lenght < 5) {
        setError(password, "The minimum password lenght is 5");
    } else {
        setSuccess(password);
    }
    // password 2
    if (password2Val === "") {
        setError(password2, "password can not be empty");
    } else if (password2Val !== passwordVal) {
        setError(password2, "Password does not match");
    } else {
        setSuccess(password2);
    }

    if (captchaVal === "") {
        setError(captcha, "Authentication Needed")
    }
};
captcha.addEventListener("input", (e) => {
    const img = document.querySelector("img");
    const text = e.target.value;
    const blurValue = 20 - text.length * 2;
    img.style.filter = `blur(${blurValue}px)`;
    if (blurValue <= 0) {
        setSuccess(captcha);
    } else {
        setError(captcha, "Text is not long enough");
    }
});
//

function setError(input, msg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    // 
    small.innerText = msg;
};
function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
