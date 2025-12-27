// Простые переходы между страницами
document.addEventListener('DOMContentLoaded', function() {
    // Book Now -> Checkout
    var bookBtn = document.querySelector('.book-now-btn');
    if (bookBtn) {
        // Убираем disabled
        bookBtn.disabled = false;
        bookBtn.style.cursor = 'pointer';
        bookBtn.style.opacity = '1';
        
        // Добавляем обработчик
        bookBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index25.html';
        });
    }
    
    // Complete Booking -> Confirmation
    var completeBtn = document.querySelector('.complete-booking-btn');
    if (completeBtn) {
        completeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index35.html';
        });
    }
    
    // Back Home -> Main page
    var backBtn = document.querySelector('.final-btn-back');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index15.html';
        });
    }
});
