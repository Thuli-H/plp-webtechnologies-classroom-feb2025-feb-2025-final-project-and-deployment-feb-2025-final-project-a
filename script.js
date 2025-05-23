document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });

  // Close nav when a link is clicked (for single-page scrolling or navigation)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("nav-active")) {
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
        navLinks.forEach((item) => {
          item.style.animation = ""; // Reset animation
        });
      }
    });
  });

  // Form Validation for Contact Page
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      let isValid = true;

      // Name validation
      const nameInput = document.getElementById("name");
      const nameError = document.getElementById("nameError");
      if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        nameError.style.display = "block";
        isValid = false;
      } else {
        nameError.style.display = "none";
      }

      // Email validation
      const emailInput = document.getElementById("email");
      const emailError = document.getElementById("emailError");
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        isValid = false;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        isValid = false;
      } else {
        emailError.style.display = "none";
      }

      // Message validation
      const messageInput = document.getElementById("message");
      const messageError = document.getElementById("messageError");
      if (messageInput.value.trim() === "") {
        messageError.textContent = "Message is required.";
        messageError.style.display = "block";
        isValid = false;
      } else {
        messageError.style.display = "none";
      }

      if (isValid) {
        // If the form is valid, you would typically send the data to a backend.
        // For a frontend-only example, we'll just log and reset.
        console.log("Form submitted successfully!");
        console.log("Name:", nameInput.value);
        console.log("Email:", emailInput.value);
        console.log("Subject:", document.getElementById("subject").value);
        console.log("Message:", messageInput.value);
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset(); // Clear the form
      }
    });
  }

  // Optional: Smooth scrolling for anchor links (e.g., "Learn More" on home page)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
