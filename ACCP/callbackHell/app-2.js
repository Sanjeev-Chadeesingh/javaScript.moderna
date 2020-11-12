//asynchronous JS can happen through allowing some functions to be handled in the browser
    //Web API's are the functions handled by the browser
        //once handled, browser returns them and they are pushed onto the stack as a callback

const btn = document.querySelector('button');
// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`;
//             setTimeout(() => {
//                 btn.style.transform = `translateX(400px)`;
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(500px)`;
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000);


const moveX = (element, amount, delay, callback) => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;
    if(elRight + amount > bodyBoundary) {
        console.log('CANNOT GO FURTHER');
    } else {
        setTimeout(() => {
            element.style.transform = `translateX(${currLeft + amount}px)`;
            if(callback) callback();
        }, delay)
    }
};


moveX(btn, 100, 1000, () => {
    moveX(btn, 100, 1000, () => {
        moveX(btn, 100, 1000, () => {
            moveX(btn, 100, 1000, () => {
                moveX(btn, 800, 1000);
            })
        })
    })
});