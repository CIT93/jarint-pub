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


