export default class Card {
  constructor(data, templateSelector, imagePopup) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._imagePopup = imagePopup;
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
    this._imageElement.addEventListener('click', this._handleOpenPopup);
    this._likeIconElement.addEventListener('click', this._toggleLikeIconActivity);
    this._cardElement.querySelector('.element__trash-icon').addEventListener('click', this._removeCardElement);
  }

  _toggleLikeIconActivity = () => {
    this._likeIconElement.classList.toggle('element__like-icon_active');
  }

  _removeCardElement = () => {
    this._cardElement.remove();
  }

  _handleOpenPopup = () => {
      this._imagePopup.open(this._data);
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    this._imageElement = this._cardElement.querySelector('.element__image');
    this._likeIconElement = this._cardElement.querySelector('.element__like-icon');

    this._cardElement.querySelector('.element__title').textContent = this._data.name;
    this._imageElement.src = this._data.link;
    this._imageElement.alt = this._data.name;

    this._setEventListeners();

    return this._cardElement;
  }
}
