let signupBtn = document.querySelector(".signup");
if (signupBtn) {
    signupBtn.addEventListener("click", () => {
        window.location.href = "./_signup.php";
    });
}

let loginBtn = document.querySelector(".login");
if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        window.location.href = "./_login.php";
    });
}

let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm");
let showPassword = document.querySelector("#show");

// toggle password visibility
if (showPassword) {
    showPassword.addEventListener("change", function () {
        if (this.checked) {
            password.setAttribute("type", "text");
            confirmPassword.setAttribute("type", "text");
        } else {
            password.setAttribute("type", "password");
            confirmPassword.setAttribute("type", "password");
        }
    });
}

let toastSignup = document.querySelector(".toast-signup");
if (toastSignup) {
    setTimeout(() => {
        toastSignup.style.opacity = 0;
    }, 5000);
}

let toastSignin = document.querySelector(".toast-signin");
if (toastSignin) {
    setTimeout(() => {
        toastSignin.style.opacity = 0;
    }, 5000);
}

let logoutBtn = document.querySelector(".logout");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        window.location.href = "./includes/_logout.php";
    });
}
