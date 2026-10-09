// =========================================================
// PERSONAL PORTFOLIO - JAVASCRIPT
// Developer: Sujay Paul (Frontend Developer)
// Features: Mobile Navigation Menu & Contact Form Validation
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  // --- 1. Mobile Hamburger Navigation Menu ---
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburgerBtn && navMenu) {
    // Toggle menu open/close on button click
    hamburgerBtn.addEventListener('click', function () {
      navMenu.classList.toggle('active');

      // Switch icon between hamburger bars and close (X)
      const icon = hamburgerBtn.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close mobile menu when clicking on any nav link
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        const icon = hamburgerBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // --- 2. Contact Form Client-Side Validation ---
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');
  const formSuccess = document.getElementById('formSuccess');

  // Simple email pattern validation helper
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Clear errors as soon as user starts typing in a field
  function clearErrorOnInput(input, errorElement) {
    if (input && errorElement) {
      input.addEventListener('input', function () {
        input.classList.remove('error-border');
        errorElement.textContent = '';
      });
    }
  }

  clearErrorOnInput(nameInput, nameError);
  clearErrorOnInput(emailInput, emailError);
  clearErrorOnInput(subjectInput, subjectError);
  clearErrorOnInput(messageInput, messageError);

  // Form submission validation
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let formIsValid = true;

      // 1. Validate Name
      const nameValue = nameInput.value.trim();
      if (nameValue === '') {
        nameError.textContent = 'Please enter your name.';
        nameInput.classList.add('error-border');
        formIsValid = false;
      } else if (nameValue.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters.';
        nameInput.classList.add('error-border');
        formIsValid = false;
      } else {
        nameError.textContent = '';
        nameInput.classList.remove('error-border');
      }

      // 2. Validate Email
      const emailValue = emailInput.value.trim();
      if (emailValue === '') {
        emailError.textContent = 'Please enter your email address.';
        emailInput.classList.add('error-border');
        formIsValid = false;
      } else if (!isValidEmail(emailValue)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('error-border');
        formIsValid = false;
      } else {
        emailError.textContent = '';
        emailInput.classList.remove('error-border');
      }

      // 3. Validate Subject
      const subjectValue = subjectInput.value.trim();
      if (subjectValue === '') {
        subjectError.textContent = 'Please enter a subject.';
        subjectInput.classList.add('error-border');
        formIsValid = false;
      } else {
        subjectError.textContent = '';
        subjectInput.classList.remove('error-border');
      }

      // 4. Validate Message
      const messageValue = messageInput.value.trim();
      if (messageValue === '') {
        messageError.textContent = 'Please enter your message.';
        messageInput.classList.add('error-border');
        formIsValid = false;
      } else if (messageValue.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters.';
        messageInput.classList.add('error-border');
        formIsValid = false;
      } else {
        messageError.textContent = '';
        messageInput.classList.remove('error-border');
      }

      // If all fields are valid, show success message and reset form
      if (formIsValid) {
        formSuccess.textContent = 'Thank you! Your message has been sent successfully.';
        formSuccess.style.display = 'block';

        // Clear input fields
        contactForm.reset();

        // Automatically hide success alert after 5 seconds
        setTimeout(function () {
          formSuccess.style.display = 'none';
        }, 5000);
      }
    });
  }

  // --- 3. Dynamic Footer Copyright Year ---
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
