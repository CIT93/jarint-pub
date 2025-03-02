
const TBL = document.getElementById("tab-data");
const OUTPUT = document.getElementById("output");

function renderTblHeading (){
    const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingText = ["Name", "HouseHold", "HouseSize", "Footprint", "Action"]; 
    headingText.forEach(function(text){
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
  }
  
  function renderTBL(data){
  
  const table = renderTblHeading();
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  const trTextArr = ["Jerin", 3, "Large", 20, "Edit/Del"];
  trTextArr.forEach(function(text){
    const td = document.createElement("td");
    td.textContent = text;
    tr.appendChild(td);
  
  })
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  tr.appendChild(td);
  tbody.appendChild(tbody);
  table.appendChild(tr);
  TBL.appendChild(table);
  }
  export {renderTBL, renderTblHeading};