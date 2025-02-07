const CFPDATA = [];
function calculatePoints(numberInHousehold) {

    let houseHoldPoints = 0;

    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    }
    return houseHoldPoints; // Returning the value
}

function determineHouseSizePts(houseSize) {

    let houseSizePoints = 0; // Local variable instead of a global one

    switch (houseSize) {
        case "large":
            houseSizePoints = 10;
            break;
        case "medium":
            houseSizePoints = 7;
            break;
        case "small":
            houseSizePoints = 4;
            break;
        case "apartment":
            houseSizePoints = 2;
            break;
        default:
            console.log("Invalid house size");
    }

    return houseSizePoints; // Returning the calculated points
}

console.log("global scope");

function start(houseHoldMembers, houseSize) {  
    const houseHoldPTS = calculatePoints(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const totalPoints = houseHoldPTS + houseSizePTS; // Adding both points
    CFPDATA.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, totalPoints])
}

function displayOutput(){
    
}
start(5, "small");
start(4, "large");
start(3, "medium");

displayOutput();


