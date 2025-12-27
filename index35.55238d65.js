function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}var t=globalThis,o={},r={},i=t.parcelRequire7680;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire7680=i);var a=i.register;a("eyCsv",function(t,o){e(t.exports,"hotels",()=>r),e(t.exports,"checkoutData",()=>i),e(t.exports,"bookings",()=>a),e(t.exports,"orderHistory",()=>n),e(t.exports,"IMAGE_GREY_COLOR",()=>l);let r=[{id:1,name:"Hotel Sea Crown",rating:4.8,reviews:122,price:150,features:["Beach View","All Inclusive","Spa"],color:"#4ECDC4"},{id:2,name:"Long Beach Hotel",rating:4.8,reviews:122,price:150,features:["Beach Access","Breakfast","Parking"],color:"#FFD166"},{id:3,name:"Majestic Maldives",rating:4.8,reviews:122,price:150,features:["Private Beach","Luxury Villa","Butler Service"],color:"#06D6A0"},{id:4,name:"Breathtaking Bali",rating:4.8,reviews:122,price:150,features:["Yoga Classes","Spa","Cultural Tours"],color:"#118AB2"}],i={cart:[{id:1,name:"Warsaw Day Tour",price:20,quantity:1,rating:5,reviews:234}],shippingInfo:{firstName:"",lastName:"",address:"",address2:""},paymentMethod:"paypal"};new Date().toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"});let a=[],n=[],l="#D3D3D3"}),a("nOdg8",function(t,o){function r(){document.querySelectorAll("[disabled]").forEach(e=>{e.disabled=!1,e.classList.contains("book-now-btn")&&(e.textContent="Book Now - Available!",e.style.backgroundColor="",e.style.opacity="1")})}function i(){let e=document.querySelector(".footer");e?e.outerHTML=`
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
`:console.warn("Footer element not found")}e(t.exports,"enableForm",()=>r),e(t.exports,"restoreFooter",()=>i)}),a("6GWx1",function(t,o){e(t.exports,"showNotification",()=>a),e(t.exports,"initSubscription",()=>n),e(t.exports,"setupGallery",()=>l),e(t.exports,"setupFaqDropdown",()=>s),e(t.exports,"formatCardNumber",()=>c),e(t.exports,"formatExpDate",()=>d);var r=i("eyCsv");function a(e,t="info",o=3e3){document.querySelectorAll(".notification").forEach(e=>e.remove());let r=document.createElement("div");r.className=`notification notification-${t}`,r.textContent=e,r.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${"success"===t?"#4CAF50":"error"===t?"#f44336":"#2196F3"};
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    z-index: 1000;
    animation: slideInRight 0.3s ease, fadeOut 0.3s ease ${o-300}ms;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);`,document.body.appendChild(r),setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},o)}function n(){let e=document.querySelector(".footer-offer form");e&&e.addEventListener("submit",e=>{e.preventDefault();let t=e.target.querySelector('input[type="email"]').value;/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?(a(`Thank you for subscribing with ${t}!`,"success"),e.target.reset()):a("Please enter a valid email address","error")})}function l(){document.querySelectorAll(".footer-gallery div").forEach(e=>{e.style.backgroundColor=r.IMAGE_GREY_COLOR,e.style.background=r.IMAGE_GREY_COLOR,e.style.backgroundImage="none",e.style.cursor="default",e.style.transition="none",e.style.borderRadius="4px",e.onmouseenter=null,e.onmouseleave=null,e.onclick=null})}function s(){let e=document.querySelectorAll(".faq-question");0!==e.length&&(e.forEach(e=>{e.addEventListener("click",()=>{let t=e.parentElement,o=t.querySelector(".faq-answer"),r=e.querySelector(".toggle-icon"),i=t.classList.contains("active");document.querySelectorAll(".faq-item").forEach(e=>{e.classList.remove("active"),e.querySelector(".faq-answer").classList.remove("active");let t=e.querySelector(".toggle-icon");t&&(t.textContent="+")}),!i&&(t.classList.add("active"),o.classList.add("active"),r&&(r.textContent="×"))})}),document.addEventListener("click",e=>{e.target.closest(".faq-item")||document.querySelectorAll(".faq-item").forEach(e=>{e.classList.remove("active"),e.querySelector(".faq-answer").classList.remove("active");let t=e.querySelector(".toggle-icon");t&&(t.textContent="+")})}))}function c(e){let t=e.target.value.replace(/\D/g,"");t=t.replace(/(\d{4})(?=\d)/g,"$1 "),e.target.value=t.substring(0,19)}function d(e){let t=e.target.value.replace(/\D/g,"");t.length>=2&&(t=t.substring(0,2)+"/"+t.substring(2,4)),e.target.value=t.substring(0,5)}}),i("eyCsv");var n=i("nOdg8"),l=i("6GWx1");function s(){console.log("Confirmation page loading..."),setTimeout(()=>{console.log("Confirmation page initialized"),(0,l.initSubscription)(),initInteractiveElements(),(0,n.restoreFooter)(),(0,l.setupGallery)(),console.log("Confirmation page ready!")},500)}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",s):s();
//# sourceMappingURL=index35.55238d65.js.map
