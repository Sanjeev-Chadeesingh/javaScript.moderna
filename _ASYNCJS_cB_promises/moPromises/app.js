//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};



// fakeRequest('/users').then((res) => {
// 	const id = res.data[0].id;
// 	//callback goes here for promise chaining, because we now have access to the id via the initial then()
// 	fakeRequest(`/users/${id}`).then((res) => {
// 		//this is now within the id of user determined from above resolve() callback
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		fakeRequest(`/posts/${postId}`).then((res) => {
// 			//this is now within the post id of the user id from above resolve() callback
// 			console.log(res);
// 		})
// 	})
// })
// .catch((err) => {
// 	//this catch only works for the initial then(), cannot go into the subsequent then()'s
// 	console.log(`Error! : ${err}`);
// })


//if then()'s return a promise, we can call then() immediately after on the same level, and continue to chain so long as EACH then() RETURNS A PROMISE, if returned promise is resolved, subsequent then()'s can continue no problem

fakeRequest('/users')
.then((res) => {
	console.log(res);
	const id = res.data[0].id;
	//this is a returned promise, basically a nested callback without being nested
	return fakeRequest(`/users/${id}`);
})
.then((res) => {
	console.log(res);
	const postId = res.data.topPostId;
	//this returned promise is chained to the above promise if resolved, without nesting
	return fakeRequest(`/posts/${postId}`);
})
.then((res) => {
	//this only runs if initial promise is resolved, allowing for the second promise to be resolved
	console.log(res);
})
.catch((err) => {
	//this catch() runs if ANY of the above then()'s cannot run
	console.log(`OH NO`, err);
})


















// fakeRequest('/users')
// .then((res) => {
// 	console.log(res);
// 	const id = res.data[0].id;
// 	return fakeRequest(`/users/${id}`);
// })
// .then((res) => {
// 	console.log(res);
// 	const postID = res.data.topPostId;
// 	return fakeRequest(`/posts/${postID}`)
// 	})
// .then((res) => {
// 	console.log(res);
// })
// .catch((err) => {
// 	console.log(`ERROR!, ${err}`);
// })


// ************************************************
// ATTEMPT 2 (deliberate error to illustrate CATCH)
// ************************************************
// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/useALSKDJrs/${id}`); //INVALID URL, CATCH WILL RUN!
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO!', err);
// 	});
