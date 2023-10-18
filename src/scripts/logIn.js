import {
  isValidEmail,
  isValidPassword,
} from './validation.js';

const logInEmail = document.querySelector('.login-input.email');
const logInPassword = document.querySelector('.login-input.password');
const logInButton = document.querySelector('.login-button');

const logInError = document.querySelector('.login-email-error');

function showLogInError(errorMessage) {
  logInError.textContent = errorMessage;
  logInError.style.visibility = 'visible';
}

function hideLogInError() {
  logInError.style.visibility = 'hidden';
}

logInButton.addEventListener('click', () => {
  if (!isValidEmail(logInEmail.value)) {
    showLogInError('Please enter a valid email');
    return false;
  }

  if (!isValidPassword(logInPassword.value)) {
    showLogInError('Please enter a valid password');
    return false;
  }

  hideLogInError();

  logInEmail.value = '';
  logInPassword.value = '';
})