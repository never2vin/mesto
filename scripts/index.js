const profileElement = document.querySelector('.profile');
const profileEditButtonElement = profileElement.querySelector('.profile__edit-button');
const profileAddButtonElement = profileElement.querySelector('.profile__add-button');
const profileNameElement = profileElement.querySelector('.profile__name');
const profileJobElement = profileElement.querySelector('.profile__job');

const profilePopupElement = document.querySelector('.popup_type_edit');
const formEditProfileElement = profilePopupElement.querySelector('.popup__form');
const buttonCloseProfilePopupElement = profilePopupElement.querySelector('.popup__close-icon');

const cardPopupElement = document.querySelector('.popup_type_add');
const formAddCardElement = cardPopupElement.querySelector('.popup__form');
const buttonCloseCardPopupElement = cardPopupElement.querySelector('.popup__close-icon');

const imagePopupElement = document.querySelector('.popup_type_image');
const popupImageElement = imagePopupElement.querySelector('.popup__image');
const popupCaptionElement = imagePopupElement.querySelector('.popup__caption');
const buttonCloseImagePopupElement = imagePopupElement.querySelector('.popup__close-icon');

const listElements = document.querySelector('.elements');
const templateElement = document.getElementById('element-template').content;

initialCards.forEach(renderCard);

function renderCard (data) {
  listElements.append(createCard(data));
}

function createCard (data) {
  const htmlElement = templateElement.cloneNode(true);

  const imageElement = htmlElement.querySelector('.element__image');
  imageElement.src = data.link;
  imageElement.alt = data.name;

  imageElement.addEventListener('click', handleImagePopup);

  htmlElement.querySelector('.element__trash-icon').addEventListener('click', removeCardElement);
  htmlElement.querySelector('.element__like-icon').addEventListener('click', toggleLikeIconActivity);

  htmlElement.querySelector('.element__title').textContent = data.name;

  return htmlElement;
}

function removeCardElement (event) {
  event.target.closest('.element').remove();
}

function toggleLikeIconActivity (event) {
  event.target.classList.toggle('element__like-icon_active');
}

function handleImagePopup (event) {
  const target = event.target;

  popupImageElement.src = target.src;
  popupImageElement.alt = target.alt;
  popupCaptionElement.textContent = target.alt;

  setPopupEventListeners(imagePopupElement);
  openPopup(imagePopupElement);
}

function handleFormEditProfileSubmit (event) {
  event.preventDefault();

  profileNameElement.textContent = formEditProfileElement.name.value;
  profileJobElement.textContent = formEditProfileElement.about.value;

  closePopup(profilePopupElement);
}

function handleFormAddCardSubmit (event) {
  event.preventDefault();

  listElements.prepend(createCard({
    name: formAddCardElement.name.value,
    link: formAddCardElement.link.value
  }));

  formAddCardElement.reset();

  event.submitter.classList.add('popup__submit_disabled');
  event.submitter.disabled = true;

  closePopup(cardPopupElement);
}

function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
}

function closePopupByClickOverlay (event, popupElement) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(popupElement);
}

function setPopupEventListeners (popupElement) {
  popupElement.addEventListener('click', event => closePopupByClickOverlay(event, popupElement));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closePopup(popupElement);
    }
  }, {once: true});
}

profileEditButtonElement.addEventListener('click', () => {
  formEditProfileElement.name.value = profileNameElement.innerText;
  formEditProfileElement.about.value = profileJobElement.innerText;

  setPopupEventListeners(profilePopupElement);
  openPopup(profilePopupElement);
});

profileAddButtonElement.addEventListener('click', () => {
  formAddCardElement.reset();

  setPopupEventListeners(cardPopupElement);
  openPopup(cardPopupElement);
});

formEditProfileElement.addEventListener('submit', handleFormEditProfileSubmit);
formAddCardElement.addEventListener('submit', handleFormAddCardSubmit);

buttonCloseProfilePopupElement.addEventListener('click', () => {closePopup(profilePopupElement)});
buttonCloseCardPopupElement.addEventListener('click', () => closePopup(cardPopupElement));
buttonCloseImagePopupElement.addEventListener('click', () => closePopup(imagePopupElement));
