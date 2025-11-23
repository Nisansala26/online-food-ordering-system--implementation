// Select the form by its ID
const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e) {
    // Get password values
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        e.preventDefault(); // Prevent form submission if they don't match
        return;
    }

    // If passwords match, the form will submit normally to register.php
});
