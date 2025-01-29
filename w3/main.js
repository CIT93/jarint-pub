let carbonFootprintPoints = 0;  

function calculatePoints(numberInHousehold) {
    console.log("Inside the function");

    if (numberInHousehold === 1) {
        carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if (numberInHousehold === 2) {
        carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHousehold === 3) {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (numberInHousehold === 4) {
        carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if (numberInHousehold === 5) {
        carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if (numberInHousehold === 6) {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInHousehold > 6) {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }

    console.log(
        `Based on the number of members in the household of ${numberInHousehold}, the points would be ${carbonFootprintPoints}`
    );
}

function determineHouseSizePts(houseSize) {
    console.log("Inside the function for house size");

    switch (houseSize) {
        case "large":
            carbonFootprintPoints += 10;
            break;
        case "medium":
            carbonFootprintPoints += 7;
            break;
        case "small":
            carbonFootprintPoints += 4;
            break;
        case "apartment":
            carbonFootprintPoints += 2;
            break;
        default:
            console.log("Invalid house size");
            return;
    }

    console.log(`If your house size is ${houseSize}, then your points is ${carbonFootprintPoints} in total.`);
}

// global scope
calculatePoints(3);
calculatePoints(4);
determineHouseSizePts("small");
