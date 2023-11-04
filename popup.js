
// Function to open the current page's link in a popup window
function openLinkInPopup() {
    // Get the current active tab's URL
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentUrl = tabs[0].url;
        // Set the URL of the popup window to the current page's URL
        window.open(currentUrl, 'NewPopup', 'width=800,height=600,resizable=yes,scrollbars=yes');
    });
}

// Function to update the transparency of the web content based on the slider value
function updateTransparency(value, popupWindow) {
    const opacity = value / 100;
    const iframe = popupWindow.document.getElementById('webContent');
    const webContent = iframe.contentDocument.body; // Access the content inside the iframe
    iframe.style.opacity = opacity;
    webContent.style.opacity = opacity; // Set opacity for the content inside the iframe
    popupWindow.document.getElementById('transparencyValue').textContent = value + '%';
}
// Add an event listener for the transparency slider
const slider = document.getElementById('transparencySlider');
slider.addEventListener('input', function () {
    updateTransparency(this.value);
});

// // Add an event listener to load the webpage from the active tab when the extension is clicked
// loadActiveTabWebpage();

// Add an event listener for the "Open New Popup" button
const openNewPopupButton = document.getElementById('openNewPopupButton');
openNewPopupButton.addEventListener('click', openLinkInPopup);
// let t =0;
// if(t==0){
//     openLinkInPopup();
//     t++;
// }