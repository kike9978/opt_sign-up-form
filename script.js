const pwdInput = document.querySelector("#pwd");
const cPwdInput = document.querySelector("#confirm_pwd");

cPwdInput.addEventListener("input", (event) => {
  if (cPwdInput.value === pwdInput.value) {
    console.log("Bien hecho cuate")
    cPwdInput.setCustomValidity("");
  } else {
    cPwdInput.setCustomValidity("The passwords don't match!");
  }
}
)