
export const initScrollAnimations = () => {
  // Elements that should be animated when they come into view
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  // Check if IntersectionObserver is supported
  if (!('IntersectionObserver' in window)) {
    // Fallback for browsers that don't support IntersectionObserver
    animatedElements.forEach(element => {
      element.classList.add('animated');
    });
    return;
  }
  
  // Options for the observer
  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.15 // 15% of the element must be visible
  };
  
  // Create observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'animated' class when the element is in view
        entry.target.classList.add('animated');
        
        // Stop observing the element after it's been animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Start observing each element
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Initialize data path animations that aren't tied to scroll
  initDataPathAnimations();
};

const initDataPathAnimations = () => {
  // We'll handle this in the MouseFollower component now
};
