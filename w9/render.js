import{FORM, TBL} from "./global.js";
import { saveLS } from "./storage.js";
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

function onUpdate(index, data){
  data.splice(index, 1);
  saveLS(data);
  renderTBL(data);

}
function renderTblbtn(obj, index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener('click', function (e) {
    onUpdate(index, data);

  })
  btnEdit.addEventListener('click', function(e){
  FORM[1].value = obj.firstName;
  FORM[2].value = obj.lastName;
  FORM[3].value = obj.houseM;
  FORM[4].value = obj.houses;
 onUpdate(index, data);
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
    const td = renderTblbtn(obj, index, data); // Get the action buttons
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

function renderTBL(data) {
  TBL.innerHTML= "";
  if(data.length !== 0){
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody); // Append tbody to the table
    TBL.appendChild(table); // Append the table to the DOM 
  }
}

export { renderTBL };


