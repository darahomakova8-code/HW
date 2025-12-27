// /scripts/redirects.js
document.addEventListener('DOMContentLoaded', function() {
    // На странице index15.html (детали)
    if (document.querySelector('.book-now-btn')) {
        const bookBtn = document.querySelector('.book-now-btn');
        bookBtn.addEventListener('click', function() {
            window.location.href = 'index25.html';
        });
        // Убираем disabled если есть
        if (bookBtn.hasAttribute('disabled')) bookBtn.removeAttribute('disabled');
    }
    // На странице index25.html (оплата)
    if (document.querySelector('.complete-booking-btn')) document.querySelector('.complete-booking-btn').addEventListener('click', function() {
        window.location.href = 'index35.html';
    });
    // На странице index35.html (подтверждение)
    if (document.querySelector('.final-btn-back')) document.querySelector('.final-btn-back').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'index15.html';
    });
});

//# sourceMappingURL=index15.199e9342.js.map
