let signupBtn = document.querySelector(".signup");
if (signupBtn) {
    signupBtn.addEventListener("click", () => {
        window.location.href = "./signup.php";
    });
}

let loginBtn = document.querySelector(".login");
if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        window.location.href = "./login.php";
    });
}

let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm");
let showPassword = document.querySelector("#show");

// toggle password visibility
showPassword.addEventListener("change", function () {
    if (this.checked) {
        password.setAttribute("type", "text");
        confirmPassword.setAttribute("type", "text");
    } else {
        password.setAttribute("type", "password");
        confirmPassword.setAttribute("type", "password");
    }
});

let toastSignup = document.querySelector(".toast-signup");
setTimeout(() => {
    toastSignup.style.opacity = 0;
}, 5000);
