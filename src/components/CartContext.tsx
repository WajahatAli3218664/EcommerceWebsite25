"use client"; // Ensure this is a client component

import React, { createContext, useState, ReactNode, useContext } from 'react';

type CartItem = {
    id: number;
    title: string;
    price: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    subtotal: number;
    salesTax: number;
    deliveryCharges: number;
    total: number;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const deliveryCharges = 5; // Set delivery charges

    const addToCart = (item: CartItem) => {
        setCart(prev => [...prev, item]); // Add the item directly to the cart
    };

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id)); // Remove item based on id
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const salesTax = subtotal * 0.10; // 10% sales tax
    const total = subtotal + salesTax + deliveryCharges;

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, subtotal, salesTax, deliveryCharges, total }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
