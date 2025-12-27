function e(e,t,a,r){Object.defineProperty(e,t,{get:a,set:r,enumerable:!0,configurable:!0})}var t=globalThis,a={},r={},o=t.parcelRequire7680;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},t.parcelRequire7680=o);var n=o.register;n("eyCsv",function(t,a){e(t.exports,"hotels",()=>r),e(t.exports,"checkoutData",()=>o),e(t.exports,"bookings",()=>n),e(t.exports,"orderHistory",()=>i),e(t.exports,"IMAGE_GREY_COLOR",()=>s);let r=[{id:1,name:"Hotel Sea Crown",rating:4.8,reviews:122,price:150,features:["Beach View","All Inclusive","Spa"],color:"#4ECDC4"},{id:2,name:"Long Beach Hotel",rating:4.8,reviews:122,price:150,features:["Beach Access","Breakfast","Parking"],color:"#FFD166"},{id:3,name:"Majestic Maldives",rating:4.8,reviews:122,price:150,features:["Private Beach","Luxury Villa","Butler Service"],color:"#06D6A0"},{id:4,name:"Breathtaking Bali",rating:4.8,reviews:122,price:150,features:["Yoga Classes","Spa","Cultural Tours"],color:"#118AB2"}],o={cart:[{id:1,name:"Warsaw Day Tour",price:20,quantity:1,rating:5,reviews:234}],shippingInfo:{firstName:"",lastName:"",address:"",address2:""},paymentMethod:"paypal"};new Date().toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"});let n=[],i=[],s="#D3D3D3"}),n("nOdg8",function(t,a){function r(){document.querySelectorAll("[disabled]").forEach(e=>{e.disabled=!1,e.classList.contains("book-now-btn")&&(e.textContent="Book Now - Available!",e.style.backgroundColor="",e.style.opacity="1")})}function o(){let e=document.querySelector(".footer");e?e.outerHTML=`
    <div class="footer">
    <div class="footer-content">
        <div class="footer-col">
        <h3>Triptopia</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div class="social-icons">
            <span style="font-size:21px;cursor:pointer;margin-right:10px;color:#1b374e;">\u{25CB}</span>
            <span style="font-size:21px;cursor:pointer;margin-right:10px;color:#1b374e;">\u{25CB}</span>
            <span style="font-size:21px;cursor:pointer;margin-right:10px;color:#1b374e;">\u{25CB}</span>
            <span style="font-size:21px;cursor:pointer;color:#1b374e;">\u{25CB}</span>
        </div>
        </div>
        <div class="footer-col">
        <h4>Destinations</h4>
        <ul>
            <li><a href="#" style="color:#666;text-decoration:none;">Europe</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">Asia</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">North America</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">Africa</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">South America</a></li>
        </ul>
        </div>
        <div class="footer-col">
        <h4>Company</h4>
        <ul>
            <li><a href="#" style="color:#666;text-decoration:none;">About us</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">Careers</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">Blog</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">Press</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">Contact</a></li>
        </ul>
        </div>
        <div class="footer-col">
        <h4>Gallery</h4>
        <div class="footer-gallery">
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
        </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>\xa9 2024 Triptopia. All rights reserved.</p>
        <div class="footer-links">
        <a href="#" style="color:#666;text-decoration:none;margin-left:15px;">Privacy Policy</a>
        <a href="#" style="color:#666;text-decoration:none;margin-left:15px;">Terms of Service</a>
        <a href="#" style="color:#666;text-decoration:none;margin-left:15px;">Cookies Settings</a>
        </div>
    </div>
    </div>
`:console.warn("Footer element not found")}e(t.exports,"enableForm",()=>r),e(t.exports,"restoreFooter",()=>o)}),n("6GWx1",function(t,a){e(t.exports,"showNotification",()=>n),e(t.exports,"initSubscription",()=>i),e(t.exports,"setupGallery",()=>s),e(t.exports,"setupFaqDropdown",()=>l),e(t.exports,"formatCardNumber",()=>c),e(t.exports,"formatExpDate",()=>d);var r=o("eyCsv");function n(e,t="info",a=3e3){document.querySelectorAll(".notification").forEach(e=>e.remove());let r=document.createElement("div");r.className=`notification notification-${t}`,r.textContent=e,r.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${"success"===t?"#4CAF50":"error"===t?"#f44336":"#2196F3"};
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    z-index: 1000;
    animation: slideInRight 0.3s ease, fadeOut 0.3s ease ${a-300}ms;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);`,document.body.appendChild(r),setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},a)}function i(){let e=document.querySelector(".footer-offer form");e&&e.addEventListener("submit",e=>{e.preventDefault();let t=e.target.querySelector('input[type="email"]').value;/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?(n(`Thank you for subscribing with ${t}!`,"success"),e.target.reset()):n("Please enter a valid email address","error")})}function s(){document.querySelectorAll(".footer-gallery div").forEach(e=>{e.style.backgroundColor=r.IMAGE_GREY_COLOR,e.style.background=r.IMAGE_GREY_COLOR,e.style.backgroundImage="none",e.style.cursor="default",e.style.transition="none",e.style.borderRadius="4px",e.onmouseenter=null,e.onmouseleave=null,e.onclick=null})}function l(){let e=document.querySelectorAll(".faq-question");0!==e.length&&(e.forEach(e=>{e.addEventListener("click",()=>{let t=e.parentElement,a=t.querySelector(".faq-answer"),r=e.querySelector(".toggle-icon"),o=t.classList.contains("active");document.querySelectorAll(".faq-item").forEach(e=>{e.classList.remove("active"),e.querySelector(".faq-answer").classList.remove("active");let t=e.querySelector(".toggle-icon");t&&(t.textContent="+")}),!o&&(t.classList.add("active"),a.classList.add("active"),r&&(r.textContent="×"))})}),document.addEventListener("click",e=>{e.target.closest(".faq-item")||document.querySelectorAll(".faq-item").forEach(e=>{e.classList.remove("active"),e.querySelector(".faq-answer").classList.remove("active");let t=e.querySelector(".toggle-icon");t&&(t.textContent="+")})}))}function c(e){let t=e.target.value.replace(/\D/g,"");t=t.replace(/(\d{4})(?=\d)/g,"$1 "),e.target.value=t.substring(0,19)}function d(e){let t=e.target.value.replace(/\D/g,"");t.length>=2&&(t=t.substring(0,2)+"/"+t.substring(2,4)),e.target.value=t.substring(0,5)}});var i=o("eyCsv"),s=o("nOdg8"),l=o("6GWx1");let c=new class{constructor(){this.apiKey="9af50da83394dbd3afa618ee50ba7b5a",this.defaultCity="Dubai",this.baseUrl="http://api.weatherstack.com"}async getCurrentWeather(){try{let e=await fetch(`${this.baseUrl}/current?access_key=${this.apiKey}&query=${this.defaultCity}&units=m`);if(!e.ok)throw Error(`Weather API error: ${e.status}`);let t=await e.json();if(t.error)throw Error(`Weatherstack API error: ${t.error.info}`);return console.log("Current weather data received:",t),this._formatCurrentWeatherData(t)}catch(e){throw console.error("Error fetching current weather:",e),e}}async getWeatherForDate(e){try{let t=e.toISOString().split("T")[0],a=new Date().toISOString().split("T")[0];if(t===a)return await this.getCurrentWeather();if(e>new Date)return await this.getForecastForDate(e);return await this.getHistoricalWeather(t)}catch(e){throw console.error("Error fetching weather for date:",e),e}}async getForecastForDate(e){try{let t=await fetch(`${this.baseUrl}/forecast?access_key=${this.apiKey}&query=${this.defaultCity}&forecast_days=7&units=m`);if(!t.ok)throw Error(`Forecast API error: ${t.status}`);let a=await t.json();if(a.error)throw Error(`Weatherstack API error: ${a.error.info}`);let r=e.toISOString().split("T")[0],o=a.forecast[r];if(!o)throw Error("No forecast available for selected date");return console.log("Forecast data for date received:",o),{location:a.location.name,date:e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),temperature:Math.round(o.avgtemp),feelsLike:Math.round(o.avgtemp),description:o.hourly[0].weather_descriptions[0],iconCode:this._mapWeatherCodeToIcon(o.hourly[0].weather_code),humidity:o.avghumidity,windSpeed:Math.round(3.6*o.maxwind),pressure:o.hourly[0].pressure,isForecast:!0}}catch(e){throw console.error("Error fetching forecast:",e),e}}async getHistoricalWeather(e){try{let t=await fetch(`${this.baseUrl}/historical?access_key=${this.apiKey}&query=${this.defaultCity}&historical_date=${e}&units=m`);if(!t.ok)throw Error(`Historical API error: ${t.status}`);let a=await t.json();if(a.error)throw Error(`Weatherstack API error: ${a.error.info}`);console.log("Historical weather data received:",a);let r=a.historical[e];return{location:a.location.name,date:new Date(e).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),temperature:Math.round(r.avgtemp),feelsLike:Math.round(r.avgtemp),description:r.hourly[0].weather_descriptions[0],iconCode:this._mapWeatherCodeToIcon(r.hourly[0].weather_code),humidity:r.avghumidity,windSpeed:Math.round(3.6*r.maxwind),pressure:r.hourly[0].pressure,isHistorical:!0}}catch(e){throw console.error("Error fetching historical weather:",e),e}}_formatCurrentWeatherData(e){return{location:e.location.name,date:new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),temperature:Math.round(e.current.temperature),feelsLike:Math.round(e.current.feelslike),description:e.current.weather_descriptions[0],iconCode:this._mapWeatherCodeToIcon(e.current.weather_code),humidity:e.current.humidity,windSpeed:Math.round(3.6*e.current.wind_speed),pressure:e.current.pressure,isCurrent:!0,observationTime:e.current.observation_time}}_mapWeatherCodeToIcon(e){return({113:"01d",116:"02d",119:"03d",122:"04d",143:"50d",248:"50d",260:"50d",263:"09d",266:"09d",281:"09d",284:"09d",176:"10d",293:"10d",296:"10d",299:"10d",302:"10d",305:"10d",308:"10d",311:"13d",314:"13d",317:"13d",320:"13d",179:"13d",182:"13d",185:"13d",227:"13d",230:"13d",323:"13d",326:"13d",329:"13d",332:"13d",335:"13d",338:"13d",200:"11d",386:"11d",389:"11d",392:"11d",395:"11d"})[e]||"01d"}getWeatherIcon(e){return({"01d":"☀️","01n":"🌙","02d":"⛅","02n":"☁️","03d":"☁️","03n":"☁️","04d":"☁️","04n":"☁️","09d":"🌧️","09n":"🌧️","10d":"🌦️","10n":"🌦️","11d":"⛈️","11n":"⛈️","13d":"❄️","13n":"❄️","50d":"🌫️","50n":"🌫️"})[e]||"🌈"}};async function d(){console.log("Initializing weather section..."),u("Warsaw"),h("Warsaw",3);let e=document.querySelectorAll(".city-btn");e.length>0&&e.forEach(t=>{t.addEventListener("click",function(){e.forEach(e=>e.classList.remove("active")),this.classList.add("active");let t=this.dataset.city;p(t);let a=document.querySelector(".duration-btn.active");a&&h(t,parseInt(a.dataset.days))})});let t=document.querySelectorAll(".duration-btn");t.length>0&&t.forEach(e=>{e.addEventListener("click",function(){let e=parseInt(this.dataset.days);t.forEach(e=>e.classList.remove("active")),this.classList.add("active");let a=document.querySelector(".multi-day-forecast h4");a&&(a.innerHTML=`<i class="fas fa-chart-line"></i> ${e}-Day Forecast`);let r=document.getElementById("multiDayForecast");if(r)if(e>1){r.style.display="block";let t=document.querySelector(".city-btn.active");t&&h(t.dataset.city,e)}else r.style.display="none"})});let a=document.getElementById("weatherForm");a&&a.addEventListener("submit",async e=>{e.preventDefault();let t=new Date(document.getElementById("dateInput").value),a=new Date;a.setHours(0,0,0,0);let r=new Date;if(r.setDate(r.getDate()+7),t<a||t>r)return void y("Please select a date within the next 7 days.");let o=document.getElementById("currentWeather");o&&(o.innerHTML=`
                    <div style="text-align: center; padding: 20px;">
                        <div class="weather-spinner"></div>
                        <p>Loading weather for ${t.toLocaleDateString()}...</p>
                    </div>
                `);try{setTimeout(()=>{let e=document.querySelector(".city-btn.active"),a=e?e.dataset.city:"Warsaw";(function(e,t){let a=document.getElementById("currentWeather");if(!a)return;let r=f(e),o=t.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),n=Math.floor(6*Math.random())-3,i=r.temp+n;a.innerHTML=`
        <div class="weather-header">
            <div class="location-time">
                <h3 class="location">
                    <i class="fas fa-map-marker-alt"></i> ${e}
                    <span class="data-type forecast">FORECAST</span>
                </h3>
                <p class="date-time">${o} at 12:00 PM</p>
            </div>
            <div class="weather-main">
                <div class="temperature">${i}\xb0C</div>
                <div class="condition-icon">
                    <i class="${r.icon}"></i>
                    <span class="condition">${r.condition}</span>
                </div>
            </div>
        </div>
        
        <div class="weather-details">
            <div class="detail">
                <span class="label"><i class="fas fa-temperature-high"></i> Feels like:</span>
                <span class="value">${i}\xb0C</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-wind"></i> Wind:</span>
                <span class="value">${r.wind}</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-tachometer-alt"></i> Pressure:</span>
                <span class="value">${r.pressure}</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-info-circle"></i> Forecast for:</span>
                <span class="value">${o}</span>
            </div>
        </div>
    `})(a,t),(0,l.showNotification)(`Weather for ${t.toLocaleDateString()} loaded!`,"success")},1e3)}catch(e){console.error("Weather fetch error:",e),y("Failed to load weather data. Please try again.")}});let r=document.getElementById("dateInput");if(r){let e=new Date().toISOString().split("T")[0],t=new Date;t.setDate(t.getDate()+7),r.min=e,r.max=t.toISOString().split("T")[0],r.value=e}}async function u(e="Warsaw"){console.log(`\u{1F324}\u{FE0F} Loading current weather for ${e}...`);try{try{await c.getCurrentWeather(e),console.log(`Real weather data loaded for ${e}`)}catch(t){console.log(`Using simulated data for ${e}:`,t.message),f(e)}p(e)}catch(t){console.error("Weather load error:",t),p(e)}}function p(e){console.log(`Updating weather display for ${e}...`);let t=document.getElementById("currentWeather");if(!t)return;let a=f(e);t.innerHTML=`
        <div class="weather-header">
            <div class="location-time">
                <h3 class="location">
                    <i class="fas fa-map-marker-alt"></i> ${e}
                    <span class="live-badge">LIVE</span>
                </h3>
                <p class="date-time">${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}</p>
            </div>
            <div class="weather-main">
                <div class="temperature">${a.temp}\xb0C</div>
                <div class="condition-icon">
                    <i class="${a.icon}"></i>
                    <span class="condition">${a.condition}</span>
                </div>
            </div>
        </div>
        
        <div class="weather-details">
            <div class="detail">
                <span class="label"><i class="fas fa-temperature-high"></i> Feels like:</span>
                <span class="value">${a.feelsLike}\xb0C</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-wind"></i> Wind:</span>
                <span class="value">${a.wind}</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-tachometer-alt"></i> Pressure:</span>
                <span class="value">${a.pressure}</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-eye"></i> Observed:</span>
                <span class="value">${a.observed}</span>
            </div>
        </div>
    `}function h(e,t){console.log(`\u{1F4C5} Generating ${t}-day forecast for ${e}...`);let a=document.querySelector(".forecast-cards");if(!a)return;let r=function(e,t){let a=f(e),r=[],o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=new Date,s=["Clear","Partly Cloudy","Cloudy","Light Rain","Sunny","Rain","Snow"],l=["fa-sun","fa-cloud-sun","fa-cloud","fa-cloud-rain","fa-sun","fa-cloud-showers-heavy","fa-snowflake"];for(let e=0;e<t;e++){let t=new Date(i);t.setDate(i.getDate()+e);let c=`${o[t.getDay()]}, ${n[t.getMonth()]} ${t.getDate()}`,d=Math.floor(6*Math.random())-3,u=a.temp+d,p=e%s.length,h=s[p],f=`fas ${l[p]}`;r.push({date:c,temp:u,condition:h,icon:f})}return r}(e,t);a.innerHTML="",r.forEach(e=>{let t=document.createElement("div");t.className="forecast-card",t.innerHTML=`
            <div class="forecast-date">${e.date}</div>
            <div class="forecast-icon"><i class="${e.icon}"></i></div>
            <div class="forecast-temp">${e.temp}\xb0C</div>
            <div class="forecast-condition">${e.condition}</div>
        `,a.appendChild(t)})}function f(e){let t={Warsaw:{temp:20,condition:"Clear",icon:"fas fa-sun",feelsLike:20,wind:"14 km/h",pressure:"1014 hPa",observed:"12:14 AM"},Dubai:{temp:28,condition:"Sunny",icon:"fas fa-sun",feelsLike:30,wind:"8 km/h",pressure:"1010 hPa",observed:"12:00 PM"},London:{temp:12,condition:"Cloudy",icon:"fas fa-cloud",feelsLike:10,wind:"18 km/h",pressure:"1018 hPa",observed:"11:30 AM"},"New York":{temp:8,condition:"Snow",icon:"fas fa-snowflake",feelsLike:5,wind:"22 km/h",pressure:"1022 hPa",observed:"1:00 PM"}};return t[e]||t.Warsaw}function y(e){let t=document.getElementById("weatherError");t&&(t.innerHTML=`<i class="fas fa-exclamation-triangle"></i><span>${e}</span>`,t.style.display="flex",setTimeout(()=>{t.style.display="none"},5e3))}function m(){let e=document.querySelector(".total-payment span:last-child"),t=document.querySelector(".price-breakdown");if(!e||!t)return;let a=0;document.querySelectorAll('.extra-features input[type="checkbox"]').forEach(e=>{if(e.checked){let t=parseInt(e.parentElement.querySelector("span").textContent.replace("$",""))||0;a+=t}});let r=410+a+5;e.textContent=`$${r}`,t.innerHTML=`
        <div class="breakdown-item">
            <span>1 Nights</span>
            <span>$500</span>
        </div>
        <div class="breakdown-item">
            <span>Discount 20%</span>
            <span>-$100</span>
        </div>
        <div class="breakdown-item">
            <span>Breakfast per person</span>
            <span>$10</span>
        </div>
        ${a>0?`
        <div class="breakdown-item">
            <span>Extra features</span>
            <span>$${a}</span>
        </div>
        `:""}
        <div class="breakdown-item">
            <span>Service fee</span>
            <span>$5</span>
        </div>`}function v(){let e,t,a,r,o,n,c;console.log("Triptopia App Initializing with Enhanced Weather Features..."),d(),(0,s.enableForm)(),!(e=document.querySelector(".catalog-cards"))||e.innerHTML.includes("card-btn")||(e.innerHTML="",i.hotels.forEach(t=>{let a=document.createElement("article");a.className="catalog-card",a.innerHTML=`
                <div class="img-placeholder" style="background-color: ${t.color};"></div>
                <div class="catalog-card-content">
                    <div>
                        <div class="card-hotel-title">${t.name}</div>
                        <div class="card-rating">
                            <span class="stars">${"★".repeat(Math.floor(t.rating))}</span> 
                            ${t.rating} (${t.reviews} reviews)
                        </div>
                    </div>
                    <div class="card-price-row">
                        <div>
                            <span class="card-price">$${t.price}</span>
                            <span class="card-price-per">/Person</span>
                        </div>
                        <button class="card-btn" data-id="${t.id}">Book Trip</button>
                    </div>
                </div>`,e.appendChild(a)})),(0,l.setupFaqDropdown)(),(t=document.querySelector(".hotel-desc"))&&(t.innerHTML="Located just steps from the sandy beach, our hotel offers breathtaking ocean views from every room. Enjoy luxury amenities including spa, fine dining restaurants, and infinity pool. Perfect for romantic getaways and family vacations alike."),document.addEventListener("click",e=>{if(e.target.classList.contains("card-btn")&&!function(e,t){let a=i.hotels.find(t=>t.id===e);if(!a)return(0,l.showNotification)("Hotel not found","error");let r=t.textContent,o=t.style.backgroundColor,n=t.style.color;t.textContent="Booking...",t.style.backgroundColor="#4CAF50",t.style.color="white",setTimeout(()=>{(0,l.showNotification)(`Successfully booked ${a.name} for $${a.price}`,"success"),t.textContent=r,t.style.backgroundColor=o,t.style.color=n,i.bookings.push({id:Date.now(),hotelId:e,hotelName:a.name,price:a.price,date:new Date().toLocaleDateString()})},500)}(parseInt(e.target.dataset.id),e.target),e.target.classList.contains("book-now-btn")){e.preventDefault();let t=e.target.textContent,a=e.target.style.backgroundColor;e.target.textContent="Processing...",e.target.style.backgroundColor="#FF9800",setTimeout(()=>{(0,l.showNotification)("Booking submitted! Thank you for your reservation.","success"),e.target.textContent=t,e.target.style.backgroundColor=a},1e3)}if(e.target.classList.contains("book-trip-btn")){let e=document.querySelector(".sidebar-card");e&&(e.scrollIntoView({behavior:"smooth"}),e.style.boxShadow="0 0 0 3px rgba(76, 175, 80, 0.3)",setTimeout(()=>{e.style.boxShadow=""},2e3))}}),a=document.querySelectorAll(".description-tabs > div"),r=document.querySelector(".hotel-desc"),o=document.querySelector(".features-list"),n=document.querySelector(".amenities-block"),a.length>0&&r&&(o&&(o.style.display="none"),n&&(n.style.display="none"),a.forEach((e,t)=>{e.addEventListener("click",()=>{a.forEach(e=>e.classList.remove("active")),e.classList.add("active"),r&&(r.style.display=0===t?"block":"none"),o&&(o.style.display=1===t?"flex":"none"),n&&(n.style.display=2===t?"flex":"none"),3===t&&r&&(r.style.display="block",r.textContent="Price history shows fluctuations over seasons. Current price is at its lowest for this month.")})})),(c=document.querySelector(".more-details-btn"))&&c.addEventListener("click",()=>{let e=document.querySelector(".amenities-block");if(e){let t="none"===e.style.display;e.style.display=t?"flex":"none",c.textContent=t?"Hide Amenities":"Show More Amenities"}}),document.querySelectorAll('.extra-features input[type="checkbox"]').forEach(e=>{e.addEventListener("change",function(){m();let e=this.parentElement;this.checked?(e.style.backgroundColor="#f0f9ff",e.style.padding="5px",e.style.borderRadius="3px"):(e.style.backgroundColor="",e.style.padding="")})}),(0,l.initSubscription)(),(0,s.restoreFooter)(),(0,l.setupGallery)(),m(),console.log("App initialized with enhanced weather features")}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",v):v();
//# sourceMappingURL=index15.a293a50a.js.map
