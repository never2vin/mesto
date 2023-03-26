const profileElement = document.querySelector('.profile');
const profileEditButtonElement = profileElement.querySelector('.profile__edit-button');
const profileAddButtonElement = profileElement.querySelector('.profile__add-button');
const profileNameElement = profileElement.querySelector('.profile__name');
const profileJobElement = profileElement.querySelector('.profile__job');

const profilePopupElement = document.querySelector('.popup_type_edit');
const formEditProfileElement = profilePopupElement.querySelector('.popup__form');
const buttonCloseProfilePopupElement = profilePopupElement.querySelector('.popup__close-icon')

const cardPopupElement = document.querySelector('.popup_type_add');
const formAddCardElement = cardPopupElement.querySelector('.popup__form');
const buttonCloseCardPopupElement = cardPopupElement.querySelector('.popup__close-icon')

const imagePopupElement = document.querySelector('.popup_type_image');
const popupImageElement = imagePopupElement.querySelector('.popup__image');
const popupCaptionElement = imagePopupElement.querySelector('.popup__caption');
const buttonCloseImagePopupElement = imagePopupElement.querySelector('.popup__close-icon')

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

  closePopup(cardPopupElement);
}

function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
}

let currentPopupElement = null;
let currentFormElement = null;

function openPopup (event) {
  const target = event.target;
  let selector = null;

  for (const value of target.classList.values()) {
    if (Boolean(value in config)) {
      selector = config[value];
    }
  }

  currentPopupElement = document.querySelector(selector);

  if (selector === '.popup_type_image') {
    const imageElement = currentPopupElement.querySelector('.popup__image');
    imageElement.src = target.src;
    imageElement.alt = target.alt;

    currentPopupElement.querySelector('.popup__caption').textContent = target.alt;
  } else {
    currentFormElement = currentPopupElement.querySelector('.popup__form');

    if (selector === '.popup-edit') {
      currentFormElement.name.value = profileNameElement.innerText;
      currentFormElement.about.value = profileJobElement.innerText;
    }

    currentFormElement.addEventListener('submit', handleFormSubmit, {once: true});
  }

  currentPopupElement.querySelector('.popup__close-icon').addEventListener('click', closePopup, {once: true});
  currentPopupElement.addEventListener('click', closePopupByClickOverlay, {once: true});

  currentPopupElement.classList.add('popup_faded-in');
}

function handleFormSubmit (event) {
  event.preventDefault();

  switch (currentFormElement.attributes.name.value) {
    case 'edit-profile':
      profileNameElement.textContent = currentFormElement.name.value;
      profileJobElement.textContent = currentFormElement.about.value;
      break;
    case 'add-card':
      createCard({
        name: currentFormElement.name.value,
        link: currentFormElement.link.value
      }, false);
      currentFormElement.reset();
  }

  closePopup();
}

function closePopupByClickOverlay (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
}

function closePopup () {
  currentPopupElement.classList.add('popup_faded-out');
}

profileEditButtonElement.addEventListener('click', openPopup);
profileAddButtonElement.addEventListener('click', openPopup);

document.addEventListener('animationend', function (event) {
  if (event.animationName === 'fade-out') {
    event.target.classList.remove('popup_faded-in', 'popup_faded-out');
  }
});
