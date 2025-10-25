// static/js/email.js
// ✅ Wait until DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // ⚙️ Initialize EmailJS with your Public Key
  emailjs.init('nsluvurhozqetrxz'); // Your public key is already here
  
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      
      // Show loading message
      formStatus.innerText = "📤 Sending...";
      formStatus.style.color = "#0066cc";
      
      // Replace these with your actual IDs from EmailJS dashboard
      const serviceID = "YOUR_SERVICE_ID";      // e.g., "service_abc123"
      const templateID = "YOUR_TEMPLATE_ID";    // e.g., "template_xyz789"
      
      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          formStatus.innerText = "✅ Message sent successfully!";
          formStatus.style.color = "#00aa00";
          contactForm.reset();
        })
        .catch((error) => {
          formStatus.innerText = "❌ Failed to send message. Please try again!";
          formStatus.style.color = "#cc0000";
          console.error("EmailJS Error:", error);
        });
    });
  } else {
    console.error("Contact form not found! Check if ID 'contact-form' exists.");
  }
});
