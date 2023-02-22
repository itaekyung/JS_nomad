const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOD");
}

h1.addEventListener("click", handleTitleClick); // 괄호를 쓰면 안돼
h1.addEventListener("mouseenter", handleMouseEnter); // 마우스 올라갔을때
h1.addEventListener("mouseleave", handleMouseLeave); // 마우스 떠났을 때
window.addEventListener("resize", handleWindowResize); // 화면 크기 바뀌었을 때
window.addEventListener("copy", handleWindowCopy); // 복사했을 때
window.addEventListener("offline", handleWindowOffline); // 와이파이 없을 때
window.addEventListener("online", handleWindowOnline); // 와이파이 있을 때
