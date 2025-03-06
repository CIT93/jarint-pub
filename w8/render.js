const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  const table = document.createElement("table"); // Create table here first
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "FirstName",
    "LastName",
    "Household",
    "HouseSize",
    "Footprint",
    "Action",
  ]; // Define the table headers
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

  // Event listener for the "Del" button
  btnDel.addEventListener('click', function () {
    // Remove the corresponding data from the array
    data.splice(index, 1);

    // Re-render the table after deletion
    renderTBL(data);
  })
  btnEdit.addEventListener('click', function(e){

  })
  return td;
}

function renderTblBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastname" && key !== "houseMPTS" && key !== "houseSPTS") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const td = renderTblbtn(index, data); // Get the action buttons
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

function renderTBL(data) {
  TBL.innerHTML = ''; // Clear existing table before rendering the new one
  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  table.appendChild(tbody); // Append tbody to the table
  TBL.appendChild(table); // Append the table to the DOM
}

export { renderTBL };


