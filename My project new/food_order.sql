CREATE DATABASE food_order;

USE food_order;

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    address TEXT,
    phone VARCHAR(20),
    order_item VARCHAR(200),
    size VARCHAR(10),                 
    quantity INT,
    total_price DECIMAL(10, 2),       
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);