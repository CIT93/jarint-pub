const cfpData = getLS();

function saveLS(cfpData) {
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem('cfpData', serializedArr);
}

function getLS() {
    const retrievedArr = localStorage.getItem("cfpData");
    if (retrievedArr !== null) {  // Use 'null' (lowercase) here
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }
}

export { cfpData, saveLS, getLS };
