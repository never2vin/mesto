import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._submitButton = this._popupForm.querySelector('.popup__submit');
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    const formData = new FormData(this._popupForm);

    return Object.fromEntries(formData);
  }

  setEventListeners() {
    super.setEventListeners()

    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();

      this._handleFormSubmit(this._getInputValues())
    })
  }

  setSubmitButtonText(text = this._submitButtonText) {
    this._submitButton.textContent = text;
  }

  close() {
    this._popupForm.reset();

    super.close();
  }
}
