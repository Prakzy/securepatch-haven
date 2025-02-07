
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-primary">Afforal Cyber Patch</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/pricing" className="text-primary hover:text-accent transition-colors">
              Pricing
            </Link>
            <Link to="/features" className="text-primary hover:text-accent transition-colors">
              Features
            </Link>
            <Link to="/contact" className="text-primary hover:text-accent transition-colors">
              Contact
            </Link>
            <Link to="/login">
              <Button variant="outline" className="mr-2">
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link
              to="/pricing"
              className="block px-3 py-2 text-primary hover:text-accent transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/features"
              className="block px-3 py-2 text-primary hover:text-accent transition-colors"
            >
              Features
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-primary hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-primary hover:text-accent transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 text-primary hover:text-accent transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
