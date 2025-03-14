import { renderTBL } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData, getLS } from "./storage.js";

window.onload = function() {
  const storedData = getLS();  
  renderTBL(storedData);       
};

function start(first, last, houseMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;

  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfpTotal: total,
  });
}

FORM.addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  
  // Custom form validation: Check if first and last names are provided
  if (firstName === "" || lastName === "") {
    alert("Please enter both your first and last names.");
    return; // Stop form submission if names are missing
  }

  const houseMembers = parseInt(FORM.housem.value); 
  const houseSize = FORM.houses.value.toLowerCase(); 

  start(firstName, lastName, houseMembers, houseSize);

  saveLS(cfpData); 
  renderTBL(cfpData); 
  
  FORM.reset(); 
});
