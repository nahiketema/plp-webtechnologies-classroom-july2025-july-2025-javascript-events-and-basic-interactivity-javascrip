//========================================================
// Part 1 & 2: Light/Dark Mode Toggle
//========================================================

// Get the button element
const themeToggleBtn = document.getElementById('theme-toggle');

// Add a click event listener to the button
themeToggleBtn.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body element
    // This will switch between the light and dark themes defined in CSS
    document.body.classList.toggle('dark-mode');
});

//========================================================
// Part 3: Custom Form Validation
//========================================================

// Get references to the form and input elements
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Get references to the error message elements
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formSuccess = document.getElementById('form-success');

// Add a 'submit' event listener to the form
form.addEventListener('submit', (event) => {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Reset all error messages and styles before re-validating
    clearErrors();

    // Run validation functions and check if all are valid
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // If all fields are valid, show a success message
    if (isNameValid && isEmailValid && isPasswordValid) {
        formSuccess.textContent = 'Form submitted successfully!';
        form.reset(); // Clear the form fields
    }
});

// Function to clear all error messages and reset input styles
function clearErrors() {
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    nameInput.classList.remove('invalid');
    emailInput.classList.remove('invalid');
    passwordInput.classList.remove('invalid');
    formSuccess.textContent = '';
}

// Function to validate the name field
function validateName() {
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        nameInput.classList.add('invalid');
        return false;
    }
    return true;
}

// Function to validate the email field using a simple regex
function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('invalid');
        return false;
    }
    return true;
}

// Function to validate the password field
function validatePassword() {
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        passwordInput.classList.add('invalid');
        return false;
    }
    return true;
}
