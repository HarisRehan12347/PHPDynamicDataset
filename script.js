jQuery(document).ready(function () {
    // Load existing data on page load
    loadData();

    // Submit form using AJAX
    jQuery('#product-form').submit(function (e) {
        //alert('test1');
        e.preventDefault();
        var productName = jQuery('#product-name').val();
        var quantity = parseInt(jQuery('#quantity').val());
        var price = parseFloat(jQuery('#price').val());

        // Calculate total value
        const totalValue = (quantity * price).toFixed(2);

        // Validate input
        if (productName === '' || isNaN(quantity) || isNaN(price)) {
            alert('Please fill in all fields with valid values.');
            return;
        }

        const data = {
            product_name: productName,
            quantity: quantity,
            price: price,
            totalValue: totalValue
        };

        // Submit data
        jQuery.ajax({
            type: 'POST',
            url: 'save_data.php',
            data: data,
            success: function (response) {
                if (response === '') {
                    // Clear form fields
                    jQuery('#product-name').val('');
                    jQuery('#quantity').val('');
                    jQuery('#price').val('');

                    // Reload the updated data
                    loadData();
                } else {
                    alert('An error occurred. Please try again.');
                }
            }
        });
    });

    function loadData() {
        // Fetch the JSON file
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                // Get the table body and footer element
                const tbody = document.querySelector('#product-table tbody');
                const tfoot = document.querySelector('#product-table tfoot tr th:nth-child(2)');
                const row = document.createElement('tr');

                // Clear any existing rows
                tbody.innerHTML = '';
                //tfoot.innerHTML = '';

                // Initialize the sum variable
                let sum = 0;

                // Iterate over the data array
                data.forEach(item => {
                    // Create a new row
                    const row = document.createElement('tr');

                    // Create cells and set their values
                    const productNameCell = document.createElement('td');
                    productNameCell.textContent = item.productName;
                    row.appendChild(productNameCell);

                    const quantityCell = document.createElement('td');
                    quantityCell.textContent = item.quantity;
                    row.appendChild(quantityCell);

                    const priceCell = document.createElement('td');
                    priceCell.textContent = item.price;
                    row.appendChild(priceCell);

                    const datetimeCell = document.createElement('td');
                    datetimeCell.textContent = item.datetime;
                    row.appendChild(datetimeCell);

                    const totalValueCell = document.createElement('td');
                    totalValueCell.textContent = item.totalValue;
                    row.appendChild(totalValueCell);

                    // Add the value of the 'total value' column to the sum
                    const totalSum = parseFloat(item.totalValue);
                    sum += totalSum;

                    // Append the row to the table body
                    tbody.appendChild(row);
                });

                // Create cell and set their values in footer
                /*const sumOfTotalValuesCell = document.createElement('td');
                sumOfTotalValuesCell.textContent = sum;
                row.appendChild(sumOfTotalValuesCell);*/
                tfoot.innerHTML = sum;

                // Append the row to the table footer
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});
