export const getLocalStorage = function (key) {
    return localStorage.getItem(key);
};

export const setLocalStorage = function (key, value) {
    localStorage.setItem(key, value);
}