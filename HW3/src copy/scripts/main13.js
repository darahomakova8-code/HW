import { hotels, bookings } from './moduls/data3.js';
import { enableForm, restoreFooter } from './moduls/domUtils3.js';
import { validateEmail, showNotification, initSubscription, setupFaqDropdown, setupGallery } from './moduls/utils3.js';

function renderHotels() {
    const container = document.querySelector('.catalog-cards');
    if (!container) return;

    const existingCards = container.innerHTML;

    if (!existingCards.includes('card-btn')) {
        container.innerHTML = '';
        
        hotels.forEach(hotel => {
            const card = document.createElement('article');
            card.className = 'catalog-card';
            
            card.innerHTML = `
                <div class="img-placeholder" style="background-color: ${hotel.color};"></div>
                <div class="catalog-card-content">
                    <div>
                        <div class="card-hotel-title">${hotel.name}</div>
                        <div class="card-rating">
                            <span class="stars">${'★'.repeat(Math.floor(hotel.rating))}</span> 
                            ${hotel.rating} (${hotel.reviews} reviews)
                        </div>
                    </div>
                    <div class="card-price-row">
                        <div>
                            <span class="card-price">$${hotel.price}</span>
                            <span class="card-price-per">/Person</span>
                        </div>
                        <button class="card-btn" data-id="${hotel.id}">Book Trip</button>
                    </div>
                </div>`;
            container.appendChild(card);
        });
    }
}

function bookHotel(hotelId, buttonElement) {
    const hotel = hotels.find(h => h.id === hotelId);
    if (!hotel) {
        showNotification('Hotel not found', 'error');
        return;
    }
    
    const originalText = buttonElement.textContent;
    const originalBg = buttonElement.style.backgroundColor;
    const originalColor = buttonElement.style.color;

    buttonElement.textContent = 'Booking...';
    buttonElement.style.backgroundColor = '#4CAF50';
    buttonElement.style.color = 'white';

    setTimeout(() => {
        showNotification(`Successfully booked ${hotel.name} for $${hotel.price}`, 'success');
        
        buttonElement.textContent = originalText;
        buttonElement.style.backgroundColor = originalBg;
        buttonElement.style.color = originalColor;
        
        bookings.push({
            id: Date.now(),
            hotelId: hotelId,
            hotelName: hotel.name,
            price: hotel.price,
            date: new Date().toLocaleDateString()
        });
    }, 500);
}

function updateTotalPrice() {
    const totalElement = document.querySelector('.total-payment span:last-child');
    const breakdownContainer = document.querySelector('.price-breakdown');
    
    if (!totalElement || !breakdownContainer) return;

    const basePrice = 500;
    const discount = 100; 
    const breakfastPrice = 10;
    const serviceFee = 5;

    let extrasTotal = 0;
    const checkboxes = document.querySelectorAll('.extra-features input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const priceText = checkbox.parentElement.querySelector('span').textContent;
            const price = parseInt(priceText.replace('$', '')) || 0;
            extrasTotal += price;
        }
    });

    const total = basePrice - discount + breakfastPrice + extrasTotal + serviceFee;
    totalElement.textContent = `$${total}`;

    breakdownContainer.innerHTML = `
        <div class="breakdown-item">
            <span>1 Nights</span>
            <span>$${basePrice}</span>
        </div>
        <div class="breakdown-item">
            <span>Discount 20%</span>
            <span>-$${discount}</span>
        </div>
        <div class="breakdown-item">
            <span>Breakfast per person</span>
            <span>$${breakfastPrice}</span>
        </div>
        ${extrasTotal > 0 ? `
        <div class="breakdown-item">
            <span>Extra features</span>
            <span>$${extrasTotal}</span>
        </div>
        ` : ''}
        <div class="breakdown-item">
            <span>Service fee</span>
            <span>$${serviceFee}</span>
        </div>`;
}

function initEventListeners() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('card-btn')) {
            const hotelId = parseInt(e.target.dataset.id);
            bookHotel(hotelId, e.target);
        }
        
        if (e.target.classList.contains('book-now-btn')) {
            e.preventDefault();
            
            const originalText = e.target.textContent;
            const originalBg = e.target.style.backgroundColor;
            e.target.textContent = 'Processing...';
            e.target.style.backgroundColor = '#FF9800';
            
            setTimeout(() => {
                showNotification('Booking submitted! Thank you for your reservation.', 'success');
                e.target.textContent = originalText;
                e.target.style.backgroundColor = originalBg;
            }, 1000);
        }
        
        if (e.target.classList.contains('book-trip-btn')) {
            const bookingForm = document.querySelector('.sidebar-card');
            if (bookingForm) {
                bookingForm.scrollIntoView({ behavior: 'smooth' });
                
                bookingForm.style.boxShadow = '0 0 0 3px rgba(76, 175, 80, 0.3)';
                setTimeout(() => {
                    bookingForm.style.boxShadow = '';
                }, 2000);
            }
        }
    });

    const descriptionTabs = document.querySelectorAll('.description-tabs > div');
    const hotelDesc = document.querySelector('.hotel-desc');
    const featuresList = document.querySelector('.features-list');
    const amenitiesBlock = document.querySelector('.amenities-block');

    if (descriptionTabs.length > 0 && hotelDesc) {
        if (featuresList) featuresList.style.display = 'none';
        if (amenitiesBlock) amenitiesBlock.style.display = 'none';
        
        descriptionTabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                descriptionTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                if (hotelDesc) hotelDesc.style.display = index === 0 ? 'block' : 'none';
                if (featuresList) featuresList.style.display = index === 1 ? 'flex' : 'none';
                if (amenitiesBlock) amenitiesBlock.style.display = index === 2 ? 'flex' : 'none';
                
                if (index === 3) {
                    if (hotelDesc) {
                        hotelDesc.style.display = 'block';
                        hotelDesc.textContent = 'Price history shows fluctuations over seasons. Current price is at its lowest for this month.';
                    }
                }
            });
        });
    }

    const moreDetailsBtn = document.querySelector('.more-details-btn');
    if (moreDetailsBtn) {
        moreDetailsBtn.addEventListener('click', () => {
            const amenitiesBlock = document.querySelector('.amenities-block');
            if (amenitiesBlock) {
                const isHidden = amenitiesBlock.style.display === 'none';
                amenitiesBlock.style.display = isHidden ? 'flex' : 'none';
                moreDetailsBtn.textContent = isHidden ? 'Hide Amenities' : 'Show More Amenities';
            }
        });
    }

    const checkboxes = document.querySelectorAll('.extra-features input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateTotalPrice();
            
            const label = this.parentElement;
            if (this.checked) {
                label.style.backgroundColor = '#f0f9ff';
                label.style.padding = '5px';
                label.style.borderRadius = '3px';
            } else {
                label.style.backgroundColor = '';
                label.style.padding = '';
            }
        });
    });
}

function restoreHotelFeatures() {
    const hotelDesc = document.querySelector('.hotel-desc');
    if (hotelDesc) {
        hotelDesc.innerHTML = 'Located just steps from the sandy beach, our hotel offers breathtaking ocean views from every room. Enjoy luxury amenities including spa, fine dining restaurants, and infinity pool. Perfect for romantic getaways and family vacations alike.';
    }
}

function initApp() {
    enableForm();
    renderHotels();
    setupFaqDropdown();
    restoreHotelFeatures();
    initEventListeners();
    initSubscription();
    restoreFooter();
    setupGallery();
    updateTotalPrice();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}