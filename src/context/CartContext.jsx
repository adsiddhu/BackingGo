import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { useToast } from './ToastContext';
import { STORAGE_KEYS, PRICING } from '../constants';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // Memoize cart calculations for performance
  const cartTotal = useMemo(() =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  const cartCount = useMemo(() =>
    cartItems.reduce((count, item) => count + item.quantity, 0),
    [cartItems]
  );

  const deliveryCharge = useMemo(() =>
    cartTotal >= PRICING.FREE_DELIVERY_THRESHOLD ? 0 : PRICING.DEFAULT_DELIVERY_CHARGE,
    [cartTotal]
  );

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cartItems));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [cartItems]);

  // Use toast for notifications
  const { success, info } = useToast();

  const addToCart = useCallback((product, quantity = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: Math.min(item.quantity + quantity, 99) } : item
        );
      }
      return [...prev, { ...product, quantity: Math.min(quantity, 99) }];
    });
    success(`${product.name} added to cart!`);
  }, [success]);

  const removeFromCart = useCallback((productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
    info('Item removed from cart');
  }, [info]);

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity < 1) return;
    setCartItems(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity: Math.min(quantity, 99) } : item))
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const value = useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    deliveryCharge,
  }), [cartItems, cartTotal, cartCount, deliveryCharge, addToCart, removeFromCart, updateQuantity, clearCart]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
