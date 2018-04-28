function putInStorage(key, data) {
    localStorage.setItem(key, data);
}

function getFromStorage(key) {
    return localStorage.getItem(key);
}

function removeFromStorage(key) {
    localStorage.removeItem(key);
}

export {
    putInStorage,
    removeFromStorage,
    getFromStorage,
};