// 1.  Code for Data hiding and encapsulation:
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

// 3. wtite code to concat nested arrays.
// function concatNestedArrays(arr) {
// 	let flatArr = [];
// 	for (let ele of arr) {
// 		if (Array.isArray(ele)) {
// 			let recFlatArr = concatNestedArrays(ele);

// 			flatArr = flatArr.concat(recFlatArr);
// 		} else {
// 			flatArr = flatArr.concat(ele);
// 		}
// 	}
// 	return flatArr;
// }

// function flattenArray(arr) {
// 	return arr.reduce(
// 		(flat, next) =>
// 			flat.concat(Array.isArray(next) ? flattenArray(next) : next),
// 		[],
// 	);
// }
// const inputArr = [1, 2, 3, 4, [5, 6, 7, [8, 9, 10]], [11, 12, 13, [14, 15]]];
// console.log(flattenArray(inputArr));
// console.log(concatNestedArrays(inputArr));

// 4.
// console.log([] == ![]);

// 5.
// console.log(["1", "2", "3"].map(parseInt));

// if (true) {
// 	var a = 10;
// 	let b = 20;
// 	const c = 30;
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// function aFunc(params) {
// 	var a = 10;
// 	let b = 20;
// 	const c = 30;
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }
// aFunc();

// console.log(a);

// 6. find frequency of each letter of a string
// function findFrequency(str) {
// 	const st = {};

// 	for (let letter of str) {
// 		if (st[letter]) {
// 			st[letter] += 1;
// 		} else {
// 			st[letter] = 1;
// 		}
// 	}
// 	console.log(st);
// }
// findFrequency("applee");
