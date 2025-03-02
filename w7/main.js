import { renderTBL} from "./render.js";
const FORM = document.getElementById("form");
const cfpData = [];


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


FORM.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = parseInt(FORM.housem.value);  // Convert to number
    const houseSize = FORM.houses.value.toLowerCase();  // Ensure lowercase for comparison
    start(firstName, lastName, houseMembers, houseSize);
    OUTPUT.innerHTML = "";
   // displayOutput();
    renderTBL(cfpData);
    FORM.reset();
});

// What actually model does to a webpage why we need it?