-- 1. Create the database
CREATE DATABASE food_orders_db;

-- 2. Use the new database
USE food_orders_db;

-- 3. Create the orders table
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    phone VARCHAR(20) NOT NULL,
    order_item VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    comment TEXT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
