
// Custom cursor
const cursor = document.getElementById('cursor');

if (cursor) {
  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    cursor.style.left = `${clientX}px`;
    cursor.style.top = `${clientY}px`;
    
    // Add a subtle lag effect
    setTimeout(() => {
      cursor.style.transform = `translate(-50%, -50%) scale(1)`;
    }, 100);
  });
  
  document.addEventListener('mousedown', () => {
    cursor.style.transform = `translate(-50%, -50%) scale(0.8)`;
  });
  
  document.addEventListener('mouseup', () => {
    cursor.style.transform = `translate(-50%, -50%) scale(1)`;
  });
  
  // Apply special effects to links and buttons
  const interactiveElements = document.querySelectorAll('a, button');
  
  interactiveElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      cursor.style.transform = `translate(-50%, -50%) scale(1.5)`;
      cursor.style.mixBlendMode = 'difference';
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.style.transform = `translate(-50%, -50%) scale(1)`;
      cursor.style.mixBlendMode = 'normal';
    });
  });
}

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Update copyright year
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// FAQ toggle
const faqItems = document.querySelectorAll('.faq-item');

if (faqItems.length) {
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other FAQs
      faqItems.forEach((faq) => {
        faq.classList.remove('active');
      });
      
      // If the clicked item wasn't active before, make it active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Pricing toggle between monthly and yearly
const monthlyTab = document.getElementById('monthly-tab');
const yearlyTab = document.getElementById('yearly-tab');
const monthlyPrices = document.querySelectorAll('.monthly-price');
const yearlyPrices = document.querySelectorAll('.yearly-price');

if (monthlyTab && yearlyTab) {
  monthlyTab.addEventListener('click', () => {
    monthlyTab.classList.add('active');
    yearlyTab.classList.remove('active');
    
    monthlyPrices.forEach(price => price.classList.remove('hidden'));
    yearlyPrices.forEach(price => price.classList.add('hidden'));
  });
  
  yearlyTab.addEventListener('click', () => {
    yearlyTab.classList.add('active');
    monthlyTab.classList.remove('active');
    
    yearlyPrices.forEach(price => price.classList.remove('hidden'));
    monthlyPrices.forEach(price => price.classList.add('hidden'));
  });
}

// Testimonial slider
const testimonialsTrack = document.getElementById('testimonials-track');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
const prevTestimonial = document.getElementById('prev-testimonial');
const nextTestimonial = document.getElementById('next-testimonial');

if (testimonialsTrack && testimonialDots.length && prevTestimonial && nextTestimonial) {
  let currentSlide = 0;
  const totalSlides = testimonialDots.length;
  
  const goToSlide = (index) => {
    currentSlide = index;
    testimonialsTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  };
  
  prevTestimonial.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
  });
  
  nextTestimonial.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
  });
  
  testimonialDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
    });
  });
}
