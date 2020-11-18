const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({bodyBoundary, elRight, amount});
			}
			else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	})

};

const btn = document.querySelector('button');

async function animateRight(el, amt) {
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
};
animateRight(btn).catch((err) => {
    console.log('ALL DONE');
    animateRight(btn, -100);
});

// moveX(btn, 100, 1000)
// .then(() => moveX(btn, 100, 1000))
// .then(() => moveX(btn, 100, 1000))
// .then(() => moveX(btn, 100, 1000))
// .then(() => moveX(btn, 100, 1000))
// .then(() => moveX(btn, 100, 1000))
// .then(() => moveX(btn, 100, 1000))
// .then(() => moveX(btn, 100, 1000))
// .then(() => moveX(btn, 100, 1000))
// .then(() => moveX(btn, 100, 1000))
// .catch(({bodyBoundary, amount, elRight}) => {
//     console.log('OUT OF SPACE AND CANNOT MOVE');
//     console.log(`Body is ${bodyBoundary}px wide.`);
//     console.log(`Element is at ${elRight}px, ${amount}px more is too much!`);
// });

