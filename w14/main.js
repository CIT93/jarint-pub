const output = document.getElementById("output");
const url = "https://picsum.photos/v2/list";

async function getData() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      // Clear previous content if needed
      output.innerHTML = "";

      // Limit to first 20 photos
      data.slice(0, 20).forEach(photo => {
        const img = document.createElement("img");
        img.src = `https://picsum.photos/id/${photo.id}/400/400`;
        img.alt = photo.author;
        img.loading = "lazy"; // improves performance
        img.classList.add("photo"); // add class for styling
        output.appendChild(img);
      });
    } else {
      output.innerHTML = `<p>Server Error: ${response.status}</p>`;
    }
  } catch (error) {
    output.innerHTML = `<p>Fetch Error: ${error}</p>`;
  }
}

getData();
