import { initialCards } from "./cards.js";
import Card from "./Card.js";
import Popup from "./Popup.js";

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

const listElements = document.querySelector('.elements');
const imagePopup = new Popup('.popup_type_image');

initialCards.forEach(data => {
  const card = new Card(data, '#element-template', imagePopup);
  const cardElement = card.generateCard();
  listElements.append(cardElement);
});

function handleFormEditProfileSubmit (event) {
  event.preventDefault();

  profileNameElement.textContent = formEditProfileElement.name.value;
  profileJobElement.textContent = formEditProfileElement.about.value;

  closePopup(profilePopupElement);
}

function handleFormAddCardSubmit (event) {
  event.preventDefault();

  const data = {
    name: formAddCardElement.name.value,
    link: formAddCardElement.link.value
  };

  const card = new Card(data, '#element-template', imagePopup);
  const cardElement = card.generateCard();
  listElements.prepend(cardElement);

  formAddCardElement.reset();

  event.submitter.classList.add('popup__submit_disabled');
  event.submitter.disabled = true;

  closePopup(cardPopupElement);
}

function openPopup (popupElement) {
  document.addEventListener('keydown', closeByEscape);

  popupElement.classList.add('popup_opened');
}

function closePopup (popupElement) {
  document.removeEventListener('keydown', closeByEscape);

  popupElement.classList.remove('popup_opened');
}

function closeByEscape(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');

    closePopup(openedPopup);
  }
}

function closePopupByClickOverlay (event, popupElement) {
  if (event.target === event.currentTarget) {
    closePopup(popupElement);
  }
}

profileEditButtonElement.addEventListener('click', () => {
  formEditProfileElement.name.value = profileNameElement.innerText;
  formEditProfileElement.about.value = profileJobElement.innerText;

  openPopup(profilePopupElement);
});

profileAddButtonElement.addEventListener('click', () => {
  formAddCardElement.reset();

  openPopup(cardPopupElement);
});

formEditProfileElement.addEventListener('submit', handleFormEditProfileSubmit);
formAddCardElement.addEventListener('submit', handleFormAddCardSubmit);

buttonCloseProfilePopupElement.addEventListener('click', () => {closePopup(profilePopupElement)});
buttonCloseCardPopupElement.addEventListener('click', () => closePopup(cardPopupElement));

profilePopupElement.addEventListener('click', event => closePopupByClickOverlay(event, profilePopupElement));
cardPopupElement.addEventListener('click', event => closePopupByClickOverlay(event, cardPopupElement));
