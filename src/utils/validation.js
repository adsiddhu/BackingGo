import { VALIDATION } from '../constants';

export const validateEmail = (email) => {
    if (!email) return 'Email is required';
    if (!VALIDATION.EMAIL_REGEX.test(email)) return 'Please enter a valid email address';
    return null;
};

export const validatePhone = (phone) => {
    if (!phone) return 'Phone number is required';
    const cleanedPhone = phone.replace(/\D/g, '');
    if (!VALIDATION.PHONE_REGEX.test(cleanedPhone)) return 'Please enter a valid 10-digit phone number';
    return null;
};

export const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (password.length < VALIDATION.MIN_PASSWORD_LENGTH) return `Password must be at least ${VALIDATION.MIN_PASSWORD_LENGTH} characters`;
    return null;
};

export const validateName = (name) => {
    if (!name) return 'Name is required';
    if (name.length > VALIDATION.MAX_NAME_LENGTH) return `Name must be less than ${VALIDATION.MAX_NAME_LENGTH} characters`;
    return null;
};

export const validateAddress = (address) => {
    if (!address) return 'Address is required';
    if (address.length > VALIDATION.MAX_ADDRESS_LENGTH) return `Address must be less than ${VALIDATION.MAX_ADDRESS_LENGTH} characters`;
    return null;
};

export const validateCity = (city) => {
    if (!city) return 'City is required';
    return null;
};

export const validateZip = (zip) => {
    if (!zip) return 'ZIP code is required';
    if (!VALIDATION.ZIP_REGEX.test(zip)) return 'Please enter a valid 6-digit ZIP code';
    return null;
};

export const validateQuantity = (quantity) => {
    const num = parseInt(quantity, 10);
    if (!num || num < 1) return 'Quantity must be at least 1';
    if (num > 99) return 'Maximum quantity is 99';
    return null;
};

export const validateCheckoutForm = (formData) => {
    const errors = {};

    const nameError = validateName(formData.name);
    if (nameError) errors.name = nameError;

    const emailError = validateEmail(formData.email);
    if (emailError) errors.email = emailError;

    const phoneError = validatePhone(formData.phone);
    if (phoneError) errors.phone = phoneError;

    const addressError = validateAddress(formData.address);
    if (addressError) errors.address = addressError;

    const cityError = validateCity(formData.city);
    if (cityError) errors.city = cityError;

    const zipError = validateZip(formData.zip);
    if (zipError) errors.zip = zipError;

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

export const sanitizeInput = (input) => {
    if (typeof input !== 'string') return '';
    return input.trim().replace(/[<>]/g, '');
};
