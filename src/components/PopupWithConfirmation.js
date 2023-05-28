import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {

  constructor(popupSelector) {
    super(popupSelector);

    this._popupForm = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners()

    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();

      this._handleFormSubmit();
    })
  }

  open({ handleFormSubmit }) {
    this._handleFormSubmit = handleFormSubmit;

    super.open();
  }
}
