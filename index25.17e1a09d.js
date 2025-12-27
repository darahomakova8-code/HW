function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}var t=globalThis,o={},r={},n=t.parcelRequire7680;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire7680=n);var a=n.register;a("eyCsv",function(t,o){e(t.exports,"hotels",()=>r),e(t.exports,"checkoutData",()=>n),e(t.exports,"bookings",()=>a),e(t.exports,"orderHistory",()=>i),e(t.exports,"IMAGE_GREY_COLOR",()=>l);let r=[{id:1,name:"Hotel Sea Crown",rating:4.8,reviews:122,price:150,features:["Beach View","All Inclusive","Spa"],color:"#4ECDC4"},{id:2,name:"Long Beach Hotel",rating:4.8,reviews:122,price:150,features:["Beach Access","Breakfast","Parking"],color:"#FFD166"},{id:3,name:"Majestic Maldives",rating:4.8,reviews:122,price:150,features:["Private Beach","Luxury Villa","Butler Service"],color:"#06D6A0"},{id:4,name:"Breathtaking Bali",rating:4.8,reviews:122,price:150,features:["Yoga Classes","Spa","Cultural Tours"],color:"#118AB2"}],n={cart:[{id:1,name:"Warsaw Day Tour",price:20,quantity:1,rating:5,reviews:234}],shippingInfo:{firstName:"",lastName:"",address:"",address2:""},paymentMethod:"paypal"};new Date().toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"});let a=[],i=[],l="#D3D3D3"}),a("nOdg8",function(t,o){function r(){document.querySelectorAll("[disabled]").forEach(e=>{e.disabled=!1,e.classList.contains("book-now-btn")&&(e.textContent="Book Now - Available!",e.style.backgroundColor="",e.style.opacity="1")})}function n(){let e=document.querySelector(".footer");e?e.outerHTML=`
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
`:console.warn("Footer element not found")}e(t.exports,"enableForm",()=>r),e(t.exports,"restoreFooter",()=>n)}),a("6GWx1",function(t,o){e(t.exports,"showNotification",()=>a),e(t.exports,"initSubscription",()=>i),e(t.exports,"setupGallery",()=>l),e(t.exports,"setupFaqDropdown",()=>c),e(t.exports,"formatCardNumber",()=>s),e(t.exports,"formatExpDate",()=>d);var r=n("eyCsv");function a(e,t="info",o=3e3){document.querySelectorAll(".notification").forEach(e=>e.remove());let r=document.createElement("div");r.className=`notification notification-${t}`,r.textContent=e,r.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${"success"===t?"#4CAF50":"error"===t?"#f44336":"#2196F3"};
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    z-index: 1000;
    animation: slideInRight 0.3s ease, fadeOut 0.3s ease ${o-300}ms;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);`,document.body.appendChild(r),setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},o)}function i(){let e=document.querySelector(".footer-offer form");e&&e.addEventListener("submit",e=>{e.preventDefault();let t=e.target.querySelector('input[type="email"]').value;/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?(a(`Thank you for subscribing with ${t}!`,"success"),e.target.reset()):a("Please enter a valid email address","error")})}function l(){document.querySelectorAll(".footer-gallery div").forEach(e=>{e.style.backgroundColor=r.IMAGE_GREY_COLOR,e.style.background=r.IMAGE_GREY_COLOR,e.style.backgroundImage="none",e.style.cursor="default",e.style.transition="none",e.style.borderRadius="4px",e.onmouseenter=null,e.onmouseleave=null,e.onclick=null})}function c(){let e=document.querySelectorAll(".faq-question");0!==e.length&&(e.forEach(e=>{e.addEventListener("click",()=>{let t=e.parentElement,o=t.querySelector(".faq-answer"),r=e.querySelector(".toggle-icon"),n=t.classList.contains("active");document.querySelectorAll(".faq-item").forEach(e=>{e.classList.remove("active"),e.querySelector(".faq-answer").classList.remove("active");let t=e.querySelector(".toggle-icon");t&&(t.textContent="+")}),!n&&(t.classList.add("active"),o.classList.add("active"),r&&(r.textContent="×"))})}),document.addEventListener("click",e=>{e.target.closest(".faq-item")||document.querySelectorAll(".faq-item").forEach(e=>{e.classList.remove("active"),e.querySelector(".faq-answer").classList.remove("active");let t=e.querySelector(".toggle-icon");t&&(t.textContent="+")})}))}function s(e){let t=e.target.value.replace(/\D/g,"");t=t.replace(/(\d{4})(?=\d)/g,"$1 "),e.target.value=t.substring(0,19)}function d(e){let t=e.target.value.replace(/\D/g,"");t.length>=2&&(t=t.substring(0,2)+"/"+t.substring(2,4)),e.target.value=t.substring(0,5)}});var i=n("eyCsv"),l=n("nOdg8"),c=n("6GWx1");let s="triptopia_checkout_form",d=()=>{try{let e="__test__";return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return console.warn("Session Storage not supported"),!1}},u=()=>{if(!d())return!1;try{let e={};document.querySelectorAll('input[type="text"], input[type="email"]').forEach(t=>{e[t.placeholder||t.name||`field_${Math.random()}`]=t.value});let t=document.querySelector('input[name="payment"]:checked')?.value;return t&&(e.paymentMethod=t),sessionStorage.setItem(s,JSON.stringify(e)),!0}catch(e){return console.error("Error saving form:",e),!1}};function p(){let e=document.querySelector('input[value="credit"]'),t=document.querySelector(".card-fields");e&&t&&(t.style.display=e.checked?"block":"none"),d()&&u()}function m(e){if(e.preventDefault(),!function(){for(let e of[document.querySelector('input[placeholder*="First Name"]')?.value,document.querySelector('input[placeholder*="Last Name"]')?.value,document.querySelector('input[placeholder="Full Address"]')?.value])if(!e?.trim())return(0,c.showNotification)("Please fill in all required fields","error"),!1;return!document.querySelector('input[value="credit"]')?.checked||16===(document.querySelector('input[placeholder="XXXX XXXX XXXX XXXX"]')?.value||"").replace(/\s/g,"").length||((0,c.showNotification)("Please enter a valid 16-digit card number","error"),!1)}())return;let t={id:Date.now(),date:new Date().toLocaleString(),total:parseFloat(document.querySelector(".breakdown-total span:last-child").textContent.replace("$","")),status:"confirmed"};(0,c.showNotification)(`Order #${t.id} confirmed! Total: $${t.total.toFixed(2)}`,"success"),d()&&(()=>{if(d())try{return sessionStorage.removeItem(s),!0}catch(e){return console.error("Error clearing form:",e),!1}})(),i.orderHistory.push(t),document.querySelectorAll('input[type="text"]').forEach(e=>{e.value=""});let o=document.querySelector('input[value="paypal"]');o&&(o.checked=!0,p())}function f(){console.log("Initializing checkout page..."),d()||(0,c.showNotification)("Note: Form data will not be saved if you refresh the page","info"),d()?(document.querySelectorAll("input").forEach(e=>{e.addEventListener("input",()=>{clearTimeout(e._saveTimer),e._saveTimer=setTimeout(()=>{u(),console.log("Form auto-saved")},500)})}),document.querySelectorAll('input[name="payment"]').forEach(e=>{e.addEventListener("change",()=>{u()})})):console.log("Auto-save disabled: Session Storage not supported"),d()&&setTimeout(()=>{if((()=>{if(!d())return!1;try{let e=sessionStorage.getItem(s);if(!e)return!1;let t=JSON.parse(e);if(document.querySelectorAll('input[type="text"], input[type="email"]').forEach(e=>{let o=e.placeholder||e.name;t[o]&&(e.value=t[o])}),t.paymentMethod){let e=document.querySelector(`input[value="${t.paymentMethod}"]`);if(e&&(e.checked=!0,"credit"===t.paymentMethod)){let e=document.querySelector(".card-fields");e&&(e.style.display="block")}}return console.log("Form restored from Session Storage"),!0}catch(e){return console.error("Error loading form:",e),!1}})()){let e=document.createElement("div");e.textContent="✓ Form restored",e.style.cssText=`
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
            `,document.body.appendChild(e),setTimeout(()=>{e.parentNode&&e.remove()},3e3)}},100),document.querySelectorAll('input[name="payment"]').forEach(e=>{e.addEventListener("change",p)});let e=document.querySelector('input[placeholder="XXXX XXXX XXXX XXXX"]');e&&e.addEventListener("input",c.formatCardNumber);let t=document.querySelector('input[placeholder="MM/YY"]');t&&t.addEventListener("input",c.formatExpDate);let o=document.querySelector(".complete-booking-btn");o&&o.addEventListener("click",m);let r=document.querySelector(".breakdown-total span:last-child");if(r){let e=i.checkoutData.cart.reduce((e,t)=>e+t.price*t.quantity,0);r.textContent=`$${(e+20).toFixed(2)}`}(0,c.initSubscription)(),(0,l.restoreFooter)(),(0,c.setupGallery)(),console.log("Checkout page initialized with Storage API")}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",f):f();
//# sourceMappingURL=index25.17e1a09d.js.map
