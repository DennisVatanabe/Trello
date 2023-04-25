import {elementTime,
    elementHandleAddTodo,
    elementAddTodoModale,
    elementTodosWrapper,
    elementHandleCancelAddTodo,
    elementSelectUser,
    elementsAllTasksWrappers,
    elementHandleConfirmAddTodo,
    elementInputTitle,
    elementInputDescription,
    elementsSelectedUsers
} from './elements.js';

import { getItems, setItems } from './storage.js';

import { buildCardTemplate } from './templates.js';

function createTodo() {
    const title = elementInputTitle.value;
    const description = elementInputDescription.value;
    const user = elementSelectUser.value;
    const id = elementAddTodoModale.id || Date.now();
    // const category = newTodoCategoryElement.value
    // const task = new Task({ title, description, user, category })
    if (title && description && (elementSelectUser.options[elementSelectUser.selectedIndex].classList.contains('user'))) {
        const task = new Task({ title, description, user, id});
        const items = getItems('tasks');
        items.push(task);
        setItems('tasks', items);
        hidingAddTodoModale();
        render();
    };
};

function clearContainers() {
    elementsAllTasksWrappers.forEach((el) => {
        el.innerHTML = '';
    });
};

function render() {
    const tasks = getItems('tasks');

    clearContainers();
    if (tasks.length) {
        tasks.forEach((element) => {
        buildCardTemplate(element)
        });
    };
};

function selectHadleChoices({target}) {
const item = +target.parentElement.parentElement.id;
    if (target.classList.contains('todo-item-progress')) {
        console.log('to-progress');
    } else if (target.classList.contains('todo-item-edit')) {
        callEditItem(item);
    } else if (target.classList.contains('todo-item-delete')) {
        removeItem(target);
    }
    // console.log(item);
};

function callEditItem (id) {
    const items = getItems('tasks');

    items.forEach((el) => {
        if (el.id === id) {
            elementAddTodoModale.style.display = 'flex';
            elementAddTodoModale.classList.add('edit');
            elementInputTitle.value = el.title;
            elementInputDescription.value = el.description;
            elementSelectUser.value = el.user;
            elementAddTodoModale.id = el.id;
        };
    });
};

function confirmEditItem() {
    const items = getItems('tasks');
    const selectedId = +elementAddTodoModale.id;

    items.forEach((el) => {
        if (el.id === selectedId) {
            el.title = elementInputTitle.value;
            el.description = elementInputDescription.value;
            el.user = elementSelectUser.value;
        };
    });
    hidingAddTodoModale();
    setItems('tasks', items);
    render();
};

function removeItem(event) {
    const items = getItems('tasks');
    const searchId = +event.parentElement.parentElement.id;
    const result = items.filter((el) => el.id !== searchId);
    setItems('tasks', result);
    render();
};

function hidingAddTodoModale() {
    elementAddTodoModale.classList.remove('edit');
    elementAddTodoModale.style.display = 'none';
    elementAddTodoModale.removeAttribute('id');
    elementInputTitle.value = '';
    elementInputDescription.value = '';
    elementSelectUser.value = 'Select a user';
};

function callAddTodoModale() {
    elementAddTodoModale.style.display = 'flex';
};

function getTime () {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    elementTime.textContent = timeString;
    setInterval(() => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
        elementTime.textContent = timeString;
    }, 60000); 
};

class Task {
    constructor({id, title, description, user, createAt, category}) {
        this.id = id || Date.now();
        this.title = title;
        this.description = description;
        this.user = user;
        this.createAt = createAt || new Date().toLocaleString();
        this.category = category;
    };
};


async function getUsers() {
    const URL = 'https://642881b95a40b82da4c36f21.mockapi.io/data';
    const users = [];

    try {
        const response = await fetch(URL);
        const responseJson = await response.json();
        responseJson.forEach(el => {
            users.push(el.name);
        });
    } catch (error) {
        console.log(error);
    };
    return users;
};

async function selectUser() {
    const users = await getUsers();
    users.forEach((el) => {
        const option = document.createElement('option');
        option.classList.add('user');
        option.value = el;
        option.text = el;
        elementSelectUser.add(option);
    });
};

export {getUsers,
    selectUser,
    getItems,
    hidingAddTodoModale,
    callAddTodoModale,
    getTime,
    Task,
    createTodo,
    render,
    selectHadleChoices,
    confirmEditItem,
    removeItem
};