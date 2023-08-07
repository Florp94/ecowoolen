const btnSignIn = document.getElementById("sign_in");
const btnSignUp = document.getElementById("sign_up");
const formRegister = document.getElementById("register");
const formLogin = document.getElementById("login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
})

btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
})
