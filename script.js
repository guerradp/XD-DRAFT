// Contact Form Submission

const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");


contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formResponse.textContent = `Thank you, ${contactForm.name.value}, for your message! We'll get back to you soon.`;
  contactForm.reset();
});