export default class Popup {

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption');
    this._popupCloseIcon = this._popup.querySelector('.popup__close-icon');
  }

  _setEventListeners() {
    this._popup.addEventListener('click', this._closePopupByClickOverlay);
    this._popupCloseIcon.addEventListener('click', this.close);

    document.addEventListener('keydown', this._closeByEscape);
  }

  _closeByEscape = (event) =>  {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  _closePopupByClickOverlay = (event) =>  {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  open = (data) => {
    this._setEventListeners();

    this._popupImage.src = data.link;
    this._popupImage.alt = data.name;

    this._popupCaption.textContent = data.name;

    this._popup.classList.add('popup_opened');
  }

  close = () => {
    document.removeEventListener('keydown', this._closeByEscape);

    this._popup.classList.remove('popup_opened');
  }
}
