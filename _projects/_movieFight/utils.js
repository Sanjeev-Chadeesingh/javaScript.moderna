//place for all utility functions

const debounce = (func, delay = 1500) => {
    let timeoutId;
    //this is the wrapper for protection
    return (...args) => {
        if(timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay)
    }
}