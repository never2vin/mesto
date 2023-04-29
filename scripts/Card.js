export default class Card {
  constructor(data, templateSelector) {
    this._link = data.link;
    this._title = data.name;
    this._templateSelector = templateSelector;
    this._popupElement = document.querySelector('.popup_type_image');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', this._handleOpenPopup);
    this._element.querySelector('.element__like-icon').addEventListener('click', this._toggleLikeIconActivity);
    this._element.querySelector('.element__trash-icon').addEventListener('click', this._removeCardElement);
  }

  _toggleLikeIconActivity() {
    this.classList.toggle('element__like-icon_active');
  }

  _removeCardElement = () => {
    this._element.remove();
  }

  _handleOpenPopup = () => {
    this._popupElement.querySelector('.popup__image').src = this._link;
    this._popupElement.querySelector('.popup__image').alt = this._title;

    this._popupElement.querySelector('.popup__caption').textContent = this._title;

    this._popupElement.classList.add('popup_opened');
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._title;

    this._element.querySelector('.element__title').textContent = this._title;

    this._setEventListeners();

    return this._element;
  }
}
