// main.js

// Execute code after the DOM (Document Object Model) is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript logic goes here

    // Example: Fetch data from an API (replace with your actual API endpoint)
    fetch('https://api.example.com/farmers')
        .then(response => response.json())
        .then(data => {
            // Process the data (e.g., display farmer profiles)
            displayFarmers(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Example: Handle user interactions (e.g., button clicks)
    const exploreButton = document.querySelector('.cta-button');
    exploreButton.addEventListener('click', function () {
        // Redirect to the Farmers page or perform other actions
        window.location.href = 'farmers.html';
    });
});

// Example function to display farmer profiles
function displayFarmers(farmersData) {
    const farmersContainer = document.getElementById('farmers-list');

    // Loop through the data and create HTML elements for each farmer
    farmersData.forEach(farmer => {
        const farmerCard = document.createElement('div');
        farmerCard.classList.add('farmer-card');
        farmerCard.innerHTML = `
            <h3>${farmer.name}</h3>
            <p>Land Size: ${farmer.landSize} acres</p>
            <p>Crops: ${farmer.crops.join(', ')}</p>
        `;
        farmersContainer.appendChild(farmerCard);
    });
}