const form = document.getElementById('myForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phoneNumber');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', validateForm);
fullNameInput.addEventListener('change', validateFullName);
emailInput.addEventListener('change', validateEmail);
phoneNumberInput.addEventListener('change', validatePhoneNumber);
passwordInput.addEventListener('change', validatePassword);
confirmPasswordInput.addEventListener('change', validateConfirmPassword);

function validateForm(event) {
    event.preventDefault();
    if (validateFullName() && validateEmail() && validatePhoneNumber() && validatePassword() && validateConfirmPassword()) {
        // Form is valid, submit it
        form.submit();
    }
}

function validateFullName() {
    const fullName = fullNameInput.value.trim();
    if (fullName.length < 5) {
        document.getElementById('fullNameError').innerHTML = 'Name must be at least 5 characters';
        return false;
    }
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();
    if (!email.includes('@')) {
        document.getElementById('emailError').innerHTML = 'Email must contain @ character';
        return false;
    }
    return true;
}

function validatePhoneNumber() {
    const phoneNumber = phoneNumberInput.value.trim();
    if (phoneNumber === '123456789' || phoneNumber.length !== 10) {
        document.getElementById('phoneNumberError').innerHTML = 'Phone number must be 10 digits and not 123456789';
        return false;
    }
    return true;
}

function validatePassword() {
    const password = passwordInput.value.trim();
    if (password === 'password' || password === fullNameInput.value.trim() || password.length < 8) {
        document.getElementById('passwordError').innerHTML = 'Password must be at least 8 characters and not "password" or your name';
        return false;
    }
    return true;
}

function validateConfirmPassword() {
    const confirmPassword = confirmPasswordInput.value.trim();
    if (confirmPassword !== passwordInput.value.trim()) {
        document.getElementById('confirmPasswordError').innerHTML = 'Confirm password must match password';
        return false;
    }
    return true;
}