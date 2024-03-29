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
  userAboutSelector,
  spinnerSelector,
  loadingText
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

const spinnerElement = document.querySelector(spinnerSelector);

const popupImage = new PopupWithImage(imagePopupSelector);
popupImage.setEventListeners();

const popupConfirm = new PopupWithConfirmation(confirmPopupSelector);
popupConfirm.setEventListeners();

const popupEditProfile = new PopupWithForm({
  popupSelector: profilePopupSelector,
  handleFormSubmit: (data) => {// name: ..., about: ...
    popupEditProfile.setSubmitButtonText(loadingText);

    api.updateUserInfo(data).then(res => {
      userInfo.setUserInfo(res);

      popupEditProfile.close();

      // throw Error( 'Something is wrong...' );
    })
      .catch((err) => console.error(err, ', при редактировании профиля пользователя.'))
      .finally(() => popupEditProfile.setSubmitButtonText());
  }
});

popupEditProfile.setEventListeners();

const popupUpdateAvatar = new PopupWithForm({
  popupSelector: avatarPopupSelector,
  handleFormSubmit: (data) => {// link: ...
    popupUpdateAvatar.setSubmitButtonText(loadingText);

    api.updateUserAvatar(data).then(res => {
      userInfo.setUserInfo(res);

      popupUpdateAvatar.close()
    })
      .catch((err) => console.error(err, ', при обновлении аватара пользователя.'))
      .finally(() => popupEditProfile.setSubmitButtonText());
  }
});

popupUpdateAvatar.setEventListeners();

const popupAddCard = new PopupWithForm({
  popupSelector: cardPopupSelector,
  handleFormSubmit: (data) => { // name: ..., link: ...
    popupAddCard.setSubmitButtonText(loadingText);

    api.addCard(data).then(res => {
      const cardElement = createCardElement(res);
      cardList.addItem(cardElement);

      popupAddCard.close()
    })
      .catch((err) => console.error(err, ', при добавлении новой карточки.'))
      .finally(() => popupEditProfile.setSubmitButtonText());
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
          })
          .catch((err) => console.error(err, ', при удалении карточки.'))
        }
      });
    },
    handleLikeIconClick: (id, isLiked) => {
      const method = isLiked
        ? 'DELETE'
        : 'PUT';

      api.handleLikeCard(id, method).then(data => {// ..., likes: ...
        card.toggleLike(data.likes.length);
      })
      .catch((err) => console.error(err, ', при постановке и снятии лайка карточки.'));
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

function renderLoading(isLoading) {
  if (isLoading) {
    spinnerElement.classList.add('spinner_visible');
    profileElement.classList.add('profile_hidden');
  }
  else {
    spinnerElement.classList.remove('spinner_visible');
    profileElement.classList.remove('profile_hidden');
  }
}

renderLoading(true);

api.getAllInitialData().then(data => {// [user, cards]
  const [userData, cards] = data;

  userInfo.setUserInfo(userData);
  cardList.renderItems(cards.reverse());
})
  .catch((err) => console.error(err, ', при получении информации о пользователе и карточках.'))
  .finally(() => renderLoading(false));

const avatarFormValidator = new FormValidator(validationConfig, formUpdateAvatarElement);
const profileFormValidator = new FormValidator(validationConfig, formEditProfileElement);
const cardFormValidator = new FormValidator(validationConfig, formAddCardElement);

avatarFormValidator.enableValidation();
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

profileAvatarElement.addEventListener('click', () => {
  formUpdateAvatarElement.reset();
  avatarFormValidator.resetValidation();

  popupUpdateAvatar.open();
});

profileEditButtonElement.addEventListener('click', () => {
  const {name, about} = userInfo.getUserInfo();
  formEditProfileElement.name.value = name;
  formEditProfileElement.about.value = about;

  profileFormValidator.resetValidation();

  popupEditProfile.open();
});

profileAddButtonElement.addEventListener('click', () => {
  formAddCardElement.reset();
  cardFormValidator.resetValidation();

  popupAddCard.open();
});
