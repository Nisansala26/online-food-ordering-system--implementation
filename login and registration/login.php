<?php
include 'config.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Safely get form data
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Validate inputs
    if (empty($email) || empty($password)) {
        echo "Please fill in all fields.";
        exit;
    }

    // Escape email for SQL query
    $email_safe = mysqli_real_escape_string($conn, $email);

    // Get user by email
    $sql = "SELECT * FROM customers WHERE email = '$email_safe'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Use correct column name from your table
        if (password_verify($password, $user['password_hash'])) {
            // Successful login
            $_SESSION['email'] = $user['email'];
            header("Location: dashboard.php");
            exit();
        } else {
            echo "Incorrect password!";
        }
    } else {
        echo "User not found!";
    }
}

$conn->close();
?>
