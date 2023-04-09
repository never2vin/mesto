const formEditProfile = document.forms['edit-profile'];
const formSubmitButton = formEditProfile.querySelector('.popup__submit');


function enableValidation(form) {

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });

  setEventListeners(form);
}

function setEventListeners(form) {
  const formInputs = Array.from(form.querySelectorAll('.popup__input'))

  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(input);
      if (hasInvalidInput(formInputs)) {
        disableSubmitButton(formSubmitButton);
      } else {
        enableSubmitButton(formSubmitButton);
      }
    });
  });
}

function checkInputValidity(input) {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`);

  if (input.checkValidity()) {
    input.classList.remove('popup__input_type_error');
    currentInputErrorContainer.classList.remove('popup__input-error_active');
    currentInputErrorContainer.textContent = '';
  } else {
    input.classList.add('popup__input_type_error');
    currentInputErrorContainer.textContent = input.validationMessage;
    currentInputErrorContainer.classList.add('popup__input-error_active');
  }
}

function hasInvalidInput(formInputs) {
  return formInputs.some(item => !item.checkValidity())
}

function enableSubmitButton(button) {
  button.classList.remove('popup__submit_disabled');
}

function disableSubmitButton(button) {
  button.classList.add('popup__submit_disabled');
}

enableValidation(formEditProfile);
