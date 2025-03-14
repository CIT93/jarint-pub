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
   
