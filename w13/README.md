# Functions

Parameters are variables that are used in the function and only can be used in the function (no scope outside of function), while arguments are variables we pass into the function when we call it. I used the word parameter and argument interchangeably, but now I know the difference. I already understood that we needed to declare and assign a variable to a function call to capture the return value.

## Default Value

A default value is a fallback value assigned to a function parameter if no argument is passed in. This helps avoid errors and makes your function more flexible.

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet("Jarin"); // Hello, Jarin!
