'use strict';

const customSelects = document.querySelectorAll('.custom-select');

function setupCustomSelects() {
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
}

document.addEventListener('DOMContentLoaded', function () {
  setupCustomSelects();
});