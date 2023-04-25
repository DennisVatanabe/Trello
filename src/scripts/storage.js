

function getItems(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
};

function setItems(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
};

export { getItems, setItems };