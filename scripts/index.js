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

const listElements = document.querySelector('.elements');
const templateElement = document.getElementById('element-template').content;

initialCards.forEach(renderElement);

function renderElement (item, append = true) {
  const htmlElement = templateElement.cloneNode(true);

  const imageElement = htmlElement.querySelector('.element__image');
  imageElement.src = item.link;
  imageElement.alt = item.name;

  htmlElement.querySelector('.element__trash-icon').addEventListener('click', removeCardElement);
  htmlElement.querySelector('.element__like-icon').addEventListener('click', toggleLikeIconActivity);

  htmlElement.querySelector('.element__title').textContent = item.name;

  if (append) {
    listElements.append(htmlElement);
  } else {
    listElements.prepend(htmlElement);
  }
}

function removeCardElement (event) {
  event.target.closest('.element').remove();
}

function toggleLikeIconActivity (event) {
  event.target.classList.toggle('element__like-icon_active');
}

const profileElement = document.querySelector('.profile');
const profileEditButtonElement = profileElement.querySelector('.profile__edit-button');
const profileAddButtonElement = profileElement.querySelector('.profile__add-button');
const profileNameElement = profileElement.querySelector('.profile__name');
const profileJobElement = profileElement.querySelector('.profile__job');

let currentPopupElement = null;
let currentFormElement = null;

const openPopup = function (popupId) {
  currentPopupElement = document.getElementById(popupId);
  currentFormElement = currentPopupElement.querySelector('.popup__form');

  if (popupId === 'popup-edit') {
    currentFormElement.name.value = profileNameElement.innerText;
    currentFormElement.about.value = profileJobElement.innerText;
  }

  currentFormElement.addEventListener('submit', handleFormSubmit);

  currentPopupElement.querySelector('.popup__close').addEventListener('click', closePopup);
  currentPopupElement.addEventListener('click', closePopupByClickOverlay);

  currentPopupElement.classList.add('popup_opened');
}

function handleFormSubmit (event) {
  event.preventDefault();

  switch (currentFormElement.attributes.name.value) {
    case 'edit-profile':
      profileNameElement.textContent = currentFormElement.name.value;
      profileJobElement.textContent = currentFormElement.about.value;
      break;
    case 'add-card':
      renderElement({
        name: currentFormElement.name.value,
        link: currentFormElement.link.value
      }, false);
      currentFormElement.reset();
      break;
  }

  // if (formElement.attributes.name.value === 'edit-profile') {
  //   profileNameElement.textContent = currentFormElement.name.value;
  //   profileJobElement.textContent = currentFormElement.about.value;
  // } else if (formElement.attributes.name.value === 'add-card') {
  //   const card = {
  //     name: currentFormElement.name.value,
  //     link: currentFormElement.link.value
  //   }

  //   renderElements(card, false);
  // }

  currentFormElement.removeEventListener('submit', handleFormSubmit);
  closePopup();
}

const closePopup = function () {
  currentPopupElement.classList.remove('popup_opened');
}

const closePopupByClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
}

profileEditButtonElement.addEventListener('click', () => openPopup('popup-edit'));
profileAddButtonElement.addEventListener('click', () => openPopup('popup-add'));
