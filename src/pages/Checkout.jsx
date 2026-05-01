import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { CheckCircle } from 'lucide-react';
import { validateCheckoutForm } from '../utils/validation';
import { formatPrice } from '../utils/formatters';
import { ButtonLoading } from '../components/Loading';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});

  // Calculate cart total dynamically from finalPrice if available
  const cartTotal = cartItems.reduce((total, item) => total + ((item.finalPrice || item.price) * item.quantity), 0);
  const deliveryCharge = 0; // We incorporated delivery surcharges in the finalPrice, but let's keep it simple here.
  const grandTotal = cartTotal + deliveryCharge;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateCheckoutForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      error('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      clearCart();
      success('Order placed successfully!');
    } catch {
      error('Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (name, label, type = 'text', required = true) => (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary outline-none transition-colors ${errors[name]
          ? 'border-red-300 bg-red-50 focus:ring-red-200'
          : 'border-gray-300'
          }`}
        aria-invalid={errors[name] ? 'true' : 'false'}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
      />
      {errors[name] && (
        <p id={`${name}-error`} className="text-sm text-red-600" role="alert">
          {errors[name]}
        </p>
      )}
    </div>
  );

  if (cartItems.length === 0 && !isSuccess) {
    navigate('/cart');
    return null;
  }

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-bg-subtle px-4">
        <div className="bg-white p-12 rounded-2xl shadow-sm text-center max-w-md w-full">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
          <p className="text-gray-600 mb-8">Thank you for your purchase. Your order will be delivered soon.</p>
          <button onClick={() => navigate('/')} className="btn-primary w-full">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg-subtle min-h-screen py-8 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">Shipping Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderField('name', 'Full Name')}
                {renderField('email', 'Email Address', 'email')}
                {renderField('phone', 'Phone Number', 'tel')}
                {renderField('address', 'Delivery Address')}
                {renderField('city', 'City')}
                {renderField('zip', 'ZIP Code', 'text')}
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3.5 text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all"
                >
                  {isSubmitting ? (
                    <ButtonLoading />
                  ) : (
                    <>Place Order • {formatPrice(grandTotal)}</>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-[400px] shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h2>

              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map(item => (
                  <div key={item.cartItemId || item.id} className="flex gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover border border-gray-100" />
                    <div className="flex-1 text-sm">
                      <p className="font-medium text-gray-900 line-clamp-2 leading-snug mb-1">{item.name}</p>
                      <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-gray-900">{formatPrice((item.finalPrice || item.price) * item.quantity)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">{formatPrice(cartTotal)}</span>
                </div>
                {deliveryCharge > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span className="font-medium text-gray-900">{formatPrice(deliveryCharge)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
                  <span className="font-bold text-lg text-gray-900">Total</span>
                  <span className="font-bold text-2xl text-primary">{formatPrice(grandTotal)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
