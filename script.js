function toggleSection(sectionId) {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('rechargeSection').style.display = 'none';
    document.getElementById('enquirySection').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Here would be authentication logic
    toggleSection('rechargeSection');
    displayMessage("Login successful", "green");
});

document.getElementById("rechargeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const paymentMethod = document.getElementById("paymentMethod").value;

    if (!amount) {
        displayMessage("Please enter the recharge amount.", "red");
        return;
    }

    displayMessage(`Recharge of ₹${amount} successful via ${paymentMethod}.`, "green");
    document.getElementById("rechargeForm").reset();
});

function calculateFare() {
    // Sample logic for fare calculation
    displayMessage("Fare calculation between two stations...", "blue");
}

function findNearestStation() {
    // Sample logic for finding nearest station
    displayMessage("Finding nearest metro station...", "blue");
}

function displayMessage(msg, color) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = msg;
    messageDiv.style.color = color;
}
