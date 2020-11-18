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


const moveX = (element, amount, delay, onSuccess, onFailure) => {
  
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if(elRight + amount > bodyBoundary) {
                onFailure();
            } else {
            element.style.transform = `translateX(${currLeft + amount}px)`;
            onSuccess();
            }
        }, delay)
};


// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 moveX(btn, 800, 1000);
//             })
//         })
//     })
// });

moveX(btn, 100, 1000, () => {
    //onSuccess
    moveX(btn, 400, 1000, () => {
        //onSuccess
        moveX(btn, 700, 1000, () => {
            console.log('REALLY, STILL SPACE?');
        }, () => {
            alert('cannot do it');
        })
    }, () => {
        //onFailure
        alert('cannot do it')
    })
}, () => {
    //onFailure
    alert('cannot do it')
})