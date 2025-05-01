
// Product detail page functionality
document.addEventListener('DOMContentLoaded', () => {
  // Get product ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('product');
  
  if (!productId) return;
  
  // Product data
  const products = {
    'ai-analytics': {
      title: 'Opraflow HR & FAIM',
      description: 'Advanced data analysis powered by machine learning to extract actionable insights from your business data.',
      image: 'img/opraflow_icon-removebg-preview.png',
      icon: ``,
      prices: {
        monthly: 350,
        yearly: 500
      },
      features: [
        {
          title: 'Real-time Analytics',
          description: 'Process and analyze data in real-time to provide immediate insights and actionable information.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke-width="2"/>
                </svg>`
        },
        {
          title: 'Advanced Visualizations',
          description: 'Create custom dashboards with interactive charts and graphs to visualize your data effectively.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 3v18h18" stroke-width="2"/>
                  <path d="M18 9l-5 4-4-6-5 8" stroke-width="2"/>
                </svg>`
        },
        {
          title: 'Predictive Analysis',
          description: 'Utilize machine learning algorithms to forecast trends and outcomes based on historical data.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 12a9 9 0 11-9-9 9.75 9.75 0 017.42 3.58" stroke-width="2"/>
                  <path d="M21 3v9h-9" stroke-width="2"/>
                </svg>`
        },
        {
          title: 'Security analysis',
          description: 'Automatically identify unusual patterns and outliers in your data to address issues quickly.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 9v4m0 4h.01" stroke-width="2"/>
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke-width="2"/>
                </svg>`
        }
      ]
    },
    'nlp-engine': {
      title: 'Natural Language Processing Engine',
      description: 'Understand, interpret, and generate human language with our cutting-edge NLP solutions.',
      image: 'img/nlp-engine.png',
      icon: `<svg class="lucide-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 3c1.5 0 2.5.5 3.5 1.5S17 6.5 17 8c0 3-2 4.5-3 6.5 0 0-1 1.5-2 1.5s-2-1.5-2-1.5c-1-2-3-3.5-3-6.5 0-1.5.5-2.5 1.5-3.5S10.5 3 12 3z" stroke-width="2"></path>
              <path d="M9 18v3h6v-3" stroke-width="2"></path>
            </svg>`,
      prices: {
        monthly: 30,
        yearly: 7590
      },
      features: [
        {
          title: 'Sentiment Analysis',
          description: 'Determine the emotional tone behind words to understand customer attitudes and opinions.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 10h.01M15 10h.01" stroke-width="2"/>
                  <path d="M12 20h.01" stroke-width="2"/>
                  <path d="M9 17a3 3 0 0 0 6 0v-1h-6v1z" stroke-width="2"/>
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke-width="2"/>
                </svg>`
        },
        {
          title: 'Text Classification',
          description: 'Automatically categorize text into predefined categories to organize and structure data.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" stroke-width="2"/>
                </svg>`
        },
        {
          title: 'Named Entity Recognition',
          description: 'Identify and extract named entities such as names, organizations, locations, and dates from text.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 12H3m13 0l-4-4m4 4l-4 4" stroke-width="2"/>
                  <path d="M21 12V8a1 1 0 00-1-1h-2a1 1 0 00-1 1v4a1 1 0 001 1h2a1 1 0 001-1z" stroke-width="2"/>
                  <path d="M21 16v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h4" stroke-width="2"/>
                </svg>`
        },
        {
          title: 'Conversational AI',
          description: 'Build intelligent chatbots and virtual assistants that can understand and respond to natural language.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M8 12h8M12 16V8" stroke-width="2"/>
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke-width="2"/>
                </svg>`
        }
      ]
    },
    'cv-platform': {
      title: 'Computer Vision Platform',
      description: 'Enable machines to see and understand visual information with our powerful computer vision toolset.',
      image: 'img/cv-platform.png',
      icon: `<svg class="lucide-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" stroke-width="2"></circle>
              <circle cx="12" cy="12" r="4" stroke-width="2"></circle>
              <line x1="12" y1="2" x2="12" y2="4" stroke-width="2"></line>
              <line x1="12" y1="20" x2="12" y2="22" stroke-width="2"></line>
              <line x1="2" y1="12" x2="4" y2="12" stroke-width="2"></line>
              <line x1="20" y1="12" x2="22" y2="12" stroke-width="2"></line>
            </svg>`,
      prices: {
        monthly: 799,
        yearly: 8690
      },
      features: [
        {
          title: 'Object Detection',
          description: 'Identify and locate objects within images and videos with high accuracy.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 14l-9 6-9-6" stroke-width="2"/>
                  <path d="M3 10l9 6 9-6" stroke-width="2"/>
                  <path d="M3 6l9 6 9-6" stroke-width="2"/>
                </svg>`
        },
        {
          title: 'Facial Recognition',
          description: 'Detect, analyze, and identify human faces for security and personalization applications.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 7h3a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v2a1 1 0 001 1z" stroke-width="2"/>
                  <path d="M17 7h3a1 1 0 001-1V4a1 1 0 00-1-1h-3a1 1 0 00-1 1v2a1 1 0 001 1z" stroke-width="2"/>
                  <path d="M7 20v-8a3 3 0 016 0v8" stroke-width="2"/>
                  <path d="M11 14h2" stroke-width="2"/>
                  <path d="M19 14v6" stroke-width="2"/>
                  <path d="M5 14v6" stroke-width="2"/>
                </svg>`
        },
        {
          title: 'Image Segmentation',
          description: 'Divide images into meaningful segments for detailed analysis and processing.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M10 4.5H4.5v5.5h5.5V4.5z" stroke-width="2"/>
                  <path d="M19.5 4.5H14v5.5h5.5V4.5z" stroke-width="2"/>
                  <path d="M10 14H4.5v5.5h5.5V14z" stroke-width="2"/>
                  <path d="M19.5 14H14v5.5h5.5V14z" stroke-width="2"/>
                </svg>`
        },
        {
          title: 'Quality Control',
          description: 'Automatically detect defects and ensure quality in manufacturing and production processes.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 12l-4 4-1.5-1.5" stroke-width="2"/>
                  <path d="M22 6l-4 4-1.5-1.5" stroke-width="2"/>
                  <path d="M22 18l-4 4-1.5-1.5" stroke-width="2"/>
                  <path d="M2 12h13" stroke-width="2"/>
                  <path d="M2 6h13" stroke-width="2"/>
                  <path d="M2 18h13" stroke-width="2"/>
                </svg>`
        }
      ]
    },
    'ai-automation': {
      title: 'AI Process Automation',
      description: 'Automate repetitive tasks and workflows with intelligent bots that learn and improve over time.',
      image: 'img/ai-automation.png',
      icon: `<svg class="lucide-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="17 2 12 7 7 2" stroke-width="2"></polyline>
              <polyline points="2 17 7 12 2 7" stroke-width="2"></polyline>
              <polyline points="7 22 12 17 17 22" stroke-width="2"></polyline>
              <polyline points="22 7 17 12 22 17" stroke-width="2"></polyline>
            </svg>`,
      prices: {
        monthly: 599,
        yearly: 6490
      },
      features: [
        {
          title: 'Workflow Automation',
          description: 'Automate repetitive business processes to increase efficiency and reduce manual work.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 18l2-2-2-2" stroke-width="2"/>
                  <path d="M10 6L8 8l2 2" stroke-width="2"/>
                  <path d="M18 16h-5a2 2 0 01-2-2v-4" stroke-width="2"/>
                  <path d="M8 8H5a2 2 0 00-2 2v4a2 2 0 002 2h3" stroke-width="2"/>
                </svg>`
        },
        {
          title: 'Intelligent Document Processing',
          description: 'Extract and process information from documents, forms, and images with high accuracy.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke-width="2"/>
                  <path d="M14 2v6h6" stroke-width="2"/>
                  <path d="M16 13H8" stroke-width="2"/>
                  <path d="M16 17H8" stroke-width="2"/>
                  <path d="M10 9H8" stroke-width="2"/>
                </svg>`
        },
        {
          title: 'Decision Support',
          description: 'AI-powered analysis to assist in making informed business decisions based on data.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 3v6m0 12v-6" stroke-width="2"/>
                  <path d="M3 12h6m12 0h-6" stroke-width="2"/>
                  <path d="M12 20a8 8 0 100-16 8 8 0 000 16z" stroke-width="2"/>
                </svg>`
        },
        {
          title: '24/7 Automated Operations',
          description: 'Continuous operation without human intervention for increased productivity and efficiency.',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2v4" stroke-width="2"/>
                  <path d="M6.34 4.34L9.17 7.17" stroke-width="2"/>
                  <path d="M4 12H2" stroke-width="2"/>
                  <path d="M6.34 19.66l2.83-2.83" stroke-width="2"/>
                  <path d="M12 22v-2" stroke-width="2"/>
                  <path d="M17.66 19.66l-2.83-2.83" stroke-width="2"/>
                  <path d="M22 12h-2" stroke-width="2"/>
                  <path d="M17.66 4.34l-2.83 2.83" stroke-width="2"/>
                  <path d="M22 12a10 10 0 00-10-10" stroke-width="2"/>
                </svg>`
        }
      ]
    }
  };
  
  // Get the product data
  const product = products[productId];
  
  if (!product) return;
  
  // Update page content with product data
  document.title = `${product.title} - Ubertrix`;
  
  // Update breadcrumb
  const productBreadcrumb = document.getElementById('product-breadcrumb');
  if (productBreadcrumb) {
    productBreadcrumb.textContent = product.title;
  }
  
  // Update product hero section
  const productTitle = document.getElementById('product-title');
  const productDescription = document.getElementById('product-description');
  const productImage = document.getElementById('product-image');
  const productIcon = document.getElementById('product-icon');
  
  if (productTitle) productTitle.textContent = product.title;
  if (productDescription) productDescription.textContent = product.description;
  if (productImage) {
    productImage.src = product.image;
    productImage.alt = product.title;
    
    // Handle image error
    productImage.onerror = () => {
      productImage.src = 'img/placeholder.png';
    };
  }
  
  if (productIcon) {
    productIcon.innerHTML = product.icon;
  }
  
  // Update pricing
  const starterMonthlyPrice = document.getElementById('starter-monthly-price');
  const starterYearlyPrice = document.getElementById('starter-yearly-price');
  const proMonthlyPrice = document.getElementById('pro-monthly-price');
  const proYearlyPrice = document.getElementById('pro-yearly-price');
  const enterpriseLabel = document.getElementById('enterprise-label');
  
  if (starterMonthlyPrice && starterYearlyPrice && proMonthlyPrice && proYearlyPrice) {
    const starterPriceMonthly = Math.round(product.prices.monthly * 0.3);
    const starterPriceYearly = Math.round(product.prices.yearly * 0.3);
    
    starterMonthlyPrice.textContent = `$${starterPriceMonthly}`;
    starterYearlyPrice.textContent = `$${Math.round(starterPriceYearly / 12)}`;
    
    proMonthlyPrice.textContent = `$${product.prices.monthly}`;
    proYearlyPrice.textContent = `$${Math.round(product.prices.yearly / 12)}`;
  }
  
  if (enterpriseLabel) {
    enterpriseLabel.textContent = 'Custom';
  }
  
  // Update features
  const productFeatures = document.getElementById('product-features');
  
  if (productFeatures && product.features) {
    productFeatures.innerHTML = '';
    
    product.features.forEach(feature => {
      const featureElement = document.createElement('div');
      featureElement.className = 'feature-item';
      
      featureElement.innerHTML = `
        <div class="feature-item-icon">
          ${feature.icon}
        </div>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      `;
      
      productFeatures.appendChild(featureElement);
    });
  }
});
