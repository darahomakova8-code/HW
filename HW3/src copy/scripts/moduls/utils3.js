import { IMAGE_GREY_COLOR } from './data3.js';

export function validateEmail(email) {
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(email);
}

// Показать уведомление
export function showNotification(message, type = 'info', duration = 3000) {
const oldNotifications = document.querySelectorAll('.notification');
oldNotifications.forEach(notification => notification.remove());

const notification = document.createElement('div');
notification.className = `notification notification-${type}`;
notification.textContent = message;

  // Стили
notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    z-index: 1000;
    animation: slideInRight 0.3s ease, fadeOut 0.3s ease ${duration - 300}ms;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);`;

document.body.appendChild(notification);

setTimeout(() => {
    if (notification.parentNode) {
    notification.parentNode.removeChild(notification);
    }}, duration);
}

// Инициализация подписки на рассылку
export function initSubscription() {
const subscribeForm = document.querySelector('.footer-offer form');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    if (validateEmail(email)) {
        showNotification(`Thank you for subscribing with ${email}!`, 'success');
        e.target.reset();
    } else {
        showNotification('Please enter a valid email address', 'error');
    }
    });
}
}

// Настройка галереи
export function setupGallery() {
const galleryItems = document.querySelectorAll('.footer-gallery div');
galleryItems.forEach((item) => {
    item.style.backgroundColor = IMAGE_GREY_COLOR;
    item.style.background = IMAGE_GREY_COLOR;
    item.style.backgroundImage = 'none';
    item.style.cursor = 'default';
    item.style.transition = 'none';
    item.style.borderRadius = '4px';
    
    item.onmouseenter = null;
    item.onmouseleave = null;
    item.onclick = null;
});
}

// FAQ 
export function setupFaqDropdown() {
const faqQuestions = document.querySelectorAll('.faq-question');

if (faqQuestions.length === 0) return;

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const toggleIcon = question.querySelector('.toggle-icon');
    
    const isActive = faqItem.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-answer').classList.remove('active');
        const icon = item.querySelector('.toggle-icon');
        if (icon) icon.textContent = '+';
    });
    
    if (!isActive) {
        faqItem.classList.add('active');
        answer.classList.add('active');
        if (toggleIcon) toggleIcon.textContent = '×';
    }
    });});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.faq-item')) {
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-answer').classList.remove('active');
        const icon = item.querySelector('.toggle-icon');
        if (icon) icon.textContent = '+';
    });
    }
});
}

// Форматирование номера карты
export function formatCardNumber(e) {
let value = e.target.value.replace(/\D/g, '');
value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
e.target.value = value.substring(0, 19);
}

// Форматирование даты истечения
export function formatExpDate(e) {
let value = e.target.value.replace(/\D/g, '');
if (value.length >= 2) {
    value = value.substring(0, 2) + '/' + value.substring(2, 4);}
e.target.value = value.substring(0, 5);
}
