import "./index.css";

import {
  validationConfig,
  popupFormSelector,
  avatarPopupSelector,
  profilePopupSelector,
  cardPopupSelector,
  imagePopupSelector,
  confirmPopupSelector,
  cardListSelector,
  cardTemplateSelector,
  userAvatarSelector,
  userNameSelector,
  userAboutSelector
} from "../utils/constants.js";

import { api } from "../components/Api.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";

const profileElement = document.querySelector('.profile');
const profileAvatarElement = profileElement.querySelector('.profile__avatar');
const profileEditButtonElement = profileElement.querySelector('.profile__edit-button');
const profileAddButtonElement = profileElement.querySelector('.profile__add-button');

const formUpdateAvatarElement = document.querySelector(avatarPopupSelector).querySelector(popupFormSelector);
const formEditProfileElement = document.querySelector(profilePopupSelector).querySelector(popupFormSelector);
const formAddCardElement = document.querySelector(cardPopupSelector).querySelector(popupFormSelector);

const popupImage = new PopupWithImage(imagePopupSelector);
popupImage.setEventListeners();

const popupConfirm = new PopupWithConfirmation(confirmPopupSelector);
popupConfirm.setEventListeners();

const popupEditProfile = new PopupWithForm({
  popupSelector: profilePopupSelector,
  handleFormSubmit: (data) => {// name: ..., about: ...
    api.updateUserInfo(data).then(res => {
      userInfo.setUserInfo(res);

      popupEditProfile.close();
    });
  }
});

popupEditProfile.setEventListeners();

const popupUpdateAvatar = new PopupWithForm({
  popupSelector: avatarPopupSelector,
  handleFormSubmit: (data) => {// link: ссылка на картинку
    api.updateUserAvatar(data).then(res => {
      userInfo.setUserInfo(res);

      popupUpdateAvatar.close()
    });
  }
});

popupUpdateAvatar.setEventListeners();

const popupAddCard = new PopupWithForm({
  popupSelector: cardPopupSelector,
  handleFormSubmit: (data) => { // name: ..., link: ...
    api.addCard(data).then(res => {
      const cardElement = createCardElement(res);
      cardList.addItem(cardElement);

      popupAddCard.close()
    });
  }
});

popupAddCard.setEventListeners();

function createCardElement(cardData) {
  const card = new Card({
    data: cardData,
    currentUserId: userInfo.getId(),
    handleCardClick: (data) => {
      popupImage.open(data);
    },
    handleTrashIconClick: () => {
      popupConfirm.open({
        handleFormSubmit: () => {
          const id = card.getId();
          api.removeCard(id).then(res => {
            card.removeCardElement();
            popupConfirm.close();
          });
        }
      });
    },
    handleLikeIconClick: (id, isLiked) => {
      const method = isLiked
        ? 'DELETE'
        : 'PUT';

      api.handleLikeCard(id, method).then(data => {// ..., likes: ...
        card.toggleLike(data.likes.length);
      });
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

const userInfo = new UserInfo(userAvatarSelector, userNameSelector, userAboutSelector);

api.getAllInitialData().then(data => {// [user, cards]
  const [userData, cards] = data;

  userInfo.setUserInfo(userData);
  cardList.renderItems(cards.reverse());
});

const avatarFormValidator = new FormValidator(validationConfig, formUpdateAvatarElement);
const profileFormValidator = new FormValidator(validationConfig, formEditProfileElement);
const cardFormValidator = new FormValidator(validationConfig, formAddCardElement);

avatarFormValidator.enableValidation();
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

profileAvatarElement.addEventListener('click', () => {
  formUpdateAvatarElement.reset();
  avatarFormValidator.resetValidation();

  popupUpdateAvatar.open();;
});

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
