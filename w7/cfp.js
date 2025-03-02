const cfpData = [];

function determineHouseSizePts(houseSize) {
    let houseSizePoints = 0;
    if (houseSize === "large") {
        houseSizePoints = 10;
    } else if (houseSize === "medium") {
        houseSizePoints = 7;
    } else if (houseSize === "small") {
        houseSizePoints = 4;
    } else if (houseSize === "apartment") {
        houseSizePoints = 2;
    }
    return houseSizePoints;
}

function determineHouseHoldPts(houseMembers) {
    let houseHoldPoints = 0;
    if (houseMembers === 1) {
        houseHoldPoints = 14;
    } else if (houseMembers === 2) {
        houseHoldPoints = 12;
    } else if (houseMembers === 3) {
        houseHoldPoints = 10;
    } else if (houseMembers === 4) {
        houseHoldPoints = 8;
    } else if (houseMembers === 5) {
        houseHoldPoints = 6;
    } else if (houseMembers === 6) {
        houseHoldPoints = 4;
    } else if (houseMembers > 6) {
        houseHoldPoints = 2;
    }
    return houseHoldPoints;
}

export {cfpData, determineHouseHoldPts, determineHouseSizePts}