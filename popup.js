// In popup.js

// Function to adjust transparency based on the slider value
function adjustTransparency() 
{
    const slider = document.getElementById('transparencySlider');
    const transparencyValue = document.getElementById('transparencyValue');
    const webContentDiv = document.getElementById('webContent');

    // Get the slider value and update transparency
    const value = slider.value;
    const opacity = value / 100;
    transparencyValue.innerText = value + '%';

    // Apply transparency to the web content
    webContentDiv.style.opacity = opacity;
}

// Function to load web content into the "webContent" div
function loadWebContent(url) 
{
    const webContentDiv = document.getElementById('webContent');

    // Create an iframe element to display the website content
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none'; // Remove iframe border
    iframe.setAttribute('allow', 'geolocation'); // Optional: Allow geolocation access

    // Append the iframe to the "webContent" div
    webContentDiv.appendChild(iframe);
}

// Add an event listener for the slider to adjust transparency
const slider = document.getElementById('transparencySlider');
slider.addEventListener('input', adjustTransparency);

// Example URL (replace with active URL)
const websiteURL = 'https://www.google.com';

// Load the web content and set an initial transparency value
loadWebContent(websiteURL);
adjustTransparency(); // Set initial transparency based on the slider value
