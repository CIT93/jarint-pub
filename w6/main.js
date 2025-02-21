const FORM = document.getElementById("form");
const cfpData = [];
const OUTPUT = document.getElementById("output");


function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") houseSizePoints = 10;
  else if (size === "medium") houseSizePoints = 7;
  else if (size === "small") houseSizePoints = 4;
  else if (size === "apt") houseSizePoints = 2;
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) houseHoldPoints = 14;
  else if (numberInHousehold === 2) houseHoldPoints = 12;
  else if (numberInHousehold === 3) houseHoldPoints = 10;
  else if (numberInHousehold === 4) houseHoldPoints = 8;
  else if (numberInHousehold === 5) houseHoldPoints = 6;
  else if (numberInHousehold === 6) houseHoldPoints = 4;
  else if (numberInHousehold > 6) houseHoldPoints = 2;
  return houseHoldPoints;
}

function start(firstName, lastName, houseMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  
  cfpData.push({
    firstName,
    lastName,
    houseM: houseMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfpTotal: total,
  });
}

function displayOutput() {
  cfpData.forEach(obj => {
    const newP = document.createElement("p");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint for ${obj.firstName} ${obj.lastName} is ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on Number in Household and Size of Home.`;
    newP.textContent = `Members in the home: ${obj.houseM} (score: ${obj.houseMPTS})`;
    newP.textContent += ` and a ${obj.houseS} home (score: ${obj.houseSPTS})`;
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP);
  });
}

FORM.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = parseInt(FORM.housem.value);  // Convert to number
    const houseSize = FORM.houses.value.toLowerCase();  // Ensure lowercase for comparison
    start(firstName, lastName, houseMembers, houseSize);
    OUTPUT.innerHTML = "";
    displayOutput();
    FORM.reset();
});

