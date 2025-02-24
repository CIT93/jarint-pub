// const cfpData = [];

// function determineHouseSizePts(size) {
//   let houseSizePoints = 0;
//   if (size === "large") {
//     houseSizePoints = 10;
//   } else if (size === "medium") {
//     houseSizePoints = 7;
//   } else if (size === "small") {
//     houseSizePoints = 4;
//   } else if (size === "apt") {
//     houseSizePoints = 2;
//   }
//   return houseSizePoints;
// }

// function determineHouseHoldPts(numberInHousehold) {
//   let houseHoldPoints = 0;
//   if (numberInHousehold === 1) {
//     houseHoldPoints = 14;
//   } else if (numberInHousehold === 2) {
//     houseHoldPoints = 12;
//   } else if (numberInHousehold === 3) {
//     houseHoldPoints = 10;
//   } else if (numberInHousehold === 4) {
//     houseHoldPoints = 8;
//   } else if (numberInHousehold === 5) {
//     houseHoldPoints = 6;
//   } else if (numberInHousehold === 6) {
//     houseHoldPoints = 4;
//   } else if (numberInHousehold > 6) {
//     houseHoldPoints = 2;
//   }
//   return houseHoldPoints;
// }

// function displayOutObj(obj) {
//   console.log(obj);
//   const output = document.getElementById("output");
//   const newP = document.createElement("p");
//   const newH2 = document.createElement("h2");
//   newH2.textContent = `Carbon Footprint is ${obj.cfpTotal}`;
//   const newH3 = document.createElement("h3");
//   newH3.textContent = `Based on Number in Household and Size of Home.`
//   newP.textContent = `This number is based on the number of members in the home of ${obj.houseM} (score: ${obj.houseMPTS})`;
//   newP.textContent += `and a ${obj.houseS} size of home (score: ${obj.houseSPTS})`;
//   output.appendChild(newH2);
//   output.appendChild(newH3);
//   output.appendChild(newP);
// }

// function start(houseHoldMembers, houseSize) {
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const houseSizePts = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + houseSizePts;
//   cfpData.push({
//     houseM: houseHoldMembers,
//     houseS: houseSize,
//     houseMPTS: houseHoldPTS,
//     houseSPTS: houseSizePts,
//     cfpTotal: total,
//   });

// }



// function displayOutput() {
//     for (obj of cfpData) {
//         console.log(obj)
//         const output = document.getElementById("output");
//         const newP = document.createElement("p");
//         const newH2 = document.createElement("h2");
//         newH2.textContent = `Carbon Footprint is ${obj.cfpTotal}`
//         const newH3 = document.createElement("h3");
//         newH3.textContent = `Based on Number in Household and Size of Home.`
//         newP.textContent = `This number is based on the number of members in the home of ${obj.houseM} (score: ${obj.houseMPTS})`;
//         newP.textContent += `and a ${obj.houseS} size of home (score: ${obj.houseSPTS})`;
//         output.appendChild(newH2);
//         output.appendChild(newH3);
//         output.appendChild(newP);
//     }
// }

// start(1, "apt");
// start(2, "apt");
// start(3, "apt");
// start(4, "apt");
// start(5, "apt");
// start(6, "apt");
// start(7, "apt");
// start(1, "small");
// start(2, "small");
// start(3, "small");
// start(4, "small");
// start(5, "small");
// start(6, "small");
// start(7, "small");
// start(1, "medium");
// start(2, "medium");
// start(3, "medium");
// start(4, "medium");
// start(5, "medium");
// start(6, "medium");
// start(7, "medium");
// start(1, "large");
// start(2, "large");
// start(3, "large");
// start(4, "large");
// start(5, "large");
// start(6, "large");
// start(7, "large");


// displayOutput();
const moviesArr = [
  { title: "Inception", year: "2010", rating: "8.8/10", watched: 3 },
  { title: "The Dark Knight", year: "2008", rating: "9.0/10", watched: 6 },
  { title: "Interstellar", year: "2014", rating: "8.6/10", watched: 2 },
  { title: "The Room", year: "2003", rating: "3.7/10", watched: 1 },
];

function recommendMovie(movie) {
  const rating = parseFloat(movie.rating); // Convert rating to a number

  return (rating > 6 && movie.watched < 5) || rating < 7;
}

function displayOutputMovies() {
  const output = document.getElementById("output");
  output.innerHTML = ""; 

  moviesArr.forEach((movie) => {
    if (recommendMovie(movie)) {
      const newH2 = document.createElement("H2");
      newH2.textContent = `🎬 "${movie.title}" (Released: ${movie.year}) | ⭐ ${movie.rating} | Watched: ${movie.watched} times`;
      output.appendChild(newH2);
    }
  });
}

displayOutputMovies();
