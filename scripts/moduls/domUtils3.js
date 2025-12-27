export function enableForm() {
const disabledElements = document.querySelectorAll('[disabled]');
disabledElements.forEach(el => {
    el.disabled = false;
    if (el.classList.contains('book-now-btn')) {
    el.textContent = 'Book Now - Available!';
    el.style.backgroundColor = '';
    el.style.opacity = '1';
    }
});
}

// футеры
export function restoreFooter() {
const footer = document.querySelector('.footer');
if (!footer) {
    console.warn('Footer element not found');
    return;
}

const originalFooterHTML = `
    <div class="footer">
    <div class="footer-content">
        <div class="footer-col">
        <h3>Triptopia</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div class="social-icons">
            <span style="font-size:21px;cursor:pointer;margin-right:10px;color:#1b374e;">○</span>
            <span style="font-size:21px;cursor:pointer;margin-right:10px;color:#1b374e;">○</span>
            <span style="font-size:21px;cursor:pointer;margin-right:10px;color:#1b374e;">○</span>
            <span style="font-size:21px;cursor:pointer;color:#1b374e;">○</span>
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
        <p>© 2024 Triptopia. All rights reserved.</p>
        <div class="footer-links">
        <a href="#" style="color:#666;text-decoration:none;margin-left:15px;">Privacy Policy</a>
        <a href="#" style="color:#666;text-decoration:none;margin-left:15px;">Terms of Service</a>
        <a href="#" style="color:#666;text-decoration:none;margin-left:15px;">Cookies Settings</a>
        </div>
    </div>
    </div>
`;

footer.outerHTML = originalFooterHTML;
}