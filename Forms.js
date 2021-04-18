var form = document.querySelector("#TodoForm");

var todoUL = document.querySelector("#TodoList");

var todoListArray = [];


function showTodo() {
  var ul = "";

  var todo = todoListArray
    .map(function (todo) {
      return `<li>${todo}</li>`;
    })
    .join(" ");

  ul += todo;

  todoUL.innerHTML = ul;
}

function handleSubmit(event) {

  event.preventDefault();

  var todoInput = event.target[0].value;
  
  todoListArray.push(todoInput);

  showTodo();
}
form.addEventListener("submit", handleSubmit);
