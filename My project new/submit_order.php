<?php
include "db.php";


$fname         = $conn->real_escape_string($_POST['first_name']);
$lname         = $conn->real_escape_string($_POST['last_name']);
$address       = $conn->real_escape_string($_POST['address']);
$phone         = $conn->real_escape_string($_POST['phone']);
$order_item    = $conn->real_escape_string($_POST['order_item']);
$quantity      = $conn->real_escape_string($_POST['quantity']);
$comment       = $conn->real_escape_string($_POST['comment']);
// NEW Fields
$size          = $conn->real_escape_string($_POST['size']); 
$total_price   = $conn->real_escape_string($_POST['total_price']);
$redirect_page = $conn->real_escape_string($_POST['redirect_page']); // Menu page name



$sql = "INSERT INTO orders (first_name, last_name, address, phone, order_item, size, quantity, total_price, comment)
        VALUES ('$fname', '$lname', '$address', '$phone', '$order_item', '$size', '$quantity', '$total_price', '$comment')";

if ($conn->query($sql) === TRUE) {
   
    echo "<script>
            alert('Thanks for ordering! Your total bill is Rs ' + " . json_encode($total_price) . ");
            window.location.href = '$redirect_page'; 
          </script>";
    exit();
} else {
    
    echo "<h2>Order Submission Failed!</h2>";
    echo "Error: " . $conn->error;
    $conn->close();
    exit();
}

$conn->close();
?>