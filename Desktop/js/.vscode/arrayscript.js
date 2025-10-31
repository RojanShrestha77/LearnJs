const todoList=[];

renderTodoList();

function renderTodoList() {
    let todoListHTML='';

for (let i = 0; i< todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
}

console.log(todoListHTML);

document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function add() {
    const nameElement = document.querySelector('.js-name');
     todoList.push(nameElement.value);
     console.log(todoList);

     nameElement.value='';

     renderTodoList();

    
}