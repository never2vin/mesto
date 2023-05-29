export default class Card {
  constructor({data, currentUserId, handleCardClick, handleTrashIconClick, handleLikeIconClick}, templateSelector) {
    this._data = data;
    this._currentUserId = currentUserId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashIconClick = handleTrashIconClick;
    this._handleLikeIconClick = handleLikeIconClick;
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
    this._imageElement.addEventListener('click', () => this._handleCardClick(this._data));
    this._likeIconElement.addEventListener('click', () => {
      this._handleLikeIconClick(this._data._id, this._likeIconElement.classList.contains('element__like-icon_active'));
    });
  }

  _toggleLikeIconActivity() {
    this._likeIconElement.classList.toggle('element__like-icon_active');
  }

  getId() {
    return this._data._id;
  }

  toggleLike(Count) {
    this._toggleLikeIconActivity();
    this._likeCountElement.textContent = Count;
  }

  removeCardElement() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    this._imageElement = this._cardElement.querySelector('.element__image');

    this._imageElement.src = this._data.link;
    this._imageElement.alt = this._data.name;

    this._cardElement.querySelector('.element__title').textContent = this._data.name;

    this._likeIconElement = this._cardElement.querySelector('.element__like-icon');
    this._likeCountElement = this._cardElement.querySelector('.element__like-count');

    if (this._data.likes.length > 0) {
      if (this._data.likes.some(user => user._id === this._currentUserId)) {
        this._toggleLikeIconActivity();
      }

      this._likeCountElement.textContent = this._data.likes.length;
    }

    this._trashIconElement = this._cardElement.querySelector('.element__trash-icon');

    if (this._data.owner._id === this._currentUserId) {
      this._trashIconElement.classList.add('element__trash-icon_visible');
      this._trashIconElement.addEventListener('click', this._handleTrashIconClick);
    }

    this._setEventListeners();

    return this._cardElement;
  }
}
