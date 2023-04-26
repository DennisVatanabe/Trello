

function buildCardTemplate(task) {
    const container = document.querySelector(`#trello__todo-wrapper`);
    const box = document.createElement("div");
    box.id = task.id;
    box.classList.add('todo-item');
    box.setAttribute('draggable', true);
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
            `;
    box.innerHTML = template;

    container.prepend(box);
};

function buildCardProgressTemplate(task) {
    const container = document.querySelector(`#trello__progress-wrapper`);
    const box = document.createElement("div");
    box.id = task.id;
    box.classList.add('progress-item');
    box.setAttribute('draggable', true);
    const template = `
                    <div class="progress-item-header">
                        <div class="progress-item-title">${task.title}</div>
                        <button class="progress-item-back">Back</button>
                        <button class="progress-item-complete">Complete</button>
                    </div>
                    <div class="progress-item-main">
                        <div class="progress-item-description">${task.description}</div>
                    </div>
                    <div class="progress-item-footer">
                        <div class="progress-item-user">${task.user}</div>
                        <div class="progress-item-date">${task.createAt}</div>
                    </div>
                `;
    box.innerHTML = template;

    container.prepend(box);
};

function buildCardDoneTemplate(task) {
    const container = document.querySelector(`#trello__done-wrapper`);
    const box = document.createElement("div");
    box.id = task.id;
    box.classList.add('done-item');
    box.setAttribute('draggable', true);
    const template = `
                    <div class="done-item-header">
                        <div class="done-item-title">${task.item}</div>
                        <button class="done-item-delete">Delete</button>
                    </div>
                    <div class="done-item-main">
                        <div class="done-item-description">${task.description}</div>
                    </div>
                    <div class="done-item-footer">
                        <div class="done-item-user">${task.user}</div>
                        <div class="done-item-date">${task.createAt}</div>
                    </div>
                `;
    box.innerHTML = template;

    container.prepend(box);
}
export { buildCardTemplate, buildCardProgressTemplate, buildCardDoneTemplate };