const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo');

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);


var name=prompt("Hello! What is your name?");
document.getElementById("nameText").innerHTML=name+"'s To-do List";


function addTodo(event)
{
    event.preventDefault();
 
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //local storage
    
    //check mark
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check trash
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    todoInput.value="";
}
function deleteCheck(e){
    const item=e.target;
    if (item.classList[0]=='trash-btn'){
        const todo=item.parentElement;
        todo.remove();
    }
    if (item.classList[0]=='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e){
const todos=todoList.children;
var array = Array.from(todos);
array.forEach(function(todo){
switch(e.target.value){
    case "all": 
    todo.style.display="flex";
    break;
    case "completed":
        if (todo.classList.contains('completed')){
            todo.style.display='flex';
        }
        else
        {
            todo.style.display="none";
        }
        break;
        case "todo":
        if (!todo.classList.contains('completed')){
            todo.style.display='flex';
        }
        else
        {
            todo.style.display="none";
        }

}
});

}



   
