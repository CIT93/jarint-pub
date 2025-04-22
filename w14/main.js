const OUTPUT = document.getElementById("output");

const fetchData = async (url) => {
    try {
        const response = await fetch(url);

        // Handle server errors
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Handle data errors
        const data = await response.json();
        return data;
    } catch (error) {
        // Display error messages
        OUTPUT.innerHTML = `<h3 class="error">Error: ${error.message}</h3>`;
    }
};

const renderData = (data) => {
    OUTPUT.innerHTML = ""; // Clear previous data

    if (data && data.length > 0) {
        data.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("data-item");
            div.innerHTML = `
                <h4>${item.title}</h4>
                <p>${item.body}</p>
            `;
            OUTPUT.appendChild(div);
        });
    } else {
        OUTPUT.innerHTML = "<h3>No data found!</h3>";
    }
};

// Fetching posts data
const endpoint = "https://jsonplaceholder.typicode.com/posts";
fetchData(endpoint).then(data => renderData(data));

// Simulate a call to a non-existent endpoint for error handling
const invalidEndpoint = "https://jsonplaceholder.typicode.com/invalidendpoint";
fetchData(invalidEndpoint);
