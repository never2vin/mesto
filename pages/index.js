import { initialCards } from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}

const profileElement = document.querySelector('.profile');
const profileEditButtonElement = profileElement.querySelector('.profile__edit-button');
const profileAddButtonElement = profileElement.querySelector('.profile__add-button');
const profileNameElement = profileElement.querySelector('.profile__name');
const profileJobElement = profileElement.querySelector('.profile__job');

const profilePopupElement = document.querySelector('.popup_type_edit');
const formEditProfileElement = profilePopupElement.querySelector('.popup__form');

const cardPopupElement = document.querySelector('.popup_type_add');
const formAddCardElement = cardPopupElement.querySelector('.popup__form');

const imagePopupElement = document.querySelector('.popup_type_image');
const popupImageElement = imagePopupElement.querySelector('.popup__image');
const popupCaptionElement = imagePopupElement.querySelector('.popup__caption');

const buttonCloseList = document.querySelectorAll('.popup__close-icon');

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCardElement(item);
    cardList.addItem(cardElement);
  }
}, '.elements');

cardList.renderItems();

const profileFormValidator = new FormValidator(validationConfig, formEditProfileElement);
const cardFormValidator = new FormValidator(validationConfig, formAddCardElement);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

function createCardElement(data) {
  const card = new Card(data, '#element-template', openImagePopup);
  return card.generateCard()
}

function openImagePopup (data) {
  popupImageElement.src = data.link;
  popupImageElement.alt = data.name;
  popupCaptionElement.textContent = data.name;

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

  const cardElement = createCardElement({
    name: formAddCardElement.name.value,
    link: formAddCardElement.link.value
  });

  cardList.addItem(cardElement);

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
  profileFormValidator.resetValidation();

  openPopup(profilePopupElement);
});

profileAddButtonElement.addEventListener('click', () => {
  formAddCardElement.reset();
  cardFormValidator.resetValidation();

  openPopup(cardPopupElement);
});

formEditProfileElement.addEventListener('submit', handleFormEditProfileSubmit);
formAddCardElement.addEventListener('submit', handleFormAddCardSubmit);

buttonCloseList.forEach(button => {
  const popup = button.closest('.popup');
  popup.addEventListener('mousedown', (event) => closePopupByClickOverlay(event, popup));
  button.addEventListener('click', () => closePopup(popup));
});
