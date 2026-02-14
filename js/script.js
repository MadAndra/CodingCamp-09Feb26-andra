// Hamburger Menu Logic
document.addEventListener('DOMContentLoaded', () => {
    // Call welcome message first or inside listener
    welcomeMessage();

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });

        // Close menu when a link is clicked (for mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('open');
            }
        });
    }
});

// Welcome Message Function
// Welcome Message Function
function welcomeMessage() {
    const modal = document.getElementById('welcome-modal');
    const input = document.getElementById('visitor-name');
    const btn = document.getElementById('modal-submit-btn');
    const welcomeSpeech = document.getElementById('welcome-speech');

    if (!modal || !input || !btn) return;

    // Show modal with animation
    setTimeout(() => {
        modal.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        requestAnimationFrame(() => {
            modal.classList.remove('opacity-0');
            modal.querySelector('div').classList.remove('scale-95');
            modal.querySelector('div').classList.add('scale-100');
            input.focus(); // Auto-focus the input
        });
    }, 500);

    const submitName = () => {
        let name = input.value.trim();
        if (!name) name = "Guest";

        if (welcomeSpeech) {
            welcomeSpeech.innerHTML = `Hello, ${name}! Welcome to Andra Company.`;
        }

        // Close modal with animation
        modal.classList.add('opacity-0');
        modal.querySelector('div').classList.remove('scale-100');
        modal.querySelector('div').classList.add('scale-95');

        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    };

    btn.addEventListener('click', submitName);

    // Allow pressing Enter to submit
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') submitName();
    });
}

// Form Validation for Message Us
function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('message-submit-btn');

    // Output Elements
    const outputContainer = document.getElementById('message-output');
    const outputName = document.getElementById('output-name');
    const outputEmail = document.getElementById('output-email');
    const outputMessage = document.getElementById('output-message');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            // Simple Validation
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Display Data
            if (outputContainer && outputName && outputEmail && outputMessage) {
                outputName.textContent = name;
                outputEmail.textContent = email;
                outputMessage.textContent = message;

                outputContainer.classList.remove('hidden');

                // Clear Form
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';

                // Optional: Scroll to output
                outputContainer.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Call validateForm on load
document.addEventListener('DOMContentLoaded', validateForm);

// Portfolio Hover Effects
function initPortfolioEffects() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        // Select the image inside the card
        const img = card.querySelector('.project-img');

        if (card && img) {
            // Mouse Enter: Add effects
            card.addEventListener('mouseenter', () => {
                img.classList.add('hover-effect-zoom');
                card.classList.add('hover-effect-shadow');
            });

            // Mouse Leave: Remove effects
            card.addEventListener('mouseleave', () => {
                img.classList.remove('hover-effect-zoom');
                card.classList.remove('hover-effect-shadow');
            });
        }
    });
}

// Initialize portfolio effects
document.addEventListener('DOMContentLoaded', initPortfolioEffects);

