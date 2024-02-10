// let array = [
// 	{ name: "James Hooper", age: 33, title: "Designer" },
// 	{ name: "Ronnie Thomas", age: 24, title: "Analyst" },
// 	{ name: "Taylor Hayes", age: 45, title: "Technician" },
// 	{ name: "Mary Green", age: 23, title: "Coordinator" },
// 	{ name: "Amber Roberts", age: 31, title: "Designer" },
// 	{ name: "Lee Moreno", age: 38, title: "Administrator" },
// 	{ name: "Edward Johnson", age: 46, title: "Consultant" },
// 	{ name: "Jamie Spencer", age: 56, title: "Engineer" },
// 	{ name: "Katie Robinson", age: 23, title: "Consultant" },
// 	{ name: "John Trevino", age: 52, title: "Specialist" },
// ];
// function sortBasedOnKey(key) {
// 	array.sort((a, b) => {
// 		if (a[`${key}`] < b[`${key}`]) return -1;
// 		if (a[`${key}`] > b[`${key}`]) return 1;
// 		return 0;
// 	});
// }
// sortBasedOnKey("title");
// console.log(array);

//  const randomNumber = Math.floor(Math.random() * 90000) + 10000;
//  console.log(randomNumber);

function checkOutput(size) {
	const minNum = 10 ** (size - 1);
	const maxNum = 10 ** size - 1;
	for (let i = 0; i < 10000000; i++) {
		const randomNum = getRandomInt(size);
		if (randomNum >= minNum && randomNum <= maxNum) {
			// console.log("Good", minNum, randomNum, maxNum);
		} else {
			console.log("Bad");
			throw new Error("not good");
		}
	}
	console.log("Completed");
}

function getRandomInt(size) {
	return Math.floor(Math.random() * (9 * 10 ** (size - 1))) + 10 ** (size - 1);
}
// checkOutput(2);
// console.log(getRandomInt(5));

// let num = Math.random();

// console.log(num);
// num *= 90000;
// console.log(num);
// num = Math.floor(num);
// console.log(num);
console.log(Math.floor(89.9999));
