import { initialCards,
  validationConfig,
  popupSelector,
  popupFormSelector,
  profilePopupSelector,
  cardPopupSelector,
  imagePopupSelector,
  cardListSelector,
  cardTemplateSelector,
  userNameSelector,
  userAboutSelector
} from "../utils/constants.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const profileElement = document.querySelector('.profile');
const profileEditButtonElement = profileElement.querySelector('.profile__edit-button');
const profileAddButtonElement = profileElement.querySelector('.profile__add-button');

const popupList = document.querySelectorAll(popupSelector);

const formEditProfileElement = document.querySelector(profilePopupSelector).querySelector(popupFormSelector);
const formAddCardElement = document.querySelector(cardPopupSelector).querySelector(popupFormSelector);

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCardElement(item);
    cardList.addItem(cardElement);
  }
}, cardListSelector);

cardList.renderItems();

const userInfo = new UserInfo(userNameSelector, userAboutSelector);

const profileFormValidator = new FormValidator(validationConfig, formEditProfileElement);
const cardFormValidator = new FormValidator(validationConfig, formAddCardElement);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

function createCardElement(cardData) {
  const card = new Card({
    data: cardData,
    handleCardClick: (data) => {
      const popup = new PopupWithImage(data, imagePopupSelector);
      popup.setEventListeners();
      popup.open();
    }
  }, cardTemplateSelector);

  return card.generateCard()
}

const popupEditProfile = new PopupWithForm({
  popupSelector: profilePopupSelector,
  handleFormSubmit: (userData) => {
    userInfo.setUserInfo(userData);

    popupEditProfile.close();
  }
});

popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm({
  popupSelector: cardPopupSelector,
  handleFormSubmit: (data) => {
    const cardElement = createCardElement(data);
    cardList.addItem(cardElement);

    popupAddCard.close()
  }
});

popupAddCard.setEventListeners();

profileEditButtonElement.addEventListener('click', () => {
  const {name, about} = userInfo.getUserInfo();
  formEditProfileElement.name.value = name;
  formEditProfileElement.about.value = about;

  profileFormValidator.resetValidation();

  popupEditProfile.open();;
});

profileAddButtonElement.addEventListener('click', () => {
  formAddCardElement.reset();
  cardFormValidator.resetValidation();

  popupAddCard.open();
});

function closePopupByClickOverlay (event, popupElement) {
  if (event.target === event.currentTarget) {
    popupElement.classList.remove('popup_opened');
  }
}

popupList.forEach(popup => {
  popup.addEventListener('mousedown', (event) => closePopupByClickOverlay(event, popup));
});
