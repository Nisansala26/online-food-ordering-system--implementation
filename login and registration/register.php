<?php
include 'config.php'; // your database connection file

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form data
    $full_name = trim($_POST['full_name']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $confirm_password = trim($_POST['confirm_password']);

    // Validate required fields
    if (empty($full_name) || empty($email) || empty($password) || empty($confirm_password)) {
        echo "Please fill in all fields.";
        exit;
    }

    // Check if passwords match
    if ($password !== $confirm_password) {
        echo "Passwords do not match.";
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Check if email already exists
    $stmt = $conn->prepare("SELECT * FROM customers WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "Email already registered!";
        $stmt->close();
        $conn->close();
        exit;
    }

    $stmt->close();

    // Insert new user into database
    $insert = $conn->prepare("INSERT INTO customers (full_name, email, password_hash) VALUES (?, ?, ?)");
    $insert->bind_param("sss", $full_name, $email, $hashed_password);

    if ($insert->execute()) {
        echo "Registration successful. <a href='login.html'>Login here</a>";
    } else {
        echo "Error: " . $insert->error;
    }

    $insert->close();
    $conn->close();
}
?>
