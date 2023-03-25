const config = {
  'profile__edit-button': '.popup_type_edit',
  'profile__add-button': '.popup_type_add',
  'element__image': '.popup_type_image'
}

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

  imageElement.addEventListener('click', openPopup);

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
      renderElement({
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
