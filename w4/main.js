const CFPDATA = [];
function calculatePoints(numberInHousehold) {
    console.log("inside the block scope");

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


function start(houseHoldMembers, houseSize) {  
    const houseHoldPTS = calculatePoints(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const totalPoints = houseHoldPTS + houseSizePTS; // Adding both points
    CFPDATA.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, totalPoints])
}

function displayOutput() {
    for (Array of CFPDATA) {
        console.log(Array)
        const output = document.getElementById("output");
        const newP = document.createElement("p");
        newP.textContent = `Total amount of people in your home: ${Array[0]}, Size of your home: ${Array[1]}, carbon footprint based on members in your home: ${Array[2]}, carbon footprint based on homesize: ${Array[3]}, total carbon footprint: ${Array[4]}`;
        output.appendChild(newP)
    }
}
start(5, "large");
start(4, "large");
start(3, "large");
start(2, "large");
start(1, "large");
start(1, "medium");
start(4, "medium");
start(5, "medium");
start(1, "small");
start(2, "small");
start(3, "small");
start(4, "small");
start(2, "apartment");
start(3, "apartment");
start(4, "apartment");
start(5, "apartment");

displayOutput();


