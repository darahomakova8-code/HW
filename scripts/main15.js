import { hotels, bookings } from './moduls/data3.js';
import { enableForm, restoreFooter } from './moduls/domUtils3.js';
import { validateEmail, showNotification, initSubscription, setupFaqDropdown, setupGallery } from './moduls/utils3.js';
import { WeatherAPI } from './moduls/weatherAPI.js';
const weatherAPI = new WeatherAPI();

async function initWeatherSection() {
    console.log('Initializing weather section...');
    
    loadCurrentWeather('Warsaw');
    generateForecastCards('Warsaw', 3);
    
    const cityButtons = document.querySelectorAll('.city-btn');
    if (cityButtons.length > 0) {
        cityButtons.forEach(button => {
            button.addEventListener('click', function() {
                cityButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const city = this.dataset.city;
                updateWeatherForCity(city);
                
                const activeDurationBtn = document.querySelector('.duration-btn.active');
                if (activeDurationBtn) {
                    const days = parseInt(activeDurationBtn.dataset.days);
                    generateForecastCards(city, days);
                }
            });
        });
    }
    
    const durationButtons = document.querySelectorAll('.duration-btn');
    if (durationButtons.length > 0) {
        durationButtons.forEach(button => {
            button.addEventListener('click', function() {
                const days = parseInt(this.dataset.days);
                
                durationButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const forecastTitle = document.querySelector('.multi-day-forecast h4');
                if (forecastTitle) {
                    forecastTitle.innerHTML = `<i class="fas fa-chart-line"></i> ${days}-Day Forecast`;
                }
                
                const multiDayForecast = document.getElementById('multiDayForecast');
                if (multiDayForecast) {
                    if (days > 1) {
                        multiDayForecast.style.display = 'block';
                        const activeCityBtn = document.querySelector('.city-btn.active');
                        if (activeCityBtn) {
                            const city = activeCityBtn.dataset.city;
                            generateForecastCards(city, days);
                        }
                    } else {
                        multiDayForecast.style.display = 'none';
                    }
                }
            });
        });
    }
    
    const weatherForm = document.getElementById('weatherForm');
    if (weatherForm) {
        weatherForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const dateInput = document.getElementById('dateInput');
            const selectedDate = new Date(dateInput.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            const maxDate = new Date();
            maxDate.setDate(maxDate.getDate() + 7);
            
            if (selectedDate < today || selectedDate > maxDate) {
                showWeatherError('Please select a date within the next 7 days.');
                return;
            }
            
            const currentWeather = document.getElementById('currentWeather');
            if (currentWeather) {
                currentWeather.innerHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <div class="weather-spinner"></div>
                        <p>Loading weather for ${selectedDate.toLocaleDateString()}...</p>
                    </div>
                `;
            }
            
            try {
                setTimeout(() => {
                    const activeCityBtn = document.querySelector('.city-btn.active');
                    const city = activeCityBtn ? activeCityBtn.dataset.city : 'Warsaw';
                    
                    simulateWeatherForDate(city, selectedDate);
                    
                    showNotification(`Weather for ${selectedDate.toLocaleDateString()} loaded!`, 'success');
                }, 1000);
                
            } catch (error) {
                console.error('Weather fetch error:', error);
                showWeatherError('Failed to load weather data. Please try again.');
            }
        });
    }
    
    const dateInput = document.getElementById('dateInput');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        const maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + 7);
        
        dateInput.min = today;
        dateInput.max = maxDate.toISOString().split('T')[0];
        dateInput.value = today;
    }
}

async function loadCurrentWeather(city = 'Warsaw') {
    console.log(`🌤️ Loading current weather for ${city}...`);
    
    try {
        let weatherData;
        try {

            weatherData = await weatherAPI.getCurrentWeather(city);
            console.log(`Real weather data loaded for ${city}`);
        } catch (apiError) {
            console.log(`Using simulated data for ${city}:`, apiError.message);
            weatherData = getSimulatedWeatherData(city);
        }
        
        updateWeatherForCity(city);
        
    } catch (error) {
        console.error('Weather load error:', error);
        updateWeatherForCity(city);
    }
}

function updateWeatherForCity(city) {
    console.log(`Updating weather display for ${city}...`);
    
    const currentWeather = document.getElementById('currentWeather');
    if (!currentWeather) return;
    
    const weatherData = getSimulatedWeatherData(city);
    
    currentWeather.innerHTML = `
        <div class="weather-header">
            <div class="location-time">
                <h3 class="location">
                    <i class="fas fa-map-marker-alt"></i> ${city}
                    <span class="live-badge">LIVE</span>
                </h3>
                <p class="date-time">${getCurrentDateTime()}</p>
            </div>
            <div class="weather-main">
                <div class="temperature">${weatherData.temp}°C</div>
                <div class="condition-icon">
                    <i class="${weatherData.icon}"></i>
                    <span class="condition">${weatherData.condition}</span>
                </div>
            </div>
        </div>
        
        <div class="weather-details">
            <div class="detail">
                <span class="label"><i class="fas fa-temperature-high"></i> Feels like:</span>
                <span class="value">${weatherData.feelsLike}°C</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-wind"></i> Wind:</span>
                <span class="value">${weatherData.wind}</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-tachometer-alt"></i> Pressure:</span>
                <span class="value">${weatherData.pressure}</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-eye"></i> Observed:</span>
                <span class="value">${weatherData.observed}</span>
            </div>
        </div>
    `;
}

function generateForecastCards(city, days) {
    console.log(`📅 Generating ${days}-day forecast for ${city}...`);
    
    const forecastCardsContainer = document.querySelector('.forecast-cards');
    if (!forecastCardsContainer) return;
    
    const forecastData = getSimulatedForecastData(city, days);
    
    forecastCardsContainer.innerHTML = '';
    
    forecastData.forEach(day => {
        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="forecast-date">${day.date}</div>
            <div class="forecast-icon"><i class="${day.icon}"></i></div>
            <div class="forecast-temp">${day.temp}°C</div>
            <div class="forecast-condition">${day.condition}</div>
        `;
        forecastCardsContainer.appendChild(card);
    });
}

function simulateWeatherForDate(city, date) {
    const currentWeather = document.getElementById('currentWeather');
    if (!currentWeather) return;
    
    const weatherData = getSimulatedWeatherData(city);
    const dateStr = date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    const tempAdjustment = Math.floor(Math.random() * 6) - 3; 
    const adjustedTemp = weatherData.temp + tempAdjustment;
    
    currentWeather.innerHTML = `
        <div class="weather-header">
            <div class="location-time">
                <h3 class="location">
                    <i class="fas fa-map-marker-alt"></i> ${city}
                    <span class="data-type forecast">FORECAST</span>
                </h3>
                <p class="date-time">${dateStr} at 12:00 PM</p>
            </div>
            <div class="weather-main">
                <div class="temperature">${adjustedTemp}°C</div>
                <div class="condition-icon">
                    <i class="${weatherData.icon}"></i>
                    <span class="condition">${weatherData.condition}</span>
                </div>
            </div>
        </div>
        
        <div class="weather-details">
            <div class="detail">
                <span class="label"><i class="fas fa-temperature-high"></i> Feels like:</span>
                <span class="value">${adjustedTemp}°C</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-wind"></i> Wind:</span>
                <span class="value">${weatherData.wind}</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-tachometer-alt"></i> Pressure:</span>
                <span class="value">${weatherData.pressure}</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-info-circle"></i> Forecast for:</span>
                <span class="value">${dateStr}</span>
            </div>
        </div>
    `;
}

function getSimulatedWeatherData(city) {
    const weatherData = {
        'Warsaw': {
            temp: 20,
            condition: 'Clear',
            icon: 'fas fa-sun',
            feelsLike: 20,
            wind: '14 km/h',
            pressure: '1014 hPa',
            observed: '12:14 AM'
        },
        'Dubai': {
            temp: 28,
            condition: 'Sunny',
            icon: 'fas fa-sun',
            feelsLike: 30,
            wind: '8 km/h',
            pressure: '1010 hPa',
            observed: '12:00 PM'
        },
        'London': {
            temp: 12,
            condition: 'Cloudy',
            icon: 'fas fa-cloud',
            feelsLike: 10,
            wind: '18 km/h',
            pressure: '1018 hPa',
            observed: '11:30 AM'
        },
        'New York': {
            temp: 8,
            condition: 'Snow',
            icon: 'fas fa-snowflake',
            feelsLike: 5,
            wind: '22 km/h',
            pressure: '1022 hPa',
            observed: '1:00 PM'
        }
    };
    
    return weatherData[city] || weatherData['Warsaw'];
}

function getSimulatedForecastData(city, days) {
    const baseData = getSimulatedWeatherData(city);
    const forecast = [];
    
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const startDate = new Date();
    const conditions = ['Clear', 'Partly Cloudy', 'Cloudy', 'Light Rain', 'Sunny', 'Rain', 'Snow'];
    const icons = ['fa-sun', 'fa-cloud-sun', 'fa-cloud', 'fa-cloud-rain', 'fa-sun', 'fa-cloud-showers-heavy', 'fa-snowflake'];
    
    for (let i = 0; i < days; i++) {
        const forecastDate = new Date(startDate);
        forecastDate.setDate(startDate.getDate() + i);
        
        const dateStr = `${dayNames[forecastDate.getDay()]}, ${monthNames[forecastDate.getMonth()]} ${forecastDate.getDate()}`;
        
        const tempVariation = Math.floor(Math.random() * 6) - 3;
        const forecastTemp = baseData.temp + tempVariation;
        
        const conditionIndex = i % conditions.length;
        const condition = conditions[conditionIndex];
        const icon = `fas ${icons[conditionIndex]}`;
        
        forecast.push({
            date: dateStr,
            temp: forecastTemp,
            condition: condition,
            icon: icon
        });
    }
    
    return forecast;
}

function getCurrentDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return now.toLocaleDateString('en-US', options);
}

function showWeatherError(message) {
    const weatherError = document.getElementById('weatherError');
    if (!weatherError) return;
    
    weatherError.innerHTML = `<i class="fas fa-exclamation-triangle"></i><span>${message}</span>`;
    weatherError.style.display = 'flex';
    
    setTimeout(() => {
        weatherError.style.display = 'none';
    }, 5000);
}

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
    console.log('Triptopia App Initializing with Enhanced Weather Features...');
    
    initWeatherSection();
    
    enableForm();
    renderHotels();
    setupFaqDropdown();
    restoreHotelFeatures();
    initEventListeners();
    initSubscription();
    restoreFooter();
    setupGallery();
    updateTotalPrice();
    
    console.log('App initialized with enhanced weather features');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

export { 
    loadCurrentWeather, 
    updateWeatherForCity, 
    generateForecastCards, 
    initWeatherSection 
};