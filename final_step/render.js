// render.js
import { userEntries } from "./global.js";

export function fillFormForEdit(entry) {
  document.getElementById("firstName").value = entry.firstName;
  document.getElementById("householdSize").value = entry.householdSize;
  document.getElementById("isEcoFriendly").checked = entry.isEcoFriendly;
}

export function generateRecommendation(entry) {
  return entry.isEcoFriendly
    ? "Eco-friendly habits!"
    : "Consider adopting eco-friendly habits.";
}

export function renderEntries(saveFn) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h3>User Recommendations:</h3>";

  if (userEntries.length === 0) {
    outputDiv.innerHTML += "<p>No entries available.</p>";
    return;
  }

  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  const headers = ["First Name", "Household Size", "Eco-Friendly", "Recommendation", "Actions"];

  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  userEntries.forEach((entry, index) => {
    const row = document.createElement("tr");

    Object.values(entry).forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      row.appendChild(td);
    });

    const tdRec = document.createElement("td");
    tdRec.textContent = generateRecommendation(entry);
    row.appendChild(tdRec);

    const tdActions = document.createElement("td");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => {
      userEntries.splice(index, 1);
      renderEntries(saveFn);
      fillFormForEdit(entry);
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      userEntries.splice(index, 1);
      renderEntries(saveFn);
      saveFn();
    };

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);
    row.appendChild(tdActions);

    table.appendChild(row);
  });

  outputDiv.appendChild(table);
}
