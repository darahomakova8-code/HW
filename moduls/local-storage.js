const FORM_STORAGE_KEY = 'triptopia_checkout_form';

export const isStorageSupported = () => {
    try {
        const testKey = '__test__';
        sessionStorage.setItem(testKey, testKey);
        sessionStorage.removeItem(testKey);
        return true;
    } catch (e) {
        console.warn('Session Storage not supported');
        return false;
    }
};

export const saveFormToStorage = () => {
    if (!isStorageSupported()) return false;
    try {
        const formData = {};
        document.querySelectorAll('input[type="text"], input[type="email"]').forEach(input => {
            const name = input.placeholder || input.name || `field_${Math.random()}`;
            formData[name] = input.value;
        });
        const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value;
        if (paymentMethod) {
            formData.paymentMethod = paymentMethod;
        }
        
        sessionStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
        return true;
    } catch (error) {
        console.error('Error saving form:', error);
        return false;
    }
};

export const loadFormFromStorage = () => {
    if (!isStorageSupported()) return false;
    
    try {
        const savedData = sessionStorage.getItem(FORM_STORAGE_KEY);
        if (!savedData) return false;
        
        const formData = JSON.parse(savedData);
        
        document.querySelectorAll('input[type="text"], input[type="email"]').forEach(input => {
            const name = input.placeholder || input.name;
            if (formData[name]) {
                input.value = formData[name];
            }
        });
        
        if (formData.paymentMethod) {
            const paymentRadio = document.querySelector(`input[value="${formData.paymentMethod}"]`);
            if (paymentRadio) {
                paymentRadio.checked = true;
                
                if (formData.paymentMethod === 'credit') {
                    const cardFields = document.querySelector('.card-fields');
                    if (cardFields) cardFields.style.display = 'block';
                }
            }
        }
        
        console.log('Form restored from Session Storage');
        return true;
    } catch (error) {
        console.error('Error loading form:', error);
        return false;
    }
};

export const clearFormStorage = () => {
    if (!isStorageSupported()) return false;
    
    try {
        sessionStorage.removeItem(FORM_STORAGE_KEY);
        return true;
    } catch (error) {
        console.error('Error clearing form:', error);
        return false;
    }
};