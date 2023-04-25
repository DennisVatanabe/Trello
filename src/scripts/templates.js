

function buildCardTemplate(task) {
    // const container = document.querySelector(`#${task.category} .container`)
    const container = document.querySelector(`#trello__todo-wrapper`)
    // newModaleElement.classList.remove('open')
    const box = document.createElement("div")
    box.id = task.id
    box.classList.add('todo-item')
    box.setAttribute('draggable', true)
    const template = `
                <div class="todo-item-header">
                    <div class="todo-item-title">${task.title}</div>
                    <button class="todo-item-edit">Edit</button>
                    <button class="todo-item-delete">Delete</button>
                </div>
                <div class="todo-item-main">
                    <div class="todo-item-description">${task.description}</div>
                    <button class="todo-item-progress">></button>
                </div>
                <div class="todo-item-footer">
                    <div class="todo-item-user">${task.user}</div>
                    <div class="todo-item-date">${task.createAt}</div>
                </div>
            `
    box.innerHTML = template

    // const element = document.createElement(template)
    container.prepend(box)
};

export {buildCardTemplate};