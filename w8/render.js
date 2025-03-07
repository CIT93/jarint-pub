const TBL = document.getElementById("tab-data");

// Function to render table heading
function renderTblHeading() {
  const table = document.createElement("table"); // Create table
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "FirstName",
    "LastName",
    "Household",
    "HouseSize",
    "Footprint",
    "Action",
  ]; // Table headers
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function renderTblbtn(index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  // Event listener for "Del" button
  btnDel.addEventListener('click', function () {
    data.splice(index, 1);
    renderTBL(data); // Re-render the table after deletion
  });

  // Event listener for "Edit" button
  btnEdit.addEventListener('click', function () {
    const formFields = document.querySelectorAll("form input");
    const objToEdit = data[index];

    formFields[0].value = objToEdit.firstname; 
    formFields[1].value = objToEdit.lastname;  
    formFields[2].value = objToEdit.household; 
    formFields[3].value = objToEdit.housesize; 
    formFields[4].value = objToEdit.footprint; 

    document.getElementById("saveButton").dataset.index = index;
  });

  return td;
}

// Function to render table body
function renderTblBody(data) {
  const tbody = document.createElement("tbody");
  if (data.length > 0) {
    data.forEach(function (obj, index) {
      const tr = document.createElement("tr");
      for (const [key, value] of Object.entries(obj)) {
        if (key !== "lastname" && key !== "houseMPTS" && key !== "houseSPTS") {
          const td = document.createElement("td");
          td.textContent = value;
          tr.appendChild(td);
        }
      }
      const td = renderTblbtn(index, data); // Get action buttons for each row
      tr.appendChild(td);
      tbody.appendChild(tr);
    });
  }
  return tbody;
}

// Main function to render the entire table
function renderTBL(data) {
  TBL.innerHTML = ''; // Clear the table before re-rendering

  if (data.length > 0) {
    const table = renderTblHeading();  // Render heading
    const tbody = renderTblBody(data); // Render body with data
    table.appendChild(tbody); // Append body to table
    TBL.appendChild(table);  // Append table to DOM
  }
}

// Form submission handler (for adding or updating data)
document.getElementById("saveButton").addEventListener("click", function () {
  const formFields = document.querySelectorAll("form input");
  const index = this.dataset.index; // Get the index of the object being edited
  const updatedData = {
    firstname: formFields[0].value,
    lastname: formFields[1].value,
    household: formFields[2].value,
    housesize: formFields[3].value,
    footprint: formFields[4].value,
  };

  if (index !== undefined) {
    data[index] = updatedData;
  } else {
    data.push(updatedData);
  }

  renderTBL(data);

export { renderTBL };
