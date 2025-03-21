# Understanding of the Code

## Overview
This project is designed to calculate and display a user's Carbon Footprint Points based on their household size and home type. The application consists of multiple JavaScript modules (`main.js`, `render.js`, `cfp.js`) and an HTML form to collect user input.

## Code Breakdown

### **1. main.js**
- **Imports**: The script imports functions from `cfp.js` (for calculating points) and `render.js` (for updating the table).
- **Setting Up the Heading**: Changes the `<h1>` tag to display "Coding Week 7".
- **References to Elements**:
  - `FORM` - Selects the form element.
  - `OUTPUT` - Selects the div where output is displayed.
- **start() Function**:
  - Takes in `firstName`, `lastName`, `houseMembers`, and `houseSize`.
  - Calls `determineHouseHoldPts()` and `determineHouseSizePts()` to calculate the total Carbon Footprint Points.
  - Stores user data inside `cfpData`.
  - Calls `renderTbl()` to update the table.
- **Event Listener on Form Submission**:
  - Prevents default form submission.
  - Extracts input values.
  - Calls `start()` with input values.
  - Resets the form after submission.

### **2. cfp.js**
- **Stores `cfpData`** - An array that holds user data.
- **`determineHouseSizePts()`** - Assigns points based on house size.
- **`determineHouseHoldPts()`** - Assigns points based on the number of household members.
- **Exports these functions** for use in `main.js`.

### **3. render.js**
- **`renderTableHead()`**:
  - Creates a `<thead>` element for the table.
  - Defines column headings (Name, Household Members, House Size, Carbon Footprint, Actions).
  - Returns the table header.
- **`renderTbl(data)`**:
  - Selects the table container (`tab-data`).
  - Clears previous table content.
  - Creates a new `<table>` if it doesn’t exist.
  - Iterates over `data` (user submissions) and creates rows dynamically.
  - Adds a "Delete" button to remove a specific entry from `cfpData`.
  - Calls itself after deletion to refresh the table.


## **Feedback on the Video**
- **Was it helpful?**
  - The video provided useful insights into debugging with Chrome DevTools.
  - Seeing the execution flow in real-time helped reinforce understanding of function calls and data updates.
- **Suggestions for improvement:**
  - More examples of common debugging scenarios would be helpful.
  - It would be beneficial to see how to debug and fix an issue rather than just stepping through working code.
  - The explanation was clear, but at some points, the discussion of variable naming could have been structured better to avoid confusion.
  - Highlighting the connection between the modules earlier would have made the flow easier to follow.

# Coding Challenge: Conditionally Iterate Over an Object

In this challenge, I used `Object.entries()` to convert an object into key-value pairs and iterated over them with a `for...of` loop. I applied conditions to only render specific values (e.g., `firstName` and `cfpTotal`) in a dynamically created table. The solution allows for easy customization to include or exclude other properties as needed.

## Editing Data in the Table

To edit data in the table, follow these steps:

1. **Click on the "Edit" Button**:
   - Each row in the table has an "Edit" button in the last column.
   - When you click the "Edit" button, the current values of that row will be replaced by editable input fields, allowing you to modify them.

2. **Modify the Values**:
   - Once the "Edit" button is clicked, the text content of the row is replaced by input fields.
   - Edit the values as needed in the input fields.

3. **Save Changes**:
   - After modifying the values, the "Edit" button will change to "Save".
   - Click the "Save" button to save the changes.

4. **Data Update**:
   - The modified data will be saved, and the table will be updated with the new values.
   - The table will automatically re-render to reflect the updated data.
   

# Week 10 - JavaScript Functions and Hoisting

## Overview

In Week 10, I focused on understanding important JavaScript concepts related to functions, hoisting, and the use of the `return` statement. I explored how JavaScript handles functions and how the interpreter processes code before executing it. This week was especially helpful for clearing up confusion around hoisting and function expressions.

## Key Concepts I Learned

### 1. **Hoisting in JavaScript**
- **Hoisting** is when the JavaScript engine moves function declarations and variable declarations to the top of their scope before the code is executed.
- This means I can call functions even before they are defined in the code.
- 

#### Example:
```javascript
console.log(myFunction()); 
function myFunction() {
  return "Hello!";
}
```
### Spread Operator
The spread operator (...) allows me to pass multiple arguments into a function as an array. This is useful when I don't know how many arguments will be passed, or if I want to process a list of values.

### Immediately Invoked Function Expressions (IIFE)
An IIFE is a function that runs as soon as it is defined. This can be used to create isolated scopes to prevent variable conflicts.

### Passing by Value vs Passing by Reference
In JavaScript, primitive types (like numbers, strings) are passed by value, meaning they are copied when passed to a function. Objects, however, are passed by reference, meaning changes made to an object inside a function will reflect outside.

## Note on Default Parameters and Spread Operator
This week, I learned about default values in function parameters. This concept allows me to handle edge cases in my code, ensuring that if a value is not passed to a function, a default is provided. This helps to make my code more resilient and less prone to errors.

Additionally, I explored the spread operator (...) in JavaScript, which allows me to pass multiple values into a function as an array. This makes handling dynamic numbers of arguments more manageable and is a powerful tool when working with functions that require a variable number of parameters.

I also encountered a scenario where a default value is helpful in preventing errors. By using a default value, I can ensure that a function always has something to work with, even if a value is missing. This is particularly useful for handling missing or undefined inputs without causing errors in the program.

### What I Learned
This week’s lesson on JavaScript functions helped me understand how to define, call, and manage functions more effectively. The key takeaway for me was the use of default parameters and the spread operator, which provide flexibility and resilience in my functions. Understanding hoisting helped clarify some of the issues I had with function declarations and calls.

I also learned how to make my functions more robust by thinking about edge cases, ensuring they work in all scenarios, even if certain parameters are missing. This knowledge will make my code more efficient and less prone to errors.

