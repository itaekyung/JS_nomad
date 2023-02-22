const title = document.querySelector(".hello h1");

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick); // 괄호를 쓰면 안돼
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
