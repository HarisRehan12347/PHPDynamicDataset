<?php
// Get form data
$productName = $_POST['product_name'];
$quantity = $_POST['quantity'];
$price = $_POST['price'];
$totalValue = $_POST['totalValue'];

// Create data array
$data = [
    'productName' => $productName,
    'quantity' => $quantity,
    'price' => $price,
    'totalValue' => $totalValue,
    'datetime' => date('Y-m-d H:i:s')
];

if(!file_exists('data.json')) {
    fopen("data.json", "w");
}

// Read existing data from JSON file
$existingData = file_get_contents('data.json');
$existingData = json_decode($existingData, true);

// Add new data to existing data
$existingData[] = $data;

// Save updated data back to JSON file
return file_put_contents('data.json', json_encode($existingData));

