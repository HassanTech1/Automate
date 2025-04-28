
import React, { useEffect } from 'react';
import { ArrowRight, Award, Users, Target, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { initScrollAnimations } from '../utils/scrollAnimations';

const About = () => {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-ubertrix-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
            About <span className="text-ubertrix-primary">Ubertrix</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-on-scroll delay-100">
            We are a team of AI experts, data scientists, and technologists dedicated to pushing the boundaries of artificial intelligence.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-12">
              <div className="relative animate-on-scroll">
                <div className="absolute inset-0 bg-gradient-to-tr from-ubertrix-primary to-ubertrix-secondary opacity-20 rounded-lg transform rotate-3"></div>
                <div className="relative bg-ubertrix-muted bg-opacity-30 p-6 rounded-lg">
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-gray-300 mb-4">
                    Founded in 2015, Ubertrix began with a simple mission: to make artificial intelligence accessible and beneficial for businesses of all sizes.
                  </p>
                  <p className="text-gray-300 mb-4">
                    What started as a small team of four AI enthusiasts has grown into a global company with offices in five countries and over 50 AI specialists working on cutting-edge solutions.
                  </p>
                  <p className="text-gray-300">
                    Throughout our journey, we've remained committed to our core values of innovation, integrity, and impact. We believe that AI should be used to enhance human potential, not replace it.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold mb-6 animate-on-scroll">Our Mission & Vision</h3>
              
              <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg mb-6 animate-on-scroll">
                <h4 className="text-xl font-semibold mb-3">Mission</h4>
                <p className="text-gray-300">
                  To democratize artificial intelligence by creating accessible, powerful, and ethical AI solutions that drive business value and societal progress.
                </p>
              </div>
              
              <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg animate-on-scroll delay-100">
                <h4 className="text-xl font-semibold mb-3">Vision</h4>
                <p className="text-gray-300">
                  A world where AI enhances human potential, empowers organizations to solve complex challenges, and contributes positively to society's advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Our Core Values</h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto animate-on-scroll delay-100">
            The principles that guide our work, shape our culture, and define our approach to AI development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg animate-on-scroll">
              <div className="bg-gradient-to-br from-ubertrix-primary to-ubertrix-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                <Award size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-400">
                We strive for excellence in everything we do, from code quality to customer service.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg animate-on-scroll delay-100">
              <div className="bg-gradient-to-br from-ubertrix-primary to-ubertrix-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                <Users size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-400">
                We believe the best solutions come from diverse teams working together with shared purpose.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg animate-on-scroll delay-200">
              <div className="bg-gradient-to-br from-ubertrix-primary to-ubertrix-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                <Target size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-400">
                We continuously push the boundaries of what's possible with AI technology.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg animate-on-scroll delay-300">
              <div className="bg-gradient-to-br from-ubertrix-primary to-ubertrix-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                <Clock size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-400">
                We operate with transparency and ethical responsibility in all our AI initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">Our Leadership Team</h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto animate-on-scroll delay-100">
            Meet the experts leading Ubertrix's innovation in artificial intelligence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg text-center animate-on-scroll">
              <div className="w-32 h-32 bg-gradient-to-br from-ubertrix-primary to-ubertrix-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-black font-bold text-xl">JD</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Dr. Jane Doe</h3>
              <p className="text-ubertrix-primary mb-3">Chief Executive Officer</p>
              <p className="text-gray-400 text-sm">
                Former AI researcher at MIT with over 15 years of experience in machine learning and artificial intelligence.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg text-center animate-on-scroll delay-100">
              <div className="w-32 h-32 bg-gradient-to-br from-ubertrix-primary to-ubertrix-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-black font-bold text-xl">JS</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">John Smith</h3>
              <p className="text-ubertrix-primary mb-3">Chief Technology Officer</p>
              <p className="text-gray-400 text-sm">
                Pioneered several breakthrough algorithms in natural language processing and computer vision.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg text-center animate-on-scroll delay-200">
              <div className="w-32 h-32 bg-gradient-to-br from-ubertrix-primary to-ubertrix-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-black font-bold text-xl">AK</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Alex Kim</h3>
              <p className="text-ubertrix-primary mb-3">Chief Data Scientist</p>
              <p className="text-gray-400 text-sm">
                Previously led data science teams at major tech companies, specializing in predictive analytics.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg text-center animate-on-scroll delay-300">
              <div className="w-32 h-32 bg-gradient-to-br from-ubertrix-primary to-ubertrix-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-black font-bold text-xl">SP</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Sarah Peterson</h3>
              <p className="text-ubertrix-primary mb-3">Chief Product Officer</p>
              <p className="text-gray-400 text-sm">
                Expert in translating complex technical capabilities into user-friendly AI products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ubertrix-muted to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Join Us on Our <span className="text-ubertrix-primary">Mission</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto animate-on-scroll delay-100">
            Ready to be part of the AI revolution? Explore our products or join our team of innovators.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-on-scroll delay-200">
            <Link to="/products" className="btn-primary flex items-center justify-center">
              Explore Our Solutions <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/contact" className="btn-outline flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
