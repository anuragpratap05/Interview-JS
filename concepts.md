1. #### what is shallow copy and deep copy in javascript

In JavaScript, a shallow copy means creating a new object and copying the references of the values from the original object to the new object. If the original object has primitive types (like number, string, boolean, null, undefined), they are copied as values. But if the original object contains other objects or arrays, only the reference to those objects or arrays is copied, not the actual objects or arrays. So, if you change the nested objects or arrays in the copied object, it will also change the original object.

Here is an example of a shallow copy using the `Object.assign()` method:

```javascript
let originalObj = { a: 1, b: { c: 2 } };
let copiedObj = Object.assign({}, originalObj);
copiedObj.b.c = 3;
console.log(originalObj.b.c); // Outputs: 3
```

A deep copy means creating a new object and copying the values from the original object to the new object, including all nested objects and arrays. If you change anything in the copied object, it will not affect the original object.

Here is an example of a deep copy using the `JSON.parse()` and `JSON.stringify()` methods:

```javascript
let originalObj = { a: 1, b: { c: 2 } };
let copiedObj = JSON.parse(JSON.stringify(originalObj));
copiedObj.b.c = 3;
console.log(originalObj.b.c); // Outputs: 2
```

Please note that `JSON.parse(JSON.stringify(obj))` method for deep copying works only with JSON-safe objects, it doesn't correctly copy objects that contain functions, `undefined`, or circular references. For such cases, you might need to use a library like lodash's `_.cloneDeep()` method.

2. #### What is primitive and non primitive data type in JS.

In JavaScript, data types are divided into two categories: primitive and non-primitive (or reference) data types.

**Primitive Data Types:**

Primitive data types are basic data types that are immutable, meaning their values cannot be changed. They are also known as value types because they hold a value. JavaScript has six primitive data types:

1. **Number:** Represents numeric values. For example: 10, 20.5
2. **String:** Represents a sequence of characters. For example: 'hello', "WORLD"
3. **Boolean:** Represents either true or false.
4. **Undefined:** Represents a variable that has been declared but has not yet been assigned a value.
5. **Null:** Represents no value or no object. It is often used to make a variable point to no object.
6. **Symbol:** Introduced in ES6, it represents a unique value that's not equal to any other value.

**Non-Primitive (Reference) Data Types:**

Non-primitive data types are mutable, meaning their values can be changed. They are also known as reference types because they hold a reference to the memory location instead of holding an actual value. JavaScript has three non-primitive data types:

1. **Object:** Represents an instance through which we can access members. An object can be created in two ways: literal notation and constructor notation.
2. **Array:** Represents a group of similar values. In JavaScript, arrays are dynamic and can hold items of any type.
3. **Function:** Represents a block of code designed to perform a particular task. A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

In addition to these, JavaScript also recognizes the special, non-primitive data type `BigInt` for working with arbitrarily large integers, and `Map`, `Set`, `WeakMap`, `WeakSet` for collections.

3. #### what is base64 in js?

Base64 is a binary-to-text encoding scheme that is commonly used to encode binary data, especially when that data needs to be stored and transferred over media that are designed to deal with text. This encoding helps to ensure that the data remains intact without modification during transport.

In JavaScript, you can use the `btoa()` function to encode a string in base64, and the `atob()` function to decode a base64 string back into its original form.

Here's an example:

```javascript
let str = "Hello, World!";
let encodedStr = btoa(str);
console.log(encodedStr); // Outputs: 'SGVsbG8sIFdvcmxkIQ=='

let decodedStr = atob(encodedStr);
console.log(decodedStr); // Outputs: 'Hello, World!'
```

In this example, `btoa(str)` takes a string and returns a base64-encoded string. `atob(encodedStr)` takes a base64-encoded string and returns the original string.

Please note that `btoa()` and `atob()` are not available in Node.js by default. They are part of the Web API provided by browsers. If you need to use base64 encoding/decoding in Node.js, you can use the `Buffer` object:

```javascript
let str = "Hello, World!";
let encodedStr = Buffer.from(str).toString("base64");
console.log(encodedStr); // Outputs: 'SGVsbG8sIFdvcmxkIQ=='

let decodedStr = Buffer.from(encodedStr, "base64").toString();
console.log(decodedStr); // Outputs: 'Hello, World!'
```

In this Node.js example, `Buffer.from(str).toString('base64')` takes a string and returns a base64-encoded string. `Buffer.from(encodedStr, 'base64').toString()` takes a base64-encoded string and returns the original string.
