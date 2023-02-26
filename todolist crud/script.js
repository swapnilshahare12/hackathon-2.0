let toDoInput = document.querySelector('.todo-input'); 
let errorInfo = document.querySelector('.error-info');
let addBtn = document.querySelector('.btn-add');
let ulList = document.querySelector('.todolist ul');
let newToDo;

let popup = document.querySelector('.popup');
let popupInfo = document.querySelector('.popup-info');
let todoToEdit; 
let popupInput = document.querySelector('.popup-input');
let popupAddBtn = document.querySelector('.accept');
let popupCloseBtn = document.querySelector('.cancel');

const main = () => {
    errorInfo.textContent = 'There are no tasks in the list.';
    addBtn.addEventListener('click', addNewToDo);
    ulList.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click', closePopup);
    popupAddBtn.addEventListener('click', changeTodoText);
    toDoInput.addEventListener('keyup', enterKeyCheck);
}


const addNewToDo = () => {
    if (toDoInput.value.trim() == '') {
        errorInfo.textContent = 'Enter the content of the task!';
       
    } else {
         newToDo = document.createElement('li');
         newToDo.innerText = toDoInput.value;
         createToolAreal();
         ulList.append(newToDo);
         toDoInput.value = '';
         errorInfo.textContent = '';
    }
}

const createToolAreal = () => {
    const div = document.createElement('div');
    div.classList.add('tools');
    newToDo.append(div);

    const buttonDone = document.createElement('button');
    buttonDone.classList.add('complete');
    buttonDone.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('edit');
    buttonEdit.innerHTML = '<i class="fa-solid fa-pen"></i>';

    const buttonCancel = document.createElement('button');
    buttonCancel.classList.add('delete');
    buttonCancel.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    div.append(buttonDone, buttonEdit, buttonCancel);
}

const checkClick = (e) => {
    if(e.target.matches('.complete')){
        e.target.closest('li').classList.toggle('completed'); 

    } else if (e.target.matches('.edit')) {
        editToDo(e);

    } else if (e.target.matches('.delete')) { 
        deleteToDo(e);

    }
}

const editToDo = (e) => { 
    todoToEdit = e.target.closest('li'); 
    popupInput.value = todoToEdit.firstChild.textContent; 
    popup.style.display = 'flex';
}

const closePopup = () => {
    popup.style.display = 'none';
    popupInfo.textContent = '';
}

const changeTodoText = () => {
    if (popupInput.value.trim() != '') {
        todoToEdit.firstChild.textContent = popupInput.value;

        popup.style.display = 'none';
        popupInfo.textContent = '';
    } else {
        popupInfo.textContent = 'You must provide some content!';
    }
}

const deleteToDo = (e) => {
    e.target.closest('li').remove(); 

    const allToDos = ulList.querySelectorAll('li');
    if (allToDos.length == 0) {
        errorInfo.textContent = 'There are no tasks in the list.';
    }
}

const enterKeyCheck = (e) => {
    if(e.key == 'Enter'){
        addNewToDo();
    }
}

document.addEventListener('DOMContentLoaded', main);

