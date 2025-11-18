<?php
// Database credentials
$servername = "localhost";
$username = "root"; // Default username for local XAMPP/WAMP
$password = "";     // Default password for local XAMPP/WAMP (use a strong password for live servers)
$dbname = "food_orders_db";

// Connect to MySQL database using PDO
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Check if the form was submitted using POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitize and validate inputs
    $first_name = filter_var($_POST['first_name'], FILTER_SANITIZE_STRING);
    $last_name  = filter_var($_POST['last_name'], FILTER_SANITIZE_STRING);
    $address    = filter_var($_POST['address'], FILTER_SANITIZE_STRING);
    $phone      = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $order_item = filter_var($_POST['order_item'], FILTER_SANITIZE_STRING);
    $quantity   = filter_var($_POST['quantity'], FILTER_VALIDATE_INT);
    $comment    = filter_var($_POST['comment'], FILTER_SANITIZE_STRING);

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO orders (first_name, last_name, address, phone, order_item, quantity, comment) VALUES (:first_name, :last_name, :address, :phone, :order_item, :quantity, :comment)");

    $stmt->bindParam(':first_name', $first_name);
    $stmt->bindParam(':last_name', $last_name);
    $stmt->bindParam(':address', $address);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':order_item', $order_item);
    $stmt->bindParam(':quantity', $quantity);
    $stmt->bindParam(':comment', $comment);

    // Execute the statement
    try {
        $stmt->execute();
        // Redirect back to the form page or a success page
        header("Location: index.html?success=1");
        exit();
    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}

// Close connection
$conn = null;
?>
