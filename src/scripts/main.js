'use strict';

const loginEmail = document.querySelector('.login-input.email');
const loginPassword = document.querySelector('.login-input.password');
const loginEmailError = document.querySelector('.login-email-error');
const loginPasswordRemainder = document.querySelector('.login-password-link');

const registerStep = document.querySelectorAll('.register-step');

const backButton = document.querySelector('.register-previous');
const nextButton = document.querySelector('.register-next');
const startButton = document.querySelector('.register-start');

const customSelects = document.querySelectorAll('.custom-select');

const progressItems = document.querySelectorAll('.progress-item');

document.addEventListener('DOMContentLoaded', function () {
  customSelects.addEventListener('blur', function () {
    customSelects.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  customSelects.forEach((select) => {
    const selectValue = select.querySelector('.select-value');
    const options = select.querySelector('.options');

    selectValue.addEventListener('click', () => {
      select.classList.toggle('active');
    });

    options.querySelectorAll('li').forEach((option) => {
      option.addEventListener('click', () => {
        selectValue.textContent = option.textContent;
        select.classList.remove('active');
      });
    });
  });
});



progressItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Зніміть активний клас з усіх елементів
    progressItems.forEach((el) => el.classList.remove('active'));
    // Додайте активний клас до поточного етапу та всіх попередніх
    for (let i = 0; i <= index; i++) {
      progressItems[i].classList.add('active');
    }
  });
});
