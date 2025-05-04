// Button click event
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    button.textContent = button.textContent === "Click Me!" ? "Clicked!" : "Click Me!";
});

// Image Gallery
let currentImage = 0;
const images = document.querySelectorAll('.gallery img');
setInterval(() => {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}, 2000);

// Tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(tab.dataset.content).style.display = 'block';
    });
});

// Form Validation
const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    if (!form.elements['requiredField'].value) {
        alert("This field is required!");
        event.preventDefault();
    }
});

const emailField = form.elements['email'];
emailField.addEventListener('input', () => {
    const isValid = /\S+@\S+\.\S+/.test(emailField.value);
    emailField.setCustomValidity(isValid ? "" : "Invalid email format.");
});

const passwordField = form.elements['password'];
passwordField.addEventListener('input', () => {
    const feedback = document.getElementById('passwordFeedback');
    feedback.textContent = passwordField.value.length < 8 ? "Password must be at least 8 characters." : "Good!";
});


