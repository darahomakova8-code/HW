import { checkoutData, orderHistory } from './moduls/data.js';
import { restoreFooter } from './moduls/domUtils.js';
import { validateEmail, showNotification, initSubscription, setupGallery, formatCardNumber, formatExpDate } from './moduls/utils.js';

// Методы оплаты
function togglePaymentFields() {
const creditCardOption = document.querySelector('input[value="credit"]');
const cardFields = document.querySelector('.card-fields');

if (creditCardOption && cardFields) {
    if (creditCardOption.checked) {
    cardFields.style.display = 'block';
    cardFields.style.animation = 'fadeIn 0.3s ease';
    } else {
    cardFields.style.display = 'none';
    }
}

checkoutData.paymentMethod = this.value;
}

function calculateTotal() {
const subtotal = checkoutData.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
const serviceCharge = 20.00;
return subtotal + serviceCharge;
}

function updateOrderSummary() {
const totalElement = document.querySelector('.breakdown-total span:last-child');
if (totalElement) {
    const total = calculateTotal();
    totalElement.textContent = `$${total.toFixed(2)}`;
}
}

// Сбор данных формы
function collectFormData() {
const shipping = {
    firstName: document.querySelector('.form-section:nth-child(1) input[placeholder="First Name"]:nth-child(1)')?.value || '',
    lastName: document.querySelector('.form-section:nth-child(1) input[placeholder="Last Name"]:nth-child(1)')?.value || '',
    address: document.querySelector('.form-section:nth-child(1) input[placeholder="Full Address"]:nth-child(1)')?.value || '',
    address2: document.querySelector('.form-section:nth-child(1) input[placeholder="Full Address 2 (optional)"]:nth-child(1)')?.value || ''
};

const billing = {
    firstName: document.querySelector('.form-section:nth-child(1) input[placeholder="First Name"]:nth-child(2)')?.value || '',
    lastName: document.querySelector('.form-section:nth-child(1) input[placeholder="Last Name"]:nth-child(2)')?.value || '',
    address: document.querySelector('.form-section:nth-child(1) input[placeholder="Full Address"]:nth-child(2)')?.value || '',
    address2: document.querySelector('.form-section:nth-child(1) input[placeholder="Full Address 2 (optional)"]:nth-child(2)')?.value || ''
};

return { shipping, billing };
}

function validateForm(formData) {
const requiredFields = [
    formData.shipping.firstName,
    formData.shipping.lastName,
    formData.shipping.address,
    formData.billing.firstName,
    formData.billing.lastName,
    formData.billing.address
];

for (let field of requiredFields) {
    if (!field.trim()) {
    showNotification('Please fill in all required fields', 'error');
    return false;
    }
}

if (checkoutData.paymentMethod === 'credit') {
    const cardNumber = document.querySelector('input[placeholder="XXXX XXXX XXXX XXXX"]')?.value || '';
    const cardHolder = document.querySelector('input[placeholder="Peter Parker"]')?.value || '';
    const expDate = document.querySelector('input[placeholder="MM/YY"]')?.value || '';
    const cvc = document.querySelector('input[placeholder="****"]')?.value || '';
    
    if (!cardNumber || cardNumber.replace(/\s/g, '').length !== 16) {
    showNotification('Please enter a valid 16-digit card number', 'error');
    return false;
    }
    
    if (!cardHolder) {
    showNotification('Please enter card holder name', 'error');
    return false;
    }
    
    if (!expDate || !/^\d{2}\/\d{2}$/.test(expDate)) {
    showNotification('Please enter valid expiration date (MM/YY)', 'error');
    return false;
    }
    
    if (!cvc || cvc.length !== 3) {
    showNotification('Please enter valid 3-digit CVC', 'error');
    return false;
    }
}
return true;
}

