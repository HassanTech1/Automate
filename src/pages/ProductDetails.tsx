
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Shield, Zap, BarChart4 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { initScrollAnimations } from '../utils/scrollAnimations';

type ProductPlan = {
  name: string;
  price: string;
  billingPeriod: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const ProductDetails = () => {
  const { productId } = useParams();
  
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Products data
  const products = {
    'advanced-analytics': {
      id: 'advanced-analytics',
      name: 'Advanced Analytics Platform',
      description: 'Our flagship analytics solution provides comprehensive insights into your business data, helping you make informed decisions and drive growth.',
      longDescription: 'The Advanced Analytics Platform is designed to transform raw data into actionable insights. By leveraging machine learning algorithms and predictive modeling, our platform identifies patterns, trends, and anomalies that would otherwise remain hidden. This enables businesses to optimize operations, reduce costs, and capitalize on emerging opportunities before competitors.',
      icon: <BarChart4 size={36} className="text-ubertrix-primary" />,
      performance: {
        dataProcessing: '500M records/second',
        accuracy: '99.8%',
        latency: '<10ms',
        scalability: 'Unlimited',
      },
      plans: [
        {
          name: 'Basic',
          price: '$499',
          billingPeriod: 'per month',
          description: 'Perfect for small to medium businesses just getting started with AI analytics.',
          features: [
            'Up to 100GB data processing',
            '5 custom dashboards',
            'Basic predictive models',
            'Email support',
            'Monthly performance reports'
          ]
        },
        {
          name: 'Advanced',
          price: '$999',
          billingPeriod: 'per month',
          description: 'Ideal for enterprises requiring advanced AI capabilities and dedicated support.',
          features: [
            'Unlimited data processing',
            'Unlimited custom dashboards',
            'Advanced predictive models',
            'Custom algorithm development',
            '24/7 priority support',
            'Real-time monitoring',
            'API access for integration'
          ],
          highlighted: true
        }
      ]
    },
    'machine-learning': {
      id: 'machine-learning',
      name: 'Machine Learning Engine',
      description: 'Adaptive algorithms that learn from your data to provide increasingly accurate predictions and recommendations.',
      longDescription: 'Our Machine Learning Engine represents the cutting edge of AI technology. Built on neural network architecture inspired by the human brain, it continuously learns and adapts from every interaction. This self-improving system delivers increasingly accurate predictions, recommendations, and insights as it processes more of your business data.',
      icon: <Zap size={36} className="text-ubertrix-primary" />,
      performance: {
        trainingSpeed: '10x industry average',
        modelAccuracy: 'Up to 97.5%',
        adaptability: 'Self-optimizing',
        deployment: 'One-click',
      },
      plans: [
        {
          name: 'Basic',
          price: '$799',
          billingPeriod: 'per month',
          description: 'Entry-level machine learning capabilities for growing businesses.',
          features: [
            '3 ML models included',
            'Weekly model retraining',
            'Basic data preprocessing',
            'Standard model templates',
            'Email support'
          ]
        },
        {
          name: 'Advanced',
          price: '$1,499',
          billingPeriod: 'per month',
          description: 'Enterprise-grade ML solutions with unlimited training capacity.',
          features: [
            'Unlimited ML models',
            'Daily model retraining',
            'Advanced data preprocessing',
            'Custom model development',
            'GPU-accelerated training',
            'Model explainability tools',
            'On-call ML engineer support'
          ],
          highlighted: true
        }
      ]
    },
    'secure-infrastructure': {
      id: 'secure-infrastructure',
      name: 'Secure AI Infrastructure',
      description: 'Enterprise-grade security ensuring your data and AI models remain protected at all times.',
      longDescription: 'Security is built into every layer of our AI infrastructure. From data encryption at rest and in transit to rigorous access controls and continuous vulnerability assessments, we implement industry-leading security measures to protect your most valuable assets. Our platform complies with major regulatory frameworks including GDPR, HIPAA, and SOC 2.',
      icon: <Shield size={36} className="text-ubertrix-primary" />,
      performance: {
        encryption: 'AES-256 bit',
        compliance: 'GDPR, HIPAA, SOC 2',
        uptime: '99.999%',
        backups: 'Real-time',
      },
      plans: [
        {
          name: 'Basic',
          price: '$599',
          billingPeriod: 'per month',
          description: 'Standard security features for businesses with moderate security needs.',
          features: [
            'Data encryption at rest',
            'Role-based access control',
            'Quarterly security audits',
            'Standard compliance reports',
            'Basic threat detection'
          ]
        },
        {
          name: 'Advanced',
          price: '$1,299',
          billingPeriod: 'per month',
          description: 'Maximum security for organizations handling sensitive or regulated data.',
          features: [
            'End-to-end encryption',
            'Advanced access control',
            'Monthly security audits',
            'Custom compliance reporting',
            '24/7 security monitoring',
            'Threat hunting',
            'Security incident response team',
            'Multi-factor authentication'
          ],
          highlighted: true
        }
      ]
    }
  };
  
  const product = products[productId as keyof typeof products];
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <p className="mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Back to products link */}
        <Link to="/products" className="inline-flex items-center text-gray-400 hover:text-ubertrix-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2" size={16} />
          Back to Products
        </Link>
        
        {/* Product header */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 animate-on-scroll">
          <div className="md:w-2/3">
            <div className="bg-ubertrix-primary bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              {product.icon}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-400 text-lg mb-6">{product.description}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/contact" className="btn-primary">
                Request Demo
              </Link>
              <a href="#pricing" className="btn-outline">
                View Pricing
              </a>
            </div>
          </div>
          
          <div className="md:w-1/3 bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
            <div className="space-y-4">
              {Object.entries(product.performance).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-400">{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                  <span className="font-medium text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Product description */}
        <div className="mb-16 animate-on-scroll delay-100">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-400 mb-4">{product.longDescription}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg">
              <Zap className="text-ubertrix-primary mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">Fast Implementation</h3>
              <p className="text-gray-400">Get up and running in days, not months, with our streamlined onboarding process.</p>
            </div>
            
            <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg">
              <Shield className="text-ubertrix-primary mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-400">Your data is protected with industry-leading security measures and protocols.</p>
            </div>
            
            <div className="bg-ubertrix-muted bg-opacity-20 p-6 rounded-lg">
              <BarChart4 className="text-ubertrix-primary mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
              <p className="text-gray-400">Transform complex data into clear, actionable business intelligence.</p>
            </div>
          </div>
        </div>
        
        {/* Pricing plans */}
        <div id="pricing" className="scroll-mt-20 animate-on-scroll delay-200">
          <h2 className="text-2xl font-bold mb-8 text-center">Pricing Plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {product.plans.map((plan: ProductPlan, index) => (
              <Card 
                key={plan.name} 
                className={`overflow-hidden ${plan.highlighted ? 'border-ubertrix-primary' : 'border-gray-700'}`}
              >
                <div className={`p-6 ${plan.highlighted ? 'bg-ubertrix-primary bg-opacity-10' : ''}`}>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.billingPeriod}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                </div>
                
                <CardContent className="p-6 pt-6">
                  <h4 className="font-semibold mb-4">Features included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="text-ubertrix-primary mr-2 flex-shrink-0 mt-1" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Button
                      className={`w-full ${plan.highlighted ? 'bg-ubertrix-primary text-black hover:bg-ubertrix-secondary' : 'bg-ubertrix-muted text-white hover:bg-ubertrix-muted/80'}`}
                      asChild
                    >
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-gray-400 mt-6">
            Need a custom plan? <Link to="/contact" className="text-ubertrix-primary hover:underline">Contact us</Link> for enterprise pricing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
