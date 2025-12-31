import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import Logo from "@/assets/Logo.png";
import { useCart } from "@/context/CartContext";
import CartModal from "@/components/cart/CartModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { cart } = useCart();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Why Us", path: "/why-us" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 relative">
          {/* Logo */}
          <div className="flex justify-center mb-2">
            <img src={Logo} alt="Adiyogi" className="h-24 w-24 opacity-80" />
          </div>

          {/* Brand */}
          <div className="text-center mb-4">
            <Link to="/">
              <h1 className="text-2xl md:text-3xl font-display font-semibold tracking-[0.15em] text-gradient-gold">
                SHIVAAY PERFUMERS
              </h1>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-[0.2em] uppercase pb-1
                  ${isActive(link.path) ? "text-primary" : "text-foreground/70 hover:text-primary"}
                `}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="absolute right-16 top-6 flex items-center gap-1"
          >
            <ShoppingBag />
            {cart.length > 0 && (
              <span className="text-xs bg-primary text-white rounded-full px-2">
                {cart.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden absolute right-6 top-6"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden bg-background py-6">
            <div className="flex flex-col items-center gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Cart Modal */}
      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </>
  );
};

export default Header;
