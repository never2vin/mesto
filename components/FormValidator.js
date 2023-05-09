export default class FormValidator {

  constructor (params, formElement) {
    this._params = params;
    this._formElement = formElement;
    this._submitButton = formElement.querySelector(params.submitButtonSelector);
    this._inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
  }

  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleButtonState();
        this._checkInputValidity(inputElement);
      });
    });
  }

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._params.inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._params.inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _hasInvalidInput = () => {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, this._params);
    } else {
      this._hideInputError(inputElement, this._params);
    }
  };

  _showInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._params.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._params.errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._params.inputErrorClass);
    errorElement.classList.remove(this._params.errorClass);
    errorElement.textContent = '';
  };

  enableValidation() {
    this._setEventListeners();
  };

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };
}
