const logInEmail = document.querySelector('.login-input.email');
const logInPassword = document.querySelector('.login-input.password');
const logInButton= document.querySelector('.login-button');
const logInError = document.querySelector('.login-email-error');




function showLogInError(errorMessage) {
  logInError.textContent = errorMessage;
  logInError.style.display = 'block';
}