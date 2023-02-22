const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form Button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 문자열만 포함된 변수는 대문자로 표기하고 문자열 저장에 사용

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username}`; // = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
