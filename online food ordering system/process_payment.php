<?php
// === Security Warning: This code is for simulation only. Use a real gateway for production. ===
header('Content-Type: application/json');

// 1. Configuration (Update these values to match your MySQL setup)
$servername = "localhost";
$username = "root";       
$password = "";           
$dbname = "food_ordering"; 

// 2. Get Data from Frontend (POST Request)
$payment_token = $_POST['payment_token'] ?? null; 
$order_id      = $_POST['order_id'] ?? null;
$amount        = $_POST['amount'] ?? null;

// Convert and validate input
$amount = is_numeric($amount) ? (float)$amount : 0; 
$order_id = is_numeric($order_id) ? (int)$order_id : 0;

if (!$payment_token || $order_id <= 0 || $amount <= 0) {
    http_response_code(400); // Bad Request
    echo json_encode(['status' => 'error', 'message' => 'Missing required payment data (token, order ID, or amount).']);
    exit;
}

// 3. Payment Gateway Simulation
// Since the frontend sends 'test_token_success', we simulate a successful transaction.
if ($payment_token === 'test_token_success') {
    $transaction_id = 'txn_' . time() . rand(100, 999);
    $payment_method = 'Visa'; // Simulated method
    $success = true;
} else {
    $success = false;
    $error_message = "Payment token invalid or payment was declined.";
}

if (!$success) {
    http_response_code(402); // Payment Required (Failure)
    echo json_encode(['status' => 'failed', 'message' => $error_message]);
    exit;
}

// 4. Connect to Database
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    // Database connection failure
    error_log("Connection failed: " . $conn->connect_error);
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed. (Check XAMPP MySQL)']);
    exit;
}

// 5. Database Update (Save Payment and Update Order Status)
// Use a transaction to ensure both INSERT and UPDATE succeed together.
$conn->begin_transaction();
$db_success = true;

try {
    // a. Insert into payments table
    // Assuming 'i' for integer (order_id), 's' for string (method, txn_id), 'd' for double (amount)
    $stmt_pay = $conn->prepare("INSERT INTO payments (order_id, payment_method, transaction_id, amount) VALUES (?, ?, ?, ?)");
    $stmt_pay->bind_param("isds", $order_id, $payment_method, $transaction_id, $amount); 
    $stmt_pay->execute();

    // b. Update the order status (Requires 'orders' table with 'payment_status', 'status', and 'transaction_id' columns)
    $stmt_order = $conn->prepare("UPDATE orders SET payment_status = 'Paid', status = 'Processing', transaction_id = ? WHERE order_id = ?");
    $stmt_order->bind_param("si", $transaction_id, $order_id);
    $stmt_order->execute();

    $conn->commit();

} catch (Exception $e) {
    $conn->rollback();
    error_log("Transaction failed: " . $e->getMessage());
    $db_success = false;
}

$conn->close();

if ($db_success) {
    // Success Response
    http_response_code(200);
    echo json_encode([
        'status' => 'success', 
        'message' => 'Payment confirmed and order processed.', 
        'transaction_id' => $transaction_id
    ]);
} else {
    // Execution Error Response (Payment passed, but database update failed)
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Payment succeeded, but failed to record order. Contact support.']);
}
?>