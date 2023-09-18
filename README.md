Dynamic Form Data Saver
This PHP script is designed to collect form data submitted via POST request and save it to a JSON file. It can be useful for capturing and storing data entered by users through web forms dynamically.

How to Use
Place the form_data.php script on your web server.

Create an HTML form that submits data to this script using the HTTP POST method. Ensure that the form fields have the correct name attributes to match the variables used in the script (product_name, quantity, price, totalValue).

Example form:
<form action="form_data.php" method="POST">
    <input type="text" name="product_name" placeholder="Product Name">
    <input type="number" name="quantity" placeholder="Quantity">
    <input type="number" name="price" placeholder="Price">
    <input type="number" name="totalValue" placeholder="Total Value">
    <button type="submit">Submit</button>
</form>

When the form is submitted, the script will capture the data and add a timestamp (datetime) to it.

The script will then save the collected data to a JSON file named data.json in the same directory as the script.

JSON Data Structure
The data is saved in a JSON format with the following structure:

[
    {
        "productName": "Example Product",
        "quantity": 5,
        "price": 10.99,
        "totalValue": 54.95,
        "datetime": "2023-09-18 14:30:00"
    },
    {
        "productName": "Another Product",
        "quantity": 3,
        "price": 7.49,
        "totalValue": 22.47,
        "datetime": "2023-09-18 15:45:00"
    },
    ...
]
File Initialization
The script checks if the data.json file exists. If it doesn't, it creates an empty JSON file to store the data.

License
This script is provided under an open-source license (insert your preferred license here). You are free to modify and distribute it as needed.
