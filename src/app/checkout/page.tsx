"use client"; // Mark this file as a client component

import React from 'react';
import { useCart } from '@/components/CartContext';
import { useRouter } from 'next/navigation';

const Checkout: React.FC = () => {
    const { cart } = useCart();
    const router = useRouter();

    const salesTaxRate = 0.1;
    const deliveryCharges = 5.0;

    const subtotal = cart.reduce((total, item) => total + item.price, 0);
    const salesTax = subtotal * salesTaxRate;
    const total = subtotal + salesTax + deliveryCharges;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Checkout submitted");
        router.push('/success');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 max-w-sm w-full">
                <h2 className="font-bold text-2xl mb-4 text-center text-emerald-700">Checkout</h2>
                {cart.length === 0 ? (
                    <div className="text-center mt-4">
                        <p className="text-lg text-grey-600">Your cart is empty.</p>
                    </div>
                ) : (
                    <div>
                        <h3 className="font-bold text-lg mb-2 text-emerald-600">Order Summary</h3>
                        <ul className="space-y-2 mb-4">
                            {cart.map((item, index) => (
                                <li key={index} className="flex justify-between items-center border-b pb-1">
                                    <span>{item.title}</span>
                                    <span>${item.price.toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-2">
                            <h4 className="text-sm font-semibold">Subtotal: ${subtotal.toFixed(2)}</h4>
                            <h4 className="text-sm font-semibold">Sales Tax (10%): ${salesTax.toFixed(2)}</h4>
                            <h4 className="text-sm font-semibold">Delivery Charges: ${deliveryCharges.toFixed(2)}</h4>
                            <h4 className="text-lg font-semibold text-emerald-700">Total: ${total.toFixed(2)}</h4>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm">Full Name:</label>
                                <input type="text" required className="border rounded w-full py-1 px-2" />
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm">Address:</label>
                                <input type="text" required className="border rounded w-full py-1 px-2" />
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm">Email:</label>
                                <input type="email" required className="border rounded w-full py-1 px-2" />
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm">Payment Method:</label>
                                <select required className="border rounded w-full py-1 px-2">
                                    <option value="">Select a payment method</option>
                                    <option value="credit_card">Credit Card</option>
                                    <option value="paypal">PayPal</option>
                                    <option value="bank_transfer">Bank Transfer</option>
                                </select>
                            </div>
                            {cart.length > 0 && (
                                <button 
                                    type="submit" 
                                    className="bg-emerald-600 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 w-full font-semibold"
                                >
                                    Confirm Order
                                </button>
                            )}
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;
