const todoList=[];

function add() {
    const nameElement = document.querySelector('.js-name');
     todoList.push(nameElement.value);
     console.log(todoList);

    
}