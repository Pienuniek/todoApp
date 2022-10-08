const addForm = document.querySelector(".add");
const todoList = document.querySelector(".todo-list");
const lineOutBox = document.querySelector(".edit")

//create todo
const generateTodo = todo => {
    const html = `
    <li class="todo-box">
    <input type="checkbox" class="edit">
    <span class="todo data-ID="${todo._id}">${todo}</span>
    <i class="fa-solid fa-trash-can delete">
    </li>`;
    todoList.innerHTML += html;
};

//edit todo -- cross todo out.

//lineOutBox.addEventListener("change", e => {
//    e.preventDefault();
  //  if ()
 //   console.log (e.target)
//})

// add todo to DOM

addForm.addEventListener("submit", addTodo)

async function addTodo() {
{ e.preventDefault();
 const todo = addForm.add.value.trim();
 console.log(todo);
 if (todo.length){
   await postData(todo);
    await getData();
 };
 addForm.reset();
};

//delete todo from DOM

todoList.addEventListener("click", e => {
  if(e.target.classList.contains("delete")){
  e.target.parentElement.remove();
  }
})}