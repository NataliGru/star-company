import {
  isValidEmail,
  isValidPassword,
  isValidSelection,
  isValidLocation,
} from './validation.js';

const previousButton = document.querySelector('.register-previous');
const nextButton = document.querySelector('.register-next');
const startButton = document.querySelector('.register-start');

const registerProfession = document.querySelector('.custom-select.profession');
const registerAge = document.querySelector('.custom-select.age');
const registerEmail = document.querySelector('.register-input.email');
const registerPassword = document.querySelector('.register-input.password');
const registerLocation = document.querySelector('.register-input.location');
const registerError = document.querySelector('.register-error');

const locationPolicy = document.querySelector('.register-policy-location');
const privatePolicy = document.querySelector('.register-policy-private');
const transparentPolicy = document.querySelector(
  '.register-policy-transparent',
);

const progressItems = document.querySelectorAll('.progress-item');

const steps = document.querySelectorAll('.register-step');

let currentStep = 0;

function showRegisterError(errorMessage) {
  registerError.textContent = errorMessage;
  registerError.style.display = 'block';
}

function hideRegisterError() {
  registerError.style.display = 'none';
}

function validateCurrentStep() {
  switch (currentStep) {
    case 0:
      return (
        isValidSelection(
          registerProfession.querySelector('.select-value').textContent,
        ) || showRegisterError('Please select a valid profession')
      );
    case 1:
      return (
        isValidSelection(
          registerAge.querySelector('.select-value').textContent,
        ) || showRegisterError('Please select a valid age')
      );
    case 2:
      return (
        isValidLocation(registerLocation.value) ||
        showRegisterError('Please enter a valid location')
      );
    case 3:
      return (
        isValidEmail(registerEmail.value) ||
        showRegisterError('Please enter a valid email')
      );
    case 4:
      return (
        isValidPassword(registerPassword.value) ||
        showRegisterError('Please enter a valid password')
      );
    default:
      return true;
  }
}

function goToNextStep() {
  if (currentStep <= steps.length - 1) {
    const isValid = validateCurrentStep();

    if (isValid) {
      steps[currentStep].classList.remove('active');
      currentStep++;
      steps[currentStep].classList.add('active');
      updateMainHelperItems(currentStep);
      hideRegisterError();
    }
  }
}

function goToPreviousStep() {
  if (currentStep > 0) {
    steps[currentStep].classList.remove('active');
    currentStep--;
    steps[currentStep].classList.add('active');
    updateMainHelperItems(currentStep);
    hideRegisterError();
  }
}
previousButton.addEventListener('click', goToPreviousStep);

nextButton.addEventListener('click', goToNextStep);

startButton.addEventListener('click', () => {
  if (isValidPassword(registerPassword.value)) {
    registerProfession.querySelector('.select-value').textContent =
      'Select an option';
    registerAge.querySelector('.select-value').textContent = 'Select an option';
    registerEmail.value = '';
    registerPassword.value = '';

    registerLocation.value = '';

    steps[currentStep].classList.remove('active');
    currentStep = 0;
    steps[currentStep].classList.add('active');
    updateMainHelperItems(currentStep);
  } else {
    showRegisterError('Please enter a valid password');
  }
});

function updateMainHelperItems(currentStep) {
  progressItems.forEach((item, index) => {
    if (index <= currentStep) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  if (currentStep === 2 || currentStep === steps.length - 1) {
    transparentPolicy.classList.remove('active');
  } else {
    transparentPolicy.classList.add('active');
  }

  if (currentStep === 2) {
    locationPolicy.classList.add('active');
  } else {
    locationPolicy.classList.remove('active');
  }

  if (currentStep === steps.length - 1) {
    nextButton.style.display = 'none';
    startButton.style.display = 'block';
    privatePolicy.classList.add('active');
  } else {
    nextButton.style.display = 'block';
    startButton.style.display = 'none';
    privatePolicy.classList.remove('active');
  }
}
