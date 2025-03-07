import { renderTBL} from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts} from "./cfp.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];


function start(first, last, houseMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstName : first,
    lastName: last,
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
    renderTBL(cfpData,);
    FORM.reset();
})
