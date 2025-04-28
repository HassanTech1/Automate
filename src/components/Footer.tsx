
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/45abdda0-f832-4440-bfcd-3ef98bf12dec.png" 
                alt="Ubertrix Logo" 
                className="h-10 w-auto" 
              />
              <span className="text-2xl font-bold">
                <span className="text-ubertrix-primary">Uber</span>
                <span className="text-gray-400">trix</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Pioneering the future of AI solutions with cutting-edge technology and innovative approaches.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-ubertrix-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-ubertrix-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-ubertrix-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-ubertrix-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-ubertrix-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-ubertrix-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-ubertrix-primary transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-400 hover:text-ubertrix-primary transition-colors">Clients</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-ubertrix-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-ubertrix-primary transition-colors">AI Solutions</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-ubertrix-primary transition-colors">Machine Learning</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-ubertrix-primary transition-colors">Data Analytics</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-ubertrix-primary transition-colors">Computer Vision</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-ubertrix-primary transition-colors">Natural Language Processing</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-ubertrix-primary mr-2 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">123 Innovation Street, Tech City, TC 98765</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-ubertrix-primary mr-2" size={18} />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-ubertrix-primary transition-colors">+123 456 7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="text-ubertrix-primary mr-2" size={18} />
                <a href="mailto:info@ubertrix.com" className="text-gray-400 hover:text-ubertrix-primary transition-colors">info@ubertrix.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {year} Ubertrix. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-ubertrix-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-ubertrix-primary transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 text-sm hover:text-ubertrix-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
