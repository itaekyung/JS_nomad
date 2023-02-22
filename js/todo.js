const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // 꼭 다큐먼트 일 필요없다.
const toDOList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //배열을 문자열로 만들어주기
}

function delteTodo(event) {
  const li = event.target.parentElement; //삭제하고 싶은 li 특정하기 #알아두자#
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❎";
  button.addEventListener("click", delteTodo);
  li.appendChild(span);
  li.appendChild(button);

  toDOList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
  const parsedToDos = JSON.parse(savedTodos); //문자열을 배열로 만들어주기
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
