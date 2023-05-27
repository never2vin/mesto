import "./index.css";

import { initialCards,
  validationConfig,
  popupFormSelector,
  profilePopupSelector,
  cardPopupSelector,
  imagePopupSelector,
  cardListSelector,
  cardTemplateSelector,
  userNameSelector,
  userAboutSelector
} from "../utils/constants.js";

import { api } from "../components/Api.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const profileElement = document.querySelector('.profile');
const profileEditButtonElement = profileElement.querySelector('.profile__edit-button');
const profileAddButtonElement = profileElement.querySelector('.profile__add-button');

const formEditProfileElement = document.querySelector(profilePopupSelector).querySelector(popupFormSelector);
const formAddCardElement = document.querySelector(cardPopupSelector).querySelector(popupFormSelector);

const popupImage = new PopupWithImage(imagePopupSelector);
popupImage.setEventListeners();

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

function createCardElement(cardData) {
  const card = new Card({
    data: cardData,
    handleCardClick: (data) => {
      popupImage.open(data);
    }
  }, cardTemplateSelector);

  return card.generateCard()
}

const cardList = new Section({
  renderer: (item) => {
    const cardElement = createCardElement(item);
    cardList.addItem(cardElement);
  }
}, cardListSelector);

const userInfo = new UserInfo(userNameSelector, userAboutSelector);

api.getUserInfo().then(data => {
  userInfo.setUserInfo(data);
});

api.getInitialCards().then(items => {
  cardList.renderItems(items);
});

const profileFormValidator = new FormValidator(validationConfig, formEditProfileElement);
const cardFormValidator = new FormValidator(validationConfig, formAddCardElement);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

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
