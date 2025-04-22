const output = document.getElementById("output");

const url = "https://jsonplaceholder.typicode.com/photos";

async function getData() {
  try {
    const response = await fetch(url);

    // Check if the response is successful
    if (response.ok) {
      const data = await response.json();

      // Loop through the first 50 photos and create image elements
      data.slice(0, 50).forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.thumbnailUrl;
        img.alt = photo.title; // Add an alt text for accessibility
        img.style.margin = "10px"; // Add some space between images
        output.appendChild(img);
      });
    } else {
      // Handle server errors
      const errorP = document.createElement("p");
      errorP.textContent = `Server Error: ${response.status}`;
      output.appendChild(errorP);
    }
  } catch (error) {
    // Handle any fetch errors
    const newP = document.createElement("p");
    newP.textContent = `Fetch Error: ${error.message}`;
    output.appendChild(newP);
  }
}

getData();
