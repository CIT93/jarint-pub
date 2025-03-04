import { renderTbl } from "./render.js";
import { cfpData, determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";


const myHeading = document.querySelector("h1");
myHeading.textContent = "coding week 7";
const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");


function start(houseMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseMembers);
    const houseSizePts = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePts;
    console.log(total);
    cfpData.push({
        houseM: houseMembers,
        houseS: houseSize,
        houseMPTS: houseHoldPTS,
        houseSPTS: houseSizePts,
        cfpTotal: total,
    })
}

start();

// we got the error for the td because we created the td element inside the loop instead of outside the loop, it was blocked specifically to that loop and not the whole thing but if you move it outside the loop i bet it would work

FORM.addEventListener("submit", function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseSize = FORM.housesize.value;
    const houseMembers = parseInt(FORM.housemembers.value);
    console.log(houseMembers, houseSize);
    start(houseMembers, houseSize);
    OUTPUT.innerHTML = "";
    renderTbl();
    FORM.reset();
});