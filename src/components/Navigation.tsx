
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-ubertrix-background bg-opacity-95 shadow-md py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/45abdda0-f832-4440-bfcd-3ef98bf12dec.png" 
              alt="Ubertrix Logo" 
              className="h-10 w-auto" 
            />
            <span className="text-2xl font-bold">
              <span className="text-ubertrix-primary">Uber</span>
              <span className="text-gray-400">trix</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "nav-link text-ubertrix-primary" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "nav-link text-ubertrix-primary" : "nav-link"
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                isActive ? "nav-link text-ubertrix-primary" : "nav-link"
              }
            >
              Products
            </NavLink>
            <NavLink 
              to="/clients" 
              className={({ isActive }) => 
                isActive ? "nav-link text-ubertrix-primary" : "nav-link"
              }
            >
              Clients
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "nav-link text-ubertrix-primary" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-200 hover:text-ubertrix-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-ubertrix-background bg-opacity-95 shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "nav-link text-ubertrix-primary py-2" : "nav-link py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "nav-link text-ubertrix-primary py-2" : "nav-link py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                isActive ? "nav-link text-ubertrix-primary py-2" : "nav-link py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink 
              to="/clients" 
              className={({ isActive }) => 
                isActive ? "nav-link text-ubertrix-primary py-2" : "nav-link py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "nav-link text-ubertrix-primary py-2" : "nav-link py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
