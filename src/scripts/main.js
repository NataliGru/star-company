'use strict';

const loginEmail = document.querySelector('.login-input.email');
const loginPassword = document.querySelector('.login-input.password');
const loginEmailError = document.querySelector('.login-email-error');
const loginPasswordRemainder = document.querySelector('.login-password-link');

const registerStep = document.querySelectorAll('.register-step');

const backButton = document.querySelector('.register-previous');
const nextButton = document.querySelector('.register-next');
const startButton = document.querySelector('.register-start');
const policy = document.querySelector('.register-private-policy');

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


// Отримуємо посилання на всі етапи
const steps = document.querySelectorAll('.register-step');

// Поточний активний етап (починається з першого етапу)
let currentStep = 0;

// Функція для перехіду до наступного етапу
function goToNextStep() {
  if (currentStep < steps.length - 1) {
    steps[currentStep].classList.remove('active');
    currentStep++;
    steps[currentStep].classList.add('active');
    updateProgressItems(currentStep); // Оновити progressItems
  }
}

// Функція для переходу до попереднього етапу
function goToPreviousStep() {
  if (currentStep > 0) {
    steps[currentStep].classList.remove('active');
    currentStep--;
    steps[currentStep].classList.add('active');
    updateProgressItems(currentStep); // Оновити progressItems
  }
}

// Обробники подій для кнопок "Next" і "Previous"
nextButton.addEventListener('click', goToNextStep);
backButton.addEventListener('click', goToPreviousStep);

// Функція для оновлення progressItems та тексту кнопок
function updateProgressItems(currentStep) {
  progressItems.forEach((item, index) => {
    if (index <= currentStep) {
      item.classList.add('active'); // Додати активний клас для пройдених етапів
    } else {
      item.classList.remove('active'); // Зняти активний клас для майбутніх етапів
    }
  });

  if (currentStep === steps.length - 1) {
    nextButton.style.display = "none"; // Приховати кнопку "Next" на останньому етапі
    startButton.style.display = "block"; // Показати кнопку "Start" (якщо вона була схована)
    policy.style.visibility = "visible"; // Показати кнопку "Start" (якщо вона була схована)
  } else {
    nextButton.style.display = "block"; // Показати кнопку "Next" в інших випадках
    startButton.style.display = "none"; // Приховати кнопку "Start" (якщо вона була показана)
    policy.style.visibility = "hidden"; // Приховати кнопку "Start" (якщо вона була показана)
  }
}

