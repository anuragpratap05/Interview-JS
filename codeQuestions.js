// // Question 1: what can you infer from the destucturing of allStates
// // const [{ isoCode: firstCode = "default" } = {}] = allStates;
// // const allStates = [
// // 	{ isoCode: "DA", name: "India" },
// // 	{ isoCode: "CA", name: "Canada" },
// // ];

// // Question 2: sorty array based on key provide. key can be name , age , title
// // let array = [
// // 	{ name: "James Hooper", age: 33, title: "Designer" },
// // 	{ name: "Ronnie Thomas", age: 24, title: "Analyst" },
// // 	{ name: "Taylor Hayes", age: 45, title: "Technician" },
// // 	{ name: "Mary Green", age: 23, title: "Coordinator" },
// // 	{ name: "Amber Roberts", age: 31, title: "Designer" },
// // 	{ name: "Lee Moreno", age: 38, title: "Administrator" },
// // 	{ name: "Edward Johnson", age: 46, title: "Consultant" },
// // 	{ name: "Jamie Spencer", age: 56, title: "Engineer" },
// // 	{ name: "Katie Robinson", age: 23, title: "Consultant" },
// // 	{ name: "John Trevino", age: 52, title: "Specialist" },
// // ];

// // Question 3: what will be output
// // const a = [1, 2, 3, 4];
// // const b = a;
// // a[0] = 22;
// // console.log(a);
// // console.log(b);

// // Question 4: what will be output
// // let x = [1, 2, 3, 4];
// // let y = x;
// // x[0] = 99;
// // x = [2, 3];
// // console.log(x);
// // console.log(y);

// //Question 4: Write code to generate a random number of size 5

// // Question 5:Write code to reverse each word of sentence
// const sentence = "I Love India";
// // output -> [I , evoL , aidnI ]

// // Question 6:
// var fullName = "Anurag singh";

// var obj = {
// 	fullName: "Hacked full Name",

// 	prop: {
// 		fullName: "Inside prop",
// 		getFullName: function () {
// 			return this.fullName;
// 		},
// 	},

// 	getFullName: function () {
// 		return this.fullName;
// 	},

// 	getFullNameV2: () => this.fullName,

// 	getFullNameV3: (function () {
// 		return this.fullName;
// 	})(),
// };

// console.log(obj.prop.getFullName());
// console.log(obj.getFullName());
// console.log(obj.getFullNameV2());
// console.log(obj.getFullNameV3());

// const fs = require("fs");

// fs.readFile(__filename, () => {
// 	console.log("file is successfully read");
// });

// Promise.resolve().then(() => {
// 	console.log("promise is resolved");
// });

// process.nextTick(() => {
// 	console.log("this is nexttick queue!!");
// });

// setImmediate(() => {
// 	console.log("this is setImmediate");
// });

// setTimeout(() => {
// 	console.log("this is setTimeout");
// }, 0);

// "this is nexttick queue!!"
// "promise is resolved"
// "this is setTimeout"
// "this is setImmediate"
// "file is successfully read"
