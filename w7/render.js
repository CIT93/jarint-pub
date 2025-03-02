const TBL = document.getElementById("tab-data");



function renderTableHead() {
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArray = ["name", "footprint"];
    headingTextArray.forEach(function(text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    // table.appendChild(thead);
    return thead;
}

function renderTbl(data) {
    let table = TBL.querySelector("table");
    if (!table) {
        table = document.createElement("table");
        TBL.appendChild(table);
    }
    if (!table.querySelector("thead")) {
        const thead = renderTableHead();
        table.appendChild(thead);
    }
    const tbody = table.querySelector("tbody") || document.createElement("tbody");
    const tr = document.createElement("tr");
    // const trTextArray = ["alison grow", 3, "small", 14];
    data.forEach(function(text) {
        const td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
        const tdName = document.createElement("td");
        tdName.textContent = data.firstName;
        const tdTotal = document.createElement("td");
        tdTotal.textContent = data.cfpTotal;
        tr.appendChild(tdTotal);
        tr.appendChild(tdName);
    });
    const firstName = FORM.firstname.value;
    const cfpTotal = FORM.total.value;
    const td = document.createElement("td");
    // const buttonEdit = document.createElement("button");
    // buttonEdit.textContent = "edit";
    // const buttonDelete = document.createElement("button");
    // buttonDelete.textContent = "delete";
    // td.appendChild(buttonEdit);
    // td.appendChild(buttonDelete);
    tr.appendChild(td);
    tbody.appendChild(tr);
    if (!table.querySelector("tbody")) {
        table.appendChild(tbody);
    }
}



export { renderTbl, renderTableHead };

// I don't have many questions about modules. I learned how to import and export them during my time at Bitwise, so I have some experience with how they work and their purpose. However, I did encounter a minor issue when importing the module in the main.js file. The Emmet abbreviation automatically generated the import statement for the render file, but it did not include the .js extension. I had to manually add it myself. Will I always need to do this in the future, or is there a way to resolve this automatically?

