export default class Popup {

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseIcon = this._popup.querySelector('.popup__close-icon');
    this.close = this.close.bind(this);
  }

  _handleEscClose = (event) =>  {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popupCloseIcon.addEventListener('click', this.close);
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);

    this._popup.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);

    this._popup.classList.remove('popup_opened');
  }
}
