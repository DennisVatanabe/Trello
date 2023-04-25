import {
    // getUsers,
    selectUser,
    // getItems,
    hidingAddTodoModale,
    callAddTodoModale,
    // getTime,
    // Task,
    selectHadleChoices,
    createTodo,
    confirmEditItem
} from './functions.js';

const elementTime = document.querySelector('.trello__time');
const elementHandleAddTodo = document.querySelector('.trello__add-todo');
const elementAddTodoModale = document.querySelector('.wrapper__add-todo-modale');
const elementTodosWrapper = document.querySelector('#trello__todo-wrapper');
const elementHandleCancelAddTodo = document.querySelector('.add-modale-cancel');
const elementSelectUser = document.querySelector('.add-modale-user');
const elementsAllTasksWrappers = document.querySelectorAll('.tasks-wrapper');
const elementHandleConfirmAddTodo = document.querySelector('.add-modale-confirm');
const elementInputTitle = document.querySelector('.add-modale-todo-title');
const elementInputDescription = document.querySelector('.add-modale-todo-description');
const elementsSelectedUsers = document.querySelectorAll('.user');
const elementButtonEditTodo = document.querySelector('.edit-todo');

elementButtonEditTodo.addEventListener('click', confirmEditItem);
elementTodosWrapper.addEventListener('click', selectHadleChoices);
// elementsSelectedUsers.addEventListener('click', function(){console.log(91)})
elementHandleConfirmAddTodo.addEventListener('click', createTodo);
elementSelectUser.addEventListener('click', selectUser);
elementHandleCancelAddTodo.addEventListener('click', hidingAddTodoModale);
elementHandleAddTodo.addEventListener('click', callAddTodoModale);
// elementTodosWrapper.addEventListener('click', callHandleModifiers);

export {elementTime,
    elementHandleAddTodo,
    elementAddTodoModale,
    elementTodosWrapper,
    elementHandleCancelAddTodo,
    elementSelectUser,
    elementsAllTasksWrappers,
    elementHandleConfirmAddTodo,
    elementInputTitle,
    elementInputDescription,
    elementsSelectedUsers,
    elementButtonEditTodo
};