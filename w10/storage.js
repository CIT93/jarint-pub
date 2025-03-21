// Arrow function to retrieve data from localStorage
const getLS = () => {
    const retrievedArr = localStorage.getItem("cfp");
    return retrievedArr !== null ? JSON.parse(retrievedArr) : [];
};

const cfpData = getLS();

// Arrow function to save data to localStorage
const saveLS = (cfpData) => {
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArr);
};

export { cfpData, saveLS };
