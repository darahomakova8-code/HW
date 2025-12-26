import { bookingData, userBookings } from './moduls/data.js';
import { restoreFooter } from './moduls/domUtils.js';
import { validateEmail, showNotification, initSubscription, setupGallery } from './moduls/utils.js';

function initConfirmationPage() {
console.log('Confirmation page initialized');
initSubscription();
initInteractiveElements();
restoreFooter();
setupGallery();
}

function initConfirmationPageApp() {
console.log('Confirmation page loading...');

setTimeout(() => {
    initConfirmationPage();
    console.log('Confirmation page ready!');
}, 500);
}

if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', initConfirmationPageApp);
} else {
initConfirmationPageApp();
}