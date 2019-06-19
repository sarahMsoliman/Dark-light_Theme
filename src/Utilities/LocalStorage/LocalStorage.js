// export const getLocalStorage = function (key) {
//     return localStorage.getItem(key);
// };

// export const setLocalStorage = function (key, value) {
//     return localStorage.setItem(key, value)
// }
export const getLocalStorage = function () {
    var theme =  localStorage.getItem("theme");
    return theme === "true"? true : false
};

export const setLocalStorage = function (theme) {
    localStorage.setItem("theme", theme);
}