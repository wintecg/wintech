document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', event => {
        const product = event.target.parentElement;
        const productData = {
            id: product.dataset.id,
            name: product.dataset.name,
            price: product.dataset.price,
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(productData);
        localStorage.setItem('cart', JSON.stringify(cart));

      
    });
});
