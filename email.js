// static/js/email.js

// ✅ Wait until DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // ⚙️ Initialize EmailJS
  emailjs.init('nsluvurhozqetrxz'); // replace with your EmailJS Public Key

  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(() => {
          formStatus.innerText = "✅ Message sent successfully!";
          this.reset();
        })
        .catch((error) => {
          formStatus.innerText = "❌ Failed to send message. Try again!";
          console.error("EmailJS Error:", error);
        });
    });
  }
});
