const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // 꼭 다큐먼트 일 필요없다.
const toDOList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
