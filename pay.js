const cart = JSON.parse(localStorage.getItem('cart')) || [];
const orderSummaryContainer = document.getElementById('orderSummary');
const paymentTotalContainer = document.getElementById('paymentTotal');

function displayOrderSummary() {
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        orderSummaryContainer.appendChild(li);
        total += parseFloat(item.price);
    });
    paymentTotalContainer.textContent = `$${total.toFixed(2)}`;
}

// Initial display
displayOrderSummary();
