<?php
session_start();
include('db_connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if email exists
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // If user found
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verify password (using password_hash)
        if (password_verify($password, $user['password'])) {
            $_SESSION['user'] = $user['email'];
            echo "Login successful! Welcome, " . $_SESSION['user'];
        } else {
            echo "Invalid password!";
        }
    } else {
        echo "No user found with that email.";
    }

    $stmt->close();
    $conn->close();
}
?>
