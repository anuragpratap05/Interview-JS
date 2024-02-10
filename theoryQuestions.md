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