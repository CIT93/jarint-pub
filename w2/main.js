console.log("week 2 - carbon footprint");

// 1. Count the members of household.
const myHouseMembers = 4;
// 2. Consider the size of home.
const myHouseSize = 3;
// 3. Evaluate  food choice.
const myFoodChoice = 18;
// 4. Examine  water consumption.
const myWaterConsumption = 3;
// 5. Determine how many household purchases  make each year.
const myPurchases = 2;
// 6. Consider how much waste  produce.
const myWasteProduced = 40;
// 7. Identify the amount of waste that  recycle.
const myWasteRecycled = 16;
// 8. Tally up  annual transportation scores.
const myTransport = 0;
// 9. Total points.
const myTotal = myHouseMembers + myHouseSize + myFoodChoice + myWaterConsumption + myPurchases + myWasteProduced + myWasteRecycled + myTransport;
// 10. Write JS to update the rendered html (index.html) with total footprint
const myHeading = document.querySelector("h2");
myHeading.textContent = "My total is point " + myTotal;