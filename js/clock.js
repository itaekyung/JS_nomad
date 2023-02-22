const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// padStart , padEnd는 문자열에서만 쓸 수 있음 (원하는 만큼의 길이, 아닐때 앞 뒤로 끼워넣을 문자)
getClock(); // 시계 즉시 호출
setInterval(getClock, 1000); // 1초마다 시계 호출 = 시계
