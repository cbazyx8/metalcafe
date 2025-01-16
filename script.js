// Cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

// Update cart count
function updateCartCount(count) {
    cartCount = count;
    cartCountElement.textContent = count;
}

// Search functionality
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

searchButton.addEventListener('click', () => {
    const address = searchInput.value.trim();
    if (address) {
        // Here you would typically make an API call to search for restaurants
        alert(`Searching for restaurants near: ${address}`);
    } else {
        alert('Please enter a delivery address');
    }
});

// Restaurant cards hover effect
const restaurantCards = document.querySelectorAll('.restaurant-card');
restaurantCards.forEach(card => {
    card.addEventListener('click', () => {
        // Here you would typically navigate to the restaurant's menu page
        const restaurantName = card.querySelector('h3').textContent;
        alert(`Opening ${restaurantName}'s menu...`);
    });
});

// Category cards hover effect
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const categoryName = card.querySelector('h3').textContent;
        alert(`Showing all ${categoryName} options...`);
    });
});

// Menu page functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const menuItem = button.closest('.menu-item');
        const itemName = menuItem.querySelector('h3').textContent;
        cartCount++;
        updateCartCount(cartCount);
        alert(`${itemName} added to cart!`);
    });
});

// Contact form functionality
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formValues);
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Add animation on scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.category-card, .restaurant-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial cart count
    updateCartCount(0);
    
    // Add loading animation
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        setTimeout(() => {
            hero.style.transition = 'opacity 1s ease';
            hero.style.opacity = '1';
        }, 100);
    }
});
