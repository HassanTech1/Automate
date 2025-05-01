// Contact form functionality
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const sendAnother = document.getElementById('send-another');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gather form data
    const data = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      company: contactForm.company.value,
      subject: contactForm.subject.value,
      message: contactForm.message.value,
      newsletter: contactForm.newsletter.checked
    };

    // Format JSON with indentation
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    // Suggest a folder in the filename, but browser will save to Downloads
    const filename = `order/contact-${timestamp}.json`;

    // Create download link and trigger download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success message
    contactForm.style.display = 'none';
    formSuccess.classList.remove('hidden');
  });

  // Allow user to send another message
  if (sendAnother) {
    sendAnother.addEventListener('click', () => {
      formSuccess.classList.add('hidden');
      contactForm.style.display = 'block';
      contactForm.reset();
    });
  }
});
