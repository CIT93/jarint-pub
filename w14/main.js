const output = document.getElementById("output");
const url = "https://picsum.photos/v2/list";

async function getData() {
  try {
    const response = await fetch(url);
    
    if (response.ok) {
      const data = await response.json();

      // Limit to first 20 photos to avoid overloading the browser
      data.slice(0, 20).forEach(photo => {
        const img = document.createElement("img");
        img.src = `https://picsum.photos/id/${photo.id}/400/400`;
        img.alt = photo.author;
        img.style.margin = "10px";
        output.appendChild(img);
      });
    } else {
      const errorP = document.createElement("p");
      errorP.textContent = `Server Error: ${response.status}`;
      output.appendChild(errorP);
    }
  } catch (error) {
    const newP = document.createElement("p");
    newP.textContent = `Fetch Error: ${error}`;
    output.appendChild(newP);
  }
}

getData();