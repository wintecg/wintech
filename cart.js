const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.getElementById('cartItems');
const totalContainer = document.getElementById('total');

let total = 0;

// Function to update the total and cart display
function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;

        // Add "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            // Remove the item from the cart array
            cart.splice(index, 1);

            // Update the localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Refresh the display
            updateCartDisplay();
        });

        li.appendChild(removeButton);
        cartItemsContainer.appendChild(li);
        total += parseFloat(item.price);
    });

    totalContainer.textContent = `$${total.toFixed(2)}`;
}

// Initial cart display
updateCartDisplay();
