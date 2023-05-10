import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    console.log(this);
  }

  setEventListeners() {
    super.setEventListeners()

    this._popupForm.addEventListener('submit', this._handleFormSubmit);
  }

  close() {
    this._popupForm.reset();

    super.close();
  }
}
