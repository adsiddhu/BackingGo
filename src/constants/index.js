// App-wide constants for maintainability

export const APP_NAME = 'Bakingo Clone';

// API & Configuration
export const API_CONFIG = {
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};

// Pricing & Delivery
export const PRICING = {
  FREE_DELIVERY_THRESHOLD: 499,
  DEFAULT_DELIVERY_CHARGE: 50,
  CURRENCY: '₹',
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 8,
  PRODUCTS_PER_PAGE: 12,
};

// Animation Durations (ms)
export const ANIMATION = {
  TOAST_DURATION: 3000,
  TOAST_LONG_DURATION: 5000,
  TRANSITION_FAST: 150,
  TRANSITION_NORMAL: 300,
  TRANSITION_SLOW: 500,
};

// Form Validation
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[6-9]\d{9}$/,
  ZIP_REGEX: /^\d{6}$/,
  MIN_PASSWORD_LENGTH: 6,
  MAX_NAME_LENGTH: 100,
  MAX_ADDRESS_LENGTH: 500,
};

// Routes
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/product/:id',
  CART: '/cart',
  CHECKOUT: '/checkout',
  LOGIN: '/login',
  ABOUT: '/about',
};

// Product Categories
export const PRODUCT_CATEGORIES = {
  ALL: 'All',
  BIRTHDAY: 'Birthday',
  ANNIVERSARY: 'Anniversary',
  DESIGNER_CAKES: 'Designer Cakes',
  PHOTO_CAKES: 'Photo Cakes',
};

// Sort Options
export const SORT_OPTIONS = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

// Cake Flavors
export const CAKE_FLAVORS = [
  'Chocolate',
  'Vanilla',
  'Butterscotch',
  'Pineapple',
  'Red Velvet',
  'Strawberry',
  'Coffee',
  'Mango',
];

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Please check your internet connection and try again.',
  SERVER_ERROR: 'Something went wrong on our end. Please try again later.',
  VALIDATION_ERROR: 'Please check the form and correct any errors.',
  NOT_FOUND: 'The requested resource was not found.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  ADDED_TO_CART: 'Added to cart successfully!',
  ORDER_PLACED: 'Order placed successfully!',
  DATA_SAVED: 'Changes saved successfully!',
};

// LocalStorage Keys
export const STORAGE_KEYS = {
  CART: 'bakingo_cart',
  USER: 'bakingo_user',
  RECENT_SEARCHES: 'bakingo_recent_searches',
  FAVORITES: 'bakingo_favorites',
};
