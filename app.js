const addForm = document.querySelector(".add");
const todoList = document.querySelector(".todo-list");

const generateTodo = todo => {
    const html = `
    <li class="todo">
    <input type="checkbox" class="edit">
    <span>${todo}</span>
    <i class="fa-solid fa-trash-can delete">
    </li>`;
    todoList.innerHTML += html;
};


addForm.addEventListener("submit", e => 
   { e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo);
    if (todo.length){
        generateTodo(todo)
    };
    addForm.reset();
});

todoList.addEventListener("click", e => {
  if(e.target.classList.contains("delete")){
  e.target.parentElement.remove();
  }
})