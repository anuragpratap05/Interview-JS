1. **What is a closure in JavaScript and can you provide an example?**
   A closure in JavaScript is a function that has access to its own scope, the outer function's scope, and the global scope. It has access to variables from these three scopes even after the outer function has finished execution. Here's an example:
   ```javascript
   function outerFunction(outerVariable) {
     return function innerFunction(innerVariable) {
       console.log('outerVariable:', outerVariable);
       console.log('innerVariable:', innerVariable);
     }
   }
   const newFunction = outerFunction('outside');
   newFunction('inside');


9. **Can you explain what 'hoisting' is in JavaScript?**
   Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code has been executed. It's important to note that only the declarations are hoisted, not initializations. If a variable is declared and initialized after using it, the value will be `undefined`.

   4. **What is sharding in MongoDB? Why is it important?**
   Sharding is a method for distributing data across multiple machines. MongoDB uses sharding to support deployments with very large data sets and high throughput operations. It's important because it allows MongoDB to scale horizontally, which is more cost-effective and can provide higher availability than vertical scaling.

5. **How does indexing work in MongoDB? Why is it important?**
   Indexing in MongoDB works by creating special data structures that hold a small portion of the collection’s data set. This makes the database engine's process of query resolution more efficient. Indexing is important because it significantly speeds up data retrieval operations on a database. Without indexing, MongoDB would have to scan every document in a collection to select those that match the query statement.