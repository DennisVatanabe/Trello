const elementTime = document.querySelector('.trello__time');

elementTime.textContent = new Date().toLocaleTimeString();
setInterval(() => {
    elementTime.textContent = new Date().toLocaleTimeString();
}, 100);