// Подтверждение заказа
function showOrderConfirmation(order) {
const modal = document.createElement('div');
modal.className = 'order-confirmation-modal';
modal.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 30px rgba(0,0,0,0.3);
    z-index: 1000;
    max-width: 500px;
    width: 90%;
    animation: fadeIn 0.3s ease;`;

modal.innerHTML = `
    <h2 style="color: #4CAF50; margin-bottom: 15px;">🎉 Order Confirmed!</h2>
    <div style="margin-bottom: 20px;">
    <p><strong>Order ID:</strong> #${order.id}</p>
    <p><strong>Date:</strong> ${order.date}</p>
    <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
    <p><strong>Payment Method:</strong> ${order.paymentMethod}</p>
    </div>
    <p style="color: #666; margin-bottom: 20px;">
    Your booking has been confirmed. A confirmation email has been sent to you.
    </p>
    <button id="closeModalBtn" style="
    background: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    ">Continue</button>`;

const overlay = document.createElement('div');
overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 999;`;

document.body.appendChild(overlay);
document.body.appendChild(modal);

document.getElementById('closeModalBtn').addEventListener('click', () => {
    document.body.removeChild(modal);
    document.body.removeChild(overlay);
});

overlay.addEventListener('click', () => {
    document.body.removeChild(modal);
    document.body.removeChild(overlay);
});
}

// Завершения бронирования
function handleCompleteBooking(e) {
e.preventDefault();

const formData = collectFormData();

if (validateForm(formData)) {
    const order = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    items: [...checkoutData.cart],
    total: calculateTotal(),
    shipping: formData.shipping,
    billing: formData.billing,
    paymentMethod: checkoutData.paymentMethod,
    status: 'pending'
    };
    
    orderHistory.push(order);
    showOrderConfirmation(order);
    resetCheckoutForm();
    
    console.log('New order:', order);
    console.log('Order history:', orderHistory);
}
}

// Сброс формы
function resetCheckoutForm() {
const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');
inputs.forEach(input => {
    input.value = '';
});

const paypalRadio = document.querySelector('input[value="paypal"]');
if (paypalRadio) {
    paypalRadio.checked = true;
    togglePaymentFields();
}
}

function initFormValidation() {
const inputs = document.querySelectorAll('input[type="text"]');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
    if (this.value.trim() && this.hasAttribute('required')) {
        this.style.borderColor = '#4CAF50';
    } else if (this.hasAttribute('required')) {
        this.style.borderColor = '#f44336';
    }
    });
});
}

function initSocialIcons() {
const socialIcons = document.querySelectorAll('.footer-col span[style*="font-size:21px"]');
socialIcons.forEach(icon => {
    icon.style.cursor = 'pointer';
    icon.addEventListener('mouseover', () => {
    icon.style.color = '#4CAF50';
    });
    icon.addEventListener('mouseout', () => {
    icon.style.color = '#1b374e';
    });
    icon.addEventListener('click', () => {
    const networks = ['Facebook', 'Google', 'Instagram', 'Twitter'];
    const index = Array.from(socialIcons).indexOf(icon);
    showNotification(`Redirecting to ${networks[index]}...`);
    });
});
}

function initCheckoutForm() {
console.log('Checkout page initialized'); 
const cardNumberInput = document.querySelector('input[placeholder="XXXX XXXX XXXX XXXX"]');
if (cardNumberInput) {
    cardNumberInput.addEventListener('input', formatCardNumber);
}

const expDateInput = document.querySelector('input[placeholder="MM/YY"]');
if (expDateInput) {
    expDateInput.addEventListener('input', formatExpDate);
}

const paymentRadios = document.querySelectorAll('input[name="payment"]');
paymentRadios.forEach(radio => {
    radio.addEventListener('change', togglePaymentFields);
});

const completeBtn = document.querySelector('.complete-booking-btn');
if (completeBtn) {
    completeBtn.addEventListener('click', handleCompleteBooking);
}
initSubscription();
initFormValidation();
initSocialIcons();
}

function initCheckoutPage() {
console.log('Checkout page loading...');

initCheckoutForm();
updateOrderSummary();
restoreFooter();
setupGallery();

console.log('Checkout page ready!');
}

if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', initCheckoutPage);
} else {
initCheckoutPage();
}