export default class FormValidator {

  constructor (data, formElement) {
    this._data = data;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(this._data.submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._data.inputSelector));
  }

  enableValidation() {
    this._setEventListeners();
  };

  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleButtonState(this._data.inactiveButtonClass);
        this._checkInputValidity(inputElement);
      });
    });
  }

  _toggleButtonState = (inactiveButtonClass) => {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(inactiveButtonClass);
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
      this._showInputError(inputElement, this._data);
    } else {
      this._hideInputError(inputElement, this._data);
    }
  };

  _showInputError = (inputElement, {inputErrorClass, errorClass}) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
  };

  _hideInputError = (inputElement, {inputErrorClass, errorClass}) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };
}
