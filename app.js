const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form Button");

function onLoginBtnClick() {
  console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
