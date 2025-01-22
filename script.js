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

        // Close the navbar menu for better UX
        navbar.classList.remove('active');
    });
});

// Get the hamburger menu and navbar elements
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Toggle navbar visibility when hamburger icon is clicked
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Typing effect for rotating roles
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

// Highlight movement effect on image container
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

// Full-screen CV image toggle
document.addEventListener('DOMContentLoaded', () => {
    const cvImage = document.getElementById('cvImage');

    cvImage.addEventListener('click', () => {
        cvImage.classList.toggle('full-screen');
    });

    // Initialize typing effect on page load
    typeText();

    // Image highlight effects
    const imageContainer = document.getElementById('imageContainer');
    if (imageContainer) {
        imageContainer.addEventListener('mousemove', moveHighlight);
        imageContainer.addEventListener('mouseleave', resetHighlight);
    }

    // CV download confirmation
    const downloadCVBtn = document.querySelector('.download-cv');
    if (downloadCVBtn) {
        downloadCVBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent automatic download
            const confirmDownload = confirm("Do you want to download Maureen Njeri's CV?");
            if (confirmDownload) {
                window.location.href = 'maureen_njeri_cv.pdf';
            }
        });
    }
});
