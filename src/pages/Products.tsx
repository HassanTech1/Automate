
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart4, Zap, Shield } from 'lucide-react';
import { initScrollAnimations } from '../utils/scrollAnimations';

const Products = () => {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 'advanced-analytics',
      title: 'Advanced Analytics Platform',
      icon: <BarChart4 size={36} className="text-ubertrix-primary" />,
      description: 'Harness the power of data with our advanced analytics platform to drive informed business decisions.',
      features: [
        'Real-time data processing',
        'Interactive dashboards',
        'Predictive analytics',
        'Custom reporting',
      ]
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning Engine',
      icon: <Zap size={36} className="text-ubertrix-primary" />,
      description: 'Our machine learning algorithms adapt and evolve with your data to provide increasingly accurate insights.',
      features: [
        'Automated model training',
        'Pattern recognition',
        'Anomaly detection',
        'Natural language processing',
      ]
    },
    {
      id: 'secure-infrastructure',
      title: 'Secure AI Infrastructure',
      icon: <Shield size={36} className="text-ubertrix-primary" />,
      description: 'Enterprise-grade security ensures your data and AI models remain protected at all times.',
      features: [
        'End-to-end encryption',
        'Access control',
        'Compliance management',
        'Continuous monitoring',
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-on-scroll">Our AI Solutions</h1>
          <p className="text-gray-400 max-w-xl mx-auto animate-on-scroll delay-100">
            Explore our cutting-edge AI products designed to transform your business operations and drive innovation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="bg-ubertrix-muted bg-opacity-20 rounded-lg p-8 flex flex-col h-full card-hover animate-on-scroll delay-100"
            >
              <div className="bg-ubertrix-primary bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {product.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
              <p className="text-gray-400 mb-6">{product.description}</p>
              
              <ul className="mb-8 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-ubertrix-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Link 
                  to={`/products/${product.id}`}
                  className="btn-primary inline-flex items-center"
                >
                  View Details <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-ubertrix-muted to-black rounded-lg p-10 animate-on-scroll">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to transform your business?</h2>
              <p className="text-gray-400">
                Schedule a demo to see our AI solutions in action.
              </p>
            </div>
            <Link to="/contact" className="btn-primary whitespace-nowrap">
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
