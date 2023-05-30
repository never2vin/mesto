import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._submitButton = this._popupForm.querySelector('.popup__submit');
  }

  _getInputValues() {
    const formData = new FormData(this._popupForm);

    return Object.fromEntries(formData);
  }

  setEventListeners() {
    super.setEventListeners()

    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const initialText = this._submitButton.textContent;
      this._submitButton.textContent = 'Сохранение...';

      this._handleFormSubmit(this._getInputValues())
        .then(() => this.close())
        .finally(() => {
          this._submitButton.textContent = initialText;
        });
    })
  }

  close() {
    this._popupForm.reset();

    super.close();
  }
}
