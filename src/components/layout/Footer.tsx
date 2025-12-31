import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-12">
        {/* Brand */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-display font-semibold tracking-[0.15em] text-gradient-gold mb-2">
            SHIVAAY PERFUMERS
          </h3>
          <p className="font-body text-muted-foreground text-sm tracking-wide">
            Divine Fragrances. Timeless Elegance.
          </p>
        </div>

        {/* Divider */}
        <div className="divider-gold mb-8" />

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Twitter size={20} />
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center gap-8 mb-8">
          {["Home", "Shop", "Why Us", "Contact"].map((link) => (
            <Link
              key={link}
              to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
              className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center font-body text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Shivaay Perfumers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
