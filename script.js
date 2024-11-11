// Get elements
const acceptButton = document.getElementById('accept-button');
const termsCheckbox = document.getElementById('terms-checkbox');
const modalBox = document.getElementById('modal-box');
const connectionMessage = document.getElementById('connection-message');
const loadingSpinner = document.getElementById('loading-spinner');

// Enable the accept button when the checkbox is checked
termsCheckbox.addEventListener('change', function() {
    acceptButton.disabled = !termsCheckbox.checked;
});

// Show modal when the login button is clicked
document.getElementById('button-login').addEventListener('click', function() {
    modalBox.style.display = 'flex';
});

// When the accept button is clicked
acceptButton.addEventListener('click', () => {
    // Show the loading spinner
    loadingSpinner.style.display = 'block';

    // Hide the modal content for 3-5 seconds (simulate loading)
    setTimeout(() => {
        // Hide the loading spinner
        loadingSpinner.style.display = 'none';

        // Hide the modal
        modalBox.style.display = 'none';

        // Show the connection message
        connectionMessage.style.display = 'block';

        // After 3 seconds, hide the connection message
        setTimeout(() => {
            connectionMessage.style.display = 'none';
        }, 3000); // You can adjust this time for how long the "connected" message stays visible
    }, 3000); // Delay for 3 seconds before showing the connection message
});
