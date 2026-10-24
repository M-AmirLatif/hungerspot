"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { BUSINESS_INFO } from "@/data/menuData";

export interface CartItem {
  id: string; // unique cart entry id
  menuItemId: string;
  name: string;
  sizeLabel?: string;
  sizeName?: string;
  price: number;
  quantity: number;
  image: string;
  isDeal?: boolean;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  deliveryFee: number;
  freeDeliveryThreshold: number;
  isFreeDelivery: boolean;
  amountNeededForFreeDelivery: number;
  totalPayable: number;
  orderType: "delivery" | "takeaway" | "dine-in";
  setOrderType: (type: "delivery" | "takeaway" | "dine-in") => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  customerAddress: string;
  setCustomerAddress: (address: string) => void;
  customerPhone: string;
  setCustomerPhone: (phone: string) => void;
  orderNotes: string;
  setOrderNotes: (notes: string) => void;
  getWhatsAppOrderUrl: () => string;
  triggerCheckout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [orderType, setOrderType] = useState<"delivery" | "takeaway" | "dine-in">("delivery");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderNotes, setOrderNotes] = useState("");

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("hungerspot_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    try {
      localStorage.setItem("hungerspot_cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addItem = (item: Omit<CartItem, "quantity">, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });

    try {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.85, x: 0.88 },
        colors: ["#f59e0b", "#ea580c", "#10b981"],
      });
    } catch {
      // ignore
    }
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => {
          if (i.id === id) {
            const nextQty = i.quantity + delta;
            return nextQty > 0 ? { ...i, quantity: nextQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const freeDeliveryThreshold = BUSINESS_INFO.minFreeDelivery;
  const isFreeDelivery = subtotal >= freeDeliveryThreshold || orderType !== "delivery";
  const deliveryFee = orderType === "delivery" && subtotal > 0 && subtotal < freeDeliveryThreshold ? 100 : 0;
  const amountNeededForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  const totalPayable = subtotal + deliveryFee;

  const getWhatsAppOrderUrl = () => {
    let text = `🍔 *NEW ORDER — HUNGER SPOT (KASUR BYPASS)* 🍕\n`;
    text += `_"${BUSINESS_INFO.tagline} • ${BUSINESS_INFO.heroTagline}"_\n`;
    text += `----------------------------------------\n`;
    text += `📍 *Order Type*: ${orderType.toUpperCase()}\n`;
    if (customerName.trim()) text += `👤 *Customer*: ${customerName.trim()}\n`;
    if (customerPhone.trim()) text += `📞 *Phone*: ${customerPhone.trim()}\n`;
    if (orderType === "delivery" && customerAddress.trim()) {
      text += `🏠 *Delivery Address*: ${customerAddress.trim()}\n`;
    }
    if (orderNotes.trim()) {
      text += `📝 *Special Instructions*: ${orderNotes.trim()}\n`;
    }
    text += `\n🛒 *ITEMS ORDERED*:\n`;

    items.forEach((item, index) => {
      const sizeStr = item.sizeName ? ` (${item.sizeName})` : "";
      text += `${index + 1}. *${item.name}*${sizeStr}\n`;
      text += `   Qty: ${item.quantity} × Rs ${item.price} = *Rs ${item.price * item.quantity}*\n`;
    });

    text += `----------------------------------------\n`;
    text += `💰 *Subtotal*: Rs ${subtotal.toLocaleString()}\n`;
    if (orderType === "delivery") {
      text += `🚚 *Delivery*: ${isFreeDelivery ? "FREE (Applied)" : `Rs ${deliveryFee}`}\n`;
    }
    text += `🔥 *TOTAL PAYABLE*: *Rs ${totalPayable.toLocaleString()}*\n`;
    text += `----------------------------------------\n`;
    text += `📍 *Hunger Spot*: Satluj Filling Station (Shell) Kasur Bypass\n`;
    text += `📞 *Helpline*: 0303 8023907\n`;

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const triggerCheckout = () => {
    const url = getWhatsAppOrderUrl();
    window.open(url, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        deliveryFee,
        freeDeliveryThreshold,
        isFreeDelivery,
        amountNeededForFreeDelivery,
        totalPayable,
        orderType,
        setOrderType,
        customerName,
        setCustomerName,
        customerAddress,
        setCustomerAddress,
        customerPhone,
        setCustomerPhone,
        orderNotes,
        setOrderNotes,
        getWhatsAppOrderUrl,
        triggerCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
