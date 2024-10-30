// Smooth scroll functionality for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });

  // Get the hamburger menu and navbar elements
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Add an event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    // Toggle the active class on the navbar
    navbar.classList.toggle('active');
});

// Optionally close the menu when a link is clicked (for better user experience)
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

  const roles = [
      "Software Developer",
      "UI/UX Designer",
      "Product Manager",
      "UX Researcher",
      "Machine Learning Engineer"
  ];
  let roleIndex = 0;
  let charIndex = 0;
  
  function typeText() {
      const roleOutput = document.getElementById("role-output");
      const currentRole = roles[roleIndex];
  
      if (charIndex < currentRole.length) {
          roleOutput.textContent += currentRole.charAt(charIndex);
          charIndex++;
          setTimeout(typeText, 50);
      } else {
          setTimeout(eraseText, 2000);
      }
  }
  
  function eraseText() {
      const roleOutput = document.getElementById("role-output");
  
      if (roleOutput.textContent.length > 0) {
          roleOutput.textContent = roleOutput.textContent.slice(0, -1);
          setTimeout(eraseText, 30);
      } else {
          roleIndex = (roleIndex + 1) % roles.length;
          charIndex = 0;
          setTimeout(typeText, 500);
      }
  }
  
  
  function moveHighlight(e) {
      const container = e.currentTarget;
      const highlight = document.getElementById('highlight');
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      highlight.style.left = `${x - 50}px`;
      highlight.style.top = `${y - 50}px`;
  }
  
  
  function resetHighlight() {
      const highlight = document.getElementById('highlight');
      highlight.style.left = '50px';
      highlight.style.top = '50px';
  }

  
  document.addEventListener('DOMContentLoaded', () => {
      typeText();
      
      const imageContainer = document.getElementById('imageContainer');
      imageContainer.addEventListener('mousemove', moveHighlight);
      imageContainer.addEventListener('mouseleave', resetHighlight);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const cvImage = document.getElementById('cvImage');

    cvImage.addEventListener('click', () => {
        // Toggle full-screen class
        if (cvImage.classList.contains('full-screen')) {
            cvImage.classList.remove('full-screen');
        } else {
            cvImage.classList.add('full-screen');
        }
    });
});

  