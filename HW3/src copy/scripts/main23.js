import { checkoutData, orderHistory } from './moduls/data3.js';
import { restoreFooter } from './moduls/domUtils3.js';
import { validateEmail, showNotification, initSubscription, setupGallery, formatCardNumber, formatExpDate } from './moduls/utils3.js';

import {
    saveFormToStorage,
    loadFormFromStorage,
    clearFormStorage,
    isStorageSupported
} from './moduls/local-storage.js';

function setupAutoSave() {
    if (!isStorageSupported()) {
        console.log('Auto-save disabled: Session Storage not supported');
        return;
    }
    
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            clearTimeout(input._saveTimer);
            input._saveTimer = setTimeout(() => {
                saveFormToStorage();
                console.log('Form auto-saved');
            }, 500); 
        });
    });
    
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', () => {
            saveFormToStorage();
        });
    });
}

function restoreForm() {
    if (!isStorageSupported()) return;
    
    setTimeout(() => {
        const restored = loadFormFromStorage();
        if (restored) {
            const restoreNotice = document.createElement('div');
            restoreNotice.textContent = '✓ Form restored';
            restoreNotice.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: #4CAF50;
                color: white;
                padding: 10px 15px;
                border-radius: 5px;
                font-size: 14px;
                z-index: 1000;
                animation: fadeOut 3s forwards;
            `;
            document.body.appendChild(restoreNotice);
            
            setTimeout(() => {
                if (restoreNotice.parentNode) {
                    restoreNotice.remove();
                }
            }, 3000);
        }
    }, 100);
}

function togglePaymentFields() {
    const creditCardOption = document.querySelector('input[value="credit"]');
    const cardFields = document.querySelector('.card-fields');
    
    if (creditCardOption && cardFields) {
        cardFields.style.display = creditCardOption.checked ? 'block' : 'none';
    }
    
    if (isStorageSupported()) {
        saveFormToStorage();
    }
}

function updateOrderSummary() {
    const totalElement = document.querySelector('.breakdown-total span:last-child');
    if (totalElement) {
        const subtotal = checkoutData.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const serviceCharge = 20.00;
        const total = subtotal + serviceCharge;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
}

function validateForm() {
    const requiredFields = [
        document.querySelector('input[placeholder*="First Name"]')?.value,
        document.querySelector('input[placeholder*="Last Name"]')?.value,
        document.querySelector('input[placeholder="Full Address"]')?.value
    ];
    
    for (let field of requiredFields) {
        if (!field?.trim()) {
            showNotification('Please fill in all required fields', 'error');
            return false;
        }
    }
    
    const isCreditCard = document.querySelector('input[value="credit"]')?.checked;
    if (isCreditCard) {
        const cardNumber = document.querySelector('input[placeholder="XXXX XXXX XXXX XXXX"]')?.value || '';
        if (cardNumber.replace(/\s/g, '').length !== 16) {
            showNotification('Please enter a valid 16-digit card number', 'error');
            return false;
        }
    }
    
    return true;
}

function handleCompleteBooking(e) {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const order = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        total: parseFloat(document.querySelector('.breakdown-total span:last-child').textContent.replace('$', '')),
        status: 'confirmed'
    };
    
    showNotification(`Order #${order.id} confirmed! Total: $${order.total.toFixed(2)}`, 'success');
    
    if (isStorageSupported()) {
        clearFormStorage();
    }
    
    orderHistory.push(order);
    
    document.querySelectorAll('input[type="text"]').forEach(input => {
        input.value = '';
    });
    
    const paypalRadio = document.querySelector('input[value="paypal"]');
    if (paypalRadio) {
        paypalRadio.checked = true;
        togglePaymentFields();
    }
}

function initCheckoutPage() {
    console.log('Initializing checkout page...');
    
    if (!isStorageSupported()) {
        showNotification('Note: Form data will not be saved if you refresh the page', 'info');
    }
    setupAutoSave();
    restoreForm();
    
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', togglePaymentFields);
    });
    
    const cardNumberInput = document.querySelector('input[placeholder="XXXX XXXX XXXX XXXX"]');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', formatCardNumber);
    }
    
    const expDateInput = document.querySelector('input[placeholder="MM/YY"]');
    if (expDateInput) {
        expDateInput.addEventListener('input', formatExpDate);
    }
    
    const completeBtn = document.querySelector('.complete-booking-btn');
    if (completeBtn) {
        completeBtn.addEventListener('click', handleCompleteBooking);
    }
    
    updateOrderSummary();
    initSubscription();
    restoreFooter();
    setupGallery();
    
    console.log('Checkout page initialized with Storage API');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCheckoutPage);
} else {
    initCheckoutPage();
}