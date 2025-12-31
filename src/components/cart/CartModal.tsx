import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { phoneno } from "@/data/Products";

interface CartModalProps {
  onClose: () => void;
}

const CartModal = ({ onClose }: CartModalProps) => {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } = useCart();

  const [closing, setClosing] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 300); // match animation duration
  };

  const buildWhatsAppMessage = () => {
    let message = "*New Order from Shivaay Perfumers* \n\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.title}\n`;
      message += `   • Size: ${item.ml} ml\n`;
      message += `   • Quantity: ${item.quantity}\n\n`;
    });

    message += `—Please confirm availability.`;

    return encodeURIComponent(message);
  };

  const handleCheckout = () => {
  const url = `https://wa.me/${phoneno}?text=${buildWhatsAppMessage()}`;

  // clear cart first
  clearCart();

  // close modal smoothly
  handleClose();

  // redirect after animation
  setTimeout(() => {
    window.open(url, "_blank");
  }, 300);
};


  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 flex justify-end
        ${closing ? "animate-fade-out" : "animate-fade-in"}
      `}
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-md bg-background h-full p-6
          ${closing ? "animate-slide-out-right" : "animate-slide-in-right"}
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={handleClose}>
            <X />
          </button>
        </div>

        {/* Items */}
        {cart.length === 0 ? (
          <p className="text-muted-foreground text-center mt-20">
            Your cart is empty
          </p>
        ) : (
          <div className="space-y-6 overflow-y-auto max-h-[65vh]">
            {cart.map((item) => (
              <div key={`${item.id}-${item.ml}`} className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 rounded object-cover"
                />

                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.ml} ml
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => decreaseQuantity(item.id, item.ml)}>
                      <Minus size={16} />
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => addToCart(item)}>
                      <Plus size={16} />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id, item.ml)}
                      className="ml-auto text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {cart.length > 0 && (
          <div className="mt-8 border-t pt-6">
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-semibold">₹{total}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="block w-full text-center py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              Checkout on WhatsApp
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
