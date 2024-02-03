function saveToLocalStorage(event) {
    event.preventDefault();
    const todoname = event.target.todoname.value;
    const description = event.target.description.value;
    let myObj = {
        todoname,
        description
    };
    
    localStorage.setItem(myObj.description, JSON.stringify(myObj));
    showNewTodoOnScreen(myObj);
    
}
window.addEventListener('DOMContentLoaded',()=> {
    const localStorageObj = localStorage;
     localStoragekeys = Object.keys(localStorageObj);

     for(let i=0; i<localStoragekeys.length; i++) {
         const key = localStoragekeys[i];
         const todoDetailsString = localStorageObj[key];
        const todoDetailsObj = JSON.parse(todoDetailsString);
        showNewTodoOnScreen(todoDetailsObj);
     }

})

function showNewTodoOnScreen(todo) {
    document.getElementById('todoname').value='';
    document.getElementById('description').value='';
    

    if(localStorage.getItem(todo.description)!=null) {
        removeTodoFromScreen(todo.description);
    }

    const parentNode = document.getElementById('todoItems');
    const childHTML = `<li id='${todo.description}'>${todo.todoname} - ${todo.description}
   
    <button onclick= deleteTodo("${todo.description}")>x</button>
    <button onclick= doneTodoDetails('${todo.description}','${todo.todoname}')>Todosdone</button>
    </li>`

    parentNode.innerHTML=parentNode.innerHTML+childHTML;
 }

 function deleteTodo(description) {
    localStorage.removeItem(description);
    removeTodoFromScreen(description);

}

function removeTodoFromScreen(description) {
    const parentNode = document.getElementById("todoItems");
    const childNodeToBeDeleted = document.getElementById(description);

    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}

function doneTodoDetails(description) {
    localStorage.doneItem(description);
    removeTodoFromScreen(description);
}




