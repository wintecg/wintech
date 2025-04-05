
const paymentForm = document.getElementById('payment-form');
const showPaymentButton = document.getElementById('show-payment');
const payButton = document.getElementById('pay-button');

showPaymentButton.addEventListener('click', () => {
    paymentForm.style.display = 'block';
});

payButton.addEventListener('click', () => {

    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvc = document.getElementById('cvc').value;

    // Simulate payment processing (VERY UNSAFE!)
    if (cardNumber && expiryDate && cvc) {
        alert('Payment successful (simulated)!');
        paymentForm.style.display = 'none'; // Hide the form

    } else {
        alert('Please fill in all payment details.');
    }
});
