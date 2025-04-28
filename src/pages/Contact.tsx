
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import { initScrollAnimations } from '../utils/scrollAnimations';
import { toast } from '@/components/ui/use-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SubscriptionData {
  email: string;
  name: string;
  company: string;
  plan: 'basic' | 'advanced' | 'custom';
}

const Contact = () => {
  // Contact form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Subscription form state
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData>({
    email: '',
    name: '',
    company: '',
    plan: 'basic'
  });
  const [subscriptionErrors, setSubscriptionErrors] = useState<{ [key: string]: string }>({});
  const [subscriptionSubmitted, setSubscriptionSubmitted] = useState(false);

  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Handle contact form input changes
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  // Handle subscription form input changes
  const handleSubscriptionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSubscriptionData({
      ...subscriptionData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (subscriptionErrors[name]) {
      setSubscriptionErrors({
        ...subscriptionErrors,
        [name]: ''
      });
    }
  };

  // Validate contact form
  const validateContactForm = () => {
    const errors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Validate subscription form
  const validateSubscriptionForm = () => {
    const errors: { [key: string]: string } = {};
    
    if (!subscriptionData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!subscriptionData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subscriptionData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!subscriptionData.company.trim()) {
      errors.company = 'Company name is required';
    }
    
    setSubscriptionErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateContactForm()) {
      // Simulate form submission
      console.log('Contact form submitted:', formData);
      setFormSubmitted(true);
      
      // Show success toast
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 5000);
    }
  };

  // Handle subscription form submission
  const handleSubscriptionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateSubscriptionForm()) {
      // Simulate form submission and save to localStorage
      console.log('Subscription form submitted:', subscriptionData);
      
      try {
        localStorage.setItem('ubertrix_subscription', JSON.stringify(subscriptionData));
        setSubscriptionSubmitted(true);
        
        // Show success toast
        toast({
          title: "Subscription Successful!",
          description: `Thank you for subscribing to our ${subscriptionData.plan} plan.`,
          duration: 5000,
        });
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubscriptionSubmitted(false);
          setSubscriptionData({
            email: '',
            name: '',
            company: '',
            plan: 'basic'
          });
        }, 5000);
        
      } catch (error) {
        console.error('Error saving to localStorage:', error);
        toast({
          title: "Error",
          description: "There was an error processing your subscription. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    }
  };

  return (
    <>
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-ubertrix-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
            Contact <span className="text-ubertrix-primary">Us</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-on-scroll delay-100">
            Get in touch with our team to learn more about our AI solutions or to discuss your specific needs.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-ubertrix-muted bg-opacity-20 p-8 rounded-lg text-center card-hover animate-on-scroll">
              <div className="bg-ubertrix-primary bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-ubertrix-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400 mb-4">Our team is here to help you</p>
              <a href="mailto:info@ubertrix.com" className="text-ubertrix-primary hover:text-ubertrix-secondary transition-colors">info@ubertrix.com</a>
            </div>
            
            {/* Phone */}
            <div className="bg-ubertrix-muted bg-opacity-20 p-8 rounded-lg text-center card-hover animate-on-scroll delay-100">
              <div className="bg-ubertrix-primary bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-ubertrix-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400 mb-4">Mon-Fri from 9am to 6pm</p>
              <a href="tel:+1234567890" className="text-ubertrix-primary hover:text-ubertrix-secondary transition-colors">+123 456 7890</a>
            </div>
            
            {/* Visit */}
            <div className="bg-ubertrix-muted bg-opacity-20 p-8 rounded-lg text-center card-hover animate-on-scroll delay-200">
              <div className="bg-ubertrix-primary bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-ubertrix-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-400 mb-4">Come say hello at our office</p>
              <address className="text-ubertrix-primary not-italic">
                123 Innovation Street<br />
                Tech City, TC 98765
              </address>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-900 bg-opacity-20 border border-green-700 rounded-lg p-6 flex items-center">
                  <Check className="text-green-500 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-green-400">Thank You!</h3>
                    <p className="text-gray-300">Your message has been sent successfully. We'll get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleContactChange}
                      className={`bg-ubertrix-muted bg-opacity-30 border ${formErrors.name ? 'border-red-500' : 'border-gray-600'} text-white text-sm rounded-lg block w-full p-2.5 focus:border-ubertrix-primary focus:outline-none focus:ring-1 focus:ring-ubertrix-primary`}
                      placeholder="John Doe"
                    />
                    {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleContactChange}
                      className={`bg-ubertrix-muted bg-opacity-30 border ${formErrors.email ? 'border-red-500' : 'border-gray-600'} text-white text-sm rounded-lg block w-full p-2.5 focus:border-ubertrix-primary focus:outline-none focus:ring-1 focus:ring-ubertrix-primary`}
                      placeholder="john.doe@example.com"
                    />
                    {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleContactChange}
                      rows={5}
                      className={`bg-ubertrix-muted bg-opacity-30 border ${formErrors.message ? 'border-red-500' : 'border-gray-600'} text-white text-sm rounded-lg block w-full p-2.5 focus:border-ubertrix-primary focus:outline-none focus:ring-1 focus:ring-ubertrix-primary`}
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                    {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
            
            {/* Subscription Form */}
            <div className="animate-on-scroll delay-200">
              <h2 className="text-3xl font-bold mb-6">Subscribe to Our Services</h2>
              
              {subscriptionSubmitted ? (
                <div className="bg-green-900 bg-opacity-20 border border-green-700 rounded-lg p-6 flex items-center">
                  <Check className="text-green-500 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-green-400">Subscription Successful!</h3>
                    <p className="text-gray-300">Thank you for subscribing to our services. We'll be in touch soon with next steps.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscriptionSubmit} className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg">
                  <div className="mb-6">
                    <label htmlFor="sub-name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                    <input 
                      type="text" 
                      id="sub-name" 
                      name="name"
                      value={subscriptionData.name}
                      onChange={handleSubscriptionChange}
                      className={`bg-ubertrix-muted bg-opacity-30 border ${subscriptionErrors.name ? 'border-red-500' : 'border-gray-600'} text-white text-sm rounded-lg block w-full p-2.5 focus:border-ubertrix-primary focus:outline-none focus:ring-1 focus:ring-ubertrix-primary`}
                      placeholder="John Doe"
                    />
                    {subscriptionErrors.name && <p className="mt-1 text-sm text-red-500">{subscriptionErrors.name}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="sub-email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                    <input 
                      type="email" 
                      id="sub-email" 
                      name="email"
                      value={subscriptionData.email}
                      onChange={handleSubscriptionChange}
                      className={`bg-ubertrix-muted bg-opacity-30 border ${subscriptionErrors.email ? 'border-red-500' : 'border-gray-600'} text-white text-sm rounded-lg block w-full p-2.5 focus:border-ubertrix-primary focus:outline-none focus:ring-1 focus:ring-ubertrix-primary`}
                      placeholder="john.doe@example.com"
                    />
                    {subscriptionErrors.email && <p className="mt-1 text-sm text-red-500">{subscriptionErrors.email}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-300">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company"
                      value={subscriptionData.company}
                      onChange={handleSubscriptionChange}
                      className={`bg-ubertrix-muted bg-opacity-30 border ${subscriptionErrors.company ? 'border-red-500' : 'border-gray-600'} text-white text-sm rounded-lg block w-full p-2.5 focus:border-ubertrix-primary focus:outline-none focus:ring-1 focus:ring-ubertrix-primary`}
                      placeholder="Acme Inc."
                    />
                    {subscriptionErrors.company && <p className="mt-1 text-sm text-red-500">{subscriptionErrors.company}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="plan" className="block mb-2 text-sm font-medium text-gray-300">Select Plan</label>
                    <select 
                      id="plan" 
                      name="plan"
                      value={subscriptionData.plan}
                      onChange={handleSubscriptionChange}
                      className="bg-ubertrix-muted bg-opacity-30 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5 focus:border-ubertrix-primary focus:outline-none focus:ring-1 focus:ring-ubertrix-primary"
                    >
                      <option value="basic">Basic Plan - $499/month</option>
                      <option value="advanced">Advanced Plan - $1,999/month</option>
                      <option value="custom">Custom Enterprise Solution</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary w-full"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="bg-ubertrix-muted bg-opacity-20 rounded-lg p-4 h-96 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Interactive Map Coming Soon</h3>
              <p className="text-gray-400">Our office is located in the heart of Tech City</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
