//1.  Code for Data hiding and encapsulation:
// function hideData() {
// 	let count = 0;
// 	return {
// 		increment: function incrementCount() {
// 			count += 1;
// 			console.log(count);
// 		},
// 		decrement: function decrementCount() {
// 			count -= 1;
// 			console.log(count);
// 		},
// 	};
// }

// const returnedObject = hideData();
// returnedObject.increment();
// returnedObject.increment();
// returnedObject.decrement();
// returnedObject.decrement();


// 2.  code to generate random number of size n

// function generateRandomNumber(n) {
// 	const minNum = Math.pow(10, n - 1);
// 	const maxNum = Math.pow(10, n) - 1;

// 	return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// }

// console.log(generateRandomNumber(5));
