
// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();
  
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navDesktop = document.querySelector('.nav-desktop');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      // Toggle mobile menu (you can implement this based on your needs)
      console.log('Mobile menu clicked');
    });
  }
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Download button functionality
  const downloadButtons = document.querySelectorAll('.download-btn, .btn-primary');
  
  downloadButtons.forEach(button => {
    button.addEventListener('click', function() {
      // You can implement actual download functionality here
      console.log('Download button clicked:', this.textContent);
      
      // For demonstration, you can show an alert
      alert('التنزيل سوف يبداء الان');
    });
  });
  
  // Learn More button functionality
  const learnMoreBtn = document.querySelector('.btn-outline');
  
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', function() {
      // Scroll to features section
      const featuresSection = document.querySelector('#features');
      if (featuresSection) {
        featuresSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
  
  // Add scroll effect to header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
  });
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.feature-card, .feature-item, .download-card');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Form validation (if you add contact forms later)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Utility function to format file sizes
function formatFileSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
}

// Add loading states to buttons
function addLoadingState(button) {
  const originalText = button.innerHTML;
  button.innerHTML = '<i data-lucide="loader-2"></i> Loading...';
  button.disabled = true;
  
  // Re-initialize lucide icons for the new loader icon
  lucide.createIcons();
  
  // Remove loading state after 2 seconds (simulate download)
  setTimeout(() => {
    button.innerHTML = originalText;
    button.disabled = false;
    lucide.createIcons();
  }, 2000);
}

// Enhanced download button functionality with loading states
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('download-btn') || 
      (e.target.classList.contains('btn-primary') && e.target.textContent.includes('Download'))) {
    
    addLoadingState(e.target);
  }
});
