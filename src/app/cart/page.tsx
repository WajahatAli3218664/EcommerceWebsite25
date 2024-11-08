"use client"; // Mark this file as a client component

import React from 'react';
import { useCart } from '@/components/CartContext'; // Adjust the import path as needed
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const CartPage: React.FC = () => {
    const { cart, removeFromCart, subtotal, salesTax, deliveryCharges, total } = useCart();
    const router = useRouter(); // Get the router instance

    const handleCheckout = () => {
        // Redirect to the checkout page
        router.push('/checkout'); // Adjust the path as needed
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4"> {/* Added padding for small screens */}
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 max-w-sm w-full"> {/* Ensured width is full */}
                <h2 className="font-bold text-2xl mb-4 text-purple-800 text-center">Shopping Cart</h2>
                {cart.length === 0 ? (
                    <div className="text-center mt-4">
                        <p className="text-lg text-gray-600">Your cart is empty.</p>
                    </div>
                ) : (
                    <div>
                        <ul className="space-y-2 mb-4">
                            {cart.map(item => (
                                <li key={item.id} className="flex justify-between items-center border-b pb-2">
                                    <div>
                                        <h3 className="font-bold">{item.title}</h3>
                                        <p>Price: ${item.price.toFixed(2)}</p>
                                    </div>
                                    <button 
                                        onClick={() => removeFromCart(item.id)} 
                                        className="text-purple-700 hover:text-orange-700"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-2">
                            <h4 className="text-sm font-semibold">Subtotal: ${subtotal.toFixed(2)}</h4>
                            <h4 className="text-sm font-semibold">Sales Tax (10%): ${salesTax.toFixed(2)}</h4>
                            <h4 className="text-sm font-semibold">Delivery Charges: ${deliveryCharges.toFixed(2)}</h4>
                            <h4 className="text-lg font-semibold">Total: ${total.toFixed(2)}</h4>
                        </div>
                        {/* Checkout Button */}
                        <button 
                            onClick={handleCheckout} 
                            className="mt-4 w-full bg-purple-800 text-white py-2 rounded hover:bg-opacity-80 transition duration-200"
                        >
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
