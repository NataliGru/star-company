import {
  isValidEmail,
  isValidPassword,
} from './validation.js';

const logInEmail = document.querySelector('.login-input.email');
const logInPassword = document.querySelector('.login-input.password');
const logInButton = document.querySelector('.login-button');
const logInEmailError = document.querySelector('.login-email-error');
const logInPasswordRemainder = document.querySelector('.login-password-link');

function showEmailError(errorMessage) {
  logInEmailError.textContent = errorMessage;
  logInEmailError.style.visibility = 'visible';
}

function hideEmailError() {
  logInEmailError.textContent = '';
  logInEmailError.style.visibility = 'hidden';
}

function validateEmail() {
  if (!isValidEmail(logInEmail.value)) {
    showEmailError('Please enter a valid email');
    return false;
  } else {
    hideEmailError();
    return true;
  }
}

function validatePassword() {
  if (!isValidPassword(logInPassword.value)) {
    logInPasswordRemainder.style.visibility = 'visible';
    return false;
  } else {
    logInPasswordRemainder.style.visibility = 'hidden';
    return true;
  }
}

function resetForm() {
  logInEmail.value = '';
  logInPassword.value = '';
}

logInEmail.addEventListener('blur', validateEmail);
logInEmail.addEventListener('input', hideEmailError);

logInPassword.addEventListener('blur', validatePassword);
logInPassword.addEventListener('input', () => {
  logInPasswordRemainder.style.visibility = 'hidden';
});

logInButton.addEventListener('click', (event) => {
  event.preventDefault();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isEmailValid && isPasswordValid) {
    hideEmailError();
    resetForm();
  }
});
