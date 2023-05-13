import { initialCards } from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

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

const popupList = document.querySelectorAll('.popup');

const profilePopupElement = document.querySelector('.popup_type_edit');
const formEditProfileElement = profilePopupElement.querySelector('.popup__form');

const cardPopupElement = document.querySelector('.popup_type_add');
const formAddCardElement = cardPopupElement.querySelector('.popup__form');

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

function createCardElement(cardData) {
  const card = new Card({
    data: cardData,
    handleCardClick: (data) => {
      const popup = new PopupWithImage(data, '.popup_type_image');
      popup.setEventListeners();
      popup.open();
    }
  }, '#element-template');

  return card.generateCard()
}

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: (userData) => {
    profileNameElement.textContent = userData.name;
    profileJobElement.textContent = userData.about;

    popupEditProfile.close();
  }
});

popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_type_add',
  handleFormSubmit: (data) => {
    const cardElement = createCardElement(data);
    cardList.addItem(cardElement);

    popupAddCard.close()
  }
});

popupAddCard.setEventListeners();

function closePopupByClickOverlay (event, popupElement) {
  if (event.target === event.currentTarget) {
    popupElement.classList.remove('popup_opened');
  }
}

profileEditButtonElement.addEventListener('click', () => {
  formEditProfileElement.name.value = profileNameElement.innerText;
  formEditProfileElement.about.value = profileJobElement.innerText;
  profileFormValidator.resetValidation();

  popupEditProfile.open();;
});

profileAddButtonElement.addEventListener('click', () => {
  formAddCardElement.reset();
  cardFormValidator.resetValidation();

  popupAddCard.open();
});

popupList.forEach(popup => {
  popup.addEventListener('mousedown', (event) => closePopupByClickOverlay(event, popup));
});
