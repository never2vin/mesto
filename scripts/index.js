const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elementTemplate = document.getElementById('element-template').content;
const elementsList = document.querySelector('.elements');

initialCards.forEach(renderElement);

function renderElement (item) {
  const htmlElement = elementTemplate.cloneNode(true);

  const elementImage = htmlElement.querySelector('.element__image');
  elementImage.src = item.link;
  elementImage.alt = item.name;

  htmlElement.querySelector('.element__title').textContent = item.name;

  elementsList.append(htmlElement);
}

const profileElement = document.querySelector('.profile');
const profileEditButtonElement = profileElement.querySelector('.profile__edit-button');
const profileNameElement = profileElement.querySelector('.profile__name');
const profileJobElement = profileElement.querySelector('.profile__job');

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');

const formElement = popupElement.querySelector('.popup__form');
const formNameInputElement = formElement.querySelector('.popup__input_type_name');
const formJobInputElement = formElement.querySelector('.popup__input_type_job');

const openPopup = function () {
  const nameString = profileNameElement.innerText;
  const jobString = profileJobElement.innerText;

  formNameInputElement.value = nameString;
  formJobInputElement.value = jobString;

  popupElement.classList.add('popup_opened');
}

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

const closePopupByClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
}

function handleFormSubmit (event) {
  event.preventDefault();

  const nameString = formNameInputElement.value;
  const jobString = formJobInputElement.value;

  profileNameElement.textContent = nameString;
  profileJobElement.textContent = jobString;

  closePopup();
}

profileEditButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOverlay);
formElement.addEventListener('submit', handleFormSubmit);
