// Add a "scrolled" class to the navbar when the page is scrolled
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


//
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/*
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector("#hamburger-menu");
    const navMenu = document.querySelector(".navbar nav ul");

    // Add click event listener to the hamburger menu
    hamburger.addEventListener("click", () => {
        // Toggle the 'active' class on the navigation menu
        navMenu.classList.toggle("active");

        // Adjust the max-height for smooth transition
        if (navMenu.classList.contains("active")) {
            navMenu.style.maxHeight = `${navMenu.scrollHeight}px`;
        } else {
            navMenu.style.maxHeight = "0px";
        }
    });
});
*/


// Carousel Images Scroll
const carouselImages = document.querySelector('.carousel-images');
let scrollAmount = 0;

function scrollCarousel() {
    scrollAmount -= 415; // Image width + gap
    if (Math.abs(scrollAmount) >= carouselImages.scrollWidth / 2) {
        scrollAmount = 0; // Reset to the first image
    }
    carouselImages.style.transform = `translateX(${scrollAmount}px)`;
}

setInterval(scrollCarousel, 3000); // Change image every 3 seconds


//Book Services Form to Whatsapp
function sendToWhatsApp() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Format WhatsApp message
    const whatsappNumber = "8431056335"; // Replace with your WhatsApp number (without '+' or spaces)
    const text = `Hello, I would like to inquire about your services.%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

    // Open WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappLink, '_blank');
}

// Particular Request to WhatsApp requests
// JavaScript to handle WhatsApp requests
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-request-service");
    const whatsappNumber = "8431056335"; // Replace with your WhatsApp number (no "+" or spaces).

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const service = button.getAttribute("data-service");
            const encodedMessage = encodeURIComponent(`I would like to request ${service} services.`);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}%0ACan I get more information on this service. `;

            // Open WhatsApp in a new tab
            window.open(whatsappURL, "_blank");
        });
    });
});




