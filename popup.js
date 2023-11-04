// Function to update the transparency based on the slider value
function updateTransparency(value) {
    const opacity = value / 100;
    const iframe = document.getElementById('webContent');
    iframe.style.opacity = opacity;
    document.getElementById('transparencyValue').textContent = value + '%';
}

// Function to load the webpage from the active tab
function loadActiveTabWebpage() {
    getActiveTabUrl(function(url) {
        const iframe = document.getElementById('webContent');
        iframe.src = url;
    });
}

// Add an event listener for the transparency slider
const slider = document.getElementById('transparencySlider');
slider.addEventListener('input', function () {
    updateTransparency(this.value);
});

// Load the webpage from the active tab when the extension is clicked
loadActiveTabWebpage();
