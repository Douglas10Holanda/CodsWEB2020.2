
// Seletores
const campoTopo = document.querySelector('.campoTopo');
const Add = document.querySelector('.Add');
const todoList = document.querySelector('.todo-list');

//Ouvintes de eventos
Add.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Funções

function addTodo(event){
    //Impedir o envio do formulário
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = campoTopo.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-times"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Anexar à lista
    todoList.appendChild(todoDiv);
    //Limpar valor de entrada de tarefas
    campoTopo.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //Deletar To Do
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }

    //Check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}