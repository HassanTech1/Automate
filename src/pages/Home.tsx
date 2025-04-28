
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, BarChart4 } from 'lucide-react';
import Cube3D from '../components/Cube3D';
import { initScrollAnimations } from '../utils/scrollAnimations';

const Home = () => {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative hero-gradient pt-20 pb-10">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="text-white">The Future of </span>
              <span className="text-ubertrix-primary">AI Solutions</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-md lg:max-w-xl">
              Pioneering artificial intelligence technologies that transform businesses and drive innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/products" className="btn-primary flex items-center justify-center">
                Explore Products <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/contact" className="btn-outline flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Cube3D size={280} className="mt-10 lg:mt-0" />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-gray-400 mb-2">Scroll to explore</p>
          <div className="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-ubertrix-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our AI Solutions</h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Leverage our cutting-edge AI technologies to transform your business operations and gain a competitive edge.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg card-hover animate-on-scroll">
              <div className="bg-gradient-to-br from-ubertrix-primary to-ubertrix-secondary w-14 h-14 rounded-full flex items-center justify-center mb-5">
                <BarChart4 size={28} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Advanced Analytics</h3>
              <p className="text-gray-400">
                Harness the power of data with our advanced analytics platform to drive informed business decisions.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg card-hover animate-on-scroll delay-100">
              <div className="bg-gradient-to-br from-ubertrix-primary to-ubertrix-secondary w-14 h-14 rounded-full flex items-center justify-center mb-5">
                <Zap size={28} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Machine Learning</h3>
              <p className="text-gray-400">
                Our machine learning algorithms adapt and evolve with your data to provide increasingly accurate insights.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg card-hover animate-on-scroll delay-200">
              <div className="bg-gradient-to-br from-ubertrix-primary to-ubertrix-secondary w-14 h-14 rounded-full flex items-center justify-center mb-5">
                <Shield size={28} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Secure Infrastructure</h3>
              <p className="text-gray-400">
                Enterprise-grade security ensures your data and AI models remain protected at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
                Why Choose <span className="text-ubertrix-primary">Ubertrix</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex animate-on-scroll">
                  <CheckCircle className="text-ubertrix-primary mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
                    <p className="text-gray-400">
                      Our team comprises industry veterans with deep expertise in artificial intelligence and machine learning.
                    </p>
                  </div>
                </div>
                
                <div className="flex animate-on-scroll delay-100">
                  <CheckCircle className="text-ubertrix-primary mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
                    <p className="text-gray-400">
                      We don't believe in one-size-fits-all. Our solutions are customized to address your specific business challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex animate-on-scroll delay-200">
                  <CheckCircle className="text-ubertrix-primary mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
                    <p className="text-gray-400">
                      We're constantly pushing the boundaries of what's possible with AI, ensuring you always stay ahead of the curve.
                    </p>
                  </div>
                </div>
                
                <div className="flex animate-on-scroll delay-300">
                  <CheckCircle className="text-ubertrix-primary mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                    <p className="text-gray-400">
                      Our customer success team is available 24/7 to ensure your AI implementation runs smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative animate-on-scroll">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-ubertrix-primary bg-opacity-10 rounded-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-ubertrix-secondary bg-opacity-10 rounded-lg"></div>
                <div className="bg-ubertrix-muted bg-opacity-30 p-8 rounded-lg relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Ready to transform your business?</h3>
                  <p className="text-gray-400 mb-6">
                    Join hundreds of companies already leveraging our AI solutions to drive growth and innovation.
                  </p>
                  <Link to="/contact" className="btn-primary inline-flex items-center">
                    Get Started <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-on-scroll">
              <div className="text-4xl font-bold text-ubertrix-primary mb-2">98%</div>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
            <div className="text-center animate-on-scroll delay-100">
              <div className="text-4xl font-bold text-ubertrix-primary mb-2">250+</div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center animate-on-scroll delay-200">
              <div className="text-4xl font-bold text-ubertrix-primary mb-2">50+</div>
              <p className="text-gray-400">AI Experts</p>
            </div>
            <div className="text-center animate-on-scroll delay-300">
              <div className="text-4xl font-bold text-ubertrix-primary mb-2">10+</div>
              <p className="text-gray-400">Years of Innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ubertrix-muted to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Ready to Experience the Power of <span className="text-ubertrix-primary">AI</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto animate-on-scroll delay-100">
            Join hundreds of forward-thinking companies already leveraging our AI solutions to transform their operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-on-scroll delay-200">
            <Link to="/products" className="btn-primary flex items-center justify-center">
              Explore Solutions <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/contact" className="btn-outline flex items-center justify-center">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
