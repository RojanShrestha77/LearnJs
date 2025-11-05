const todoList = [];

function add() {
  const nameInput = document.querySelector('.js-name');
  const dueDateInput = document.querySelector('.js-date-select');

  todoList.push({
    name: nameInput.value,
    dueDate: dueDateInput.value
  });

  nameInput.value = '';
  dueDateInput.value = '';

  renderTodoList();
}

function renderTodoList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

    const html = `
      <p>${name} ${dueDate}
        <button onclick="todoList.splice(${i}, 1); renderTodoList();">Delete</button>
      </p>
    `;
    todoListHtml += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}
