import { toast } from "@/components/ui/sonner";
import { createContext, useContext, useState, useEffect } from "react";

type CartItem = {
    id: string;
    title: string;
    image: string;
    ml: number;
    price: number;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    decreaseQuantity: (id: string, ml: number) => void;
    removeFromCart: (id: string, ml: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Load cart
    useEffect(() => {
        const stored = localStorage.getItem("cart");
        if (stored) setCart(JSON.parse(stored));
    }, []);

    // Save cart
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // ➕ ADD / INCREASE
    const addToCart = (item: CartItem) => {
        console.log(item)
        toast.success("Added to cart", {
            description: `${item.title}(${item.ml}ml) is Added to Cart`,
        });
        setCart(prev => {
            const existing = prev.find(
                p => p.id === item.id && p.ml === item.ml
            );

            if (existing) {
                return prev.map(p =>
                    p.id === item.id && p.ml === item.ml
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                );
            }

            return [...prev, item];
        });
    };

    // ➖ DECREASE
    const decreaseQuantity = (id: string, ml: number) => {
        setCart(prev =>
            prev.flatMap(item =>
                item.id === id && item.ml === ml
                    ? item.quantity > 1
                        ? [{ ...item, quantity: item.quantity - 1 }]
                        : [] // remove if quantity = 1
                    : [item]
            )
        );
    };

    // 🗑 REMOVE
    const removeFromCart = (id: string, ml: number) => {
        setCart(prev =>
            prev.filter(item => !(item.id === id && item.ml === ml))
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, decreaseQuantity, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
};
