console.log('Hello World!');

const profileElement = document.querySelector('.profile');
const profileEditButtonElement = profileElement.querySelector('.profile__edit-button');
const profileNameElement = profileElement.querySelector('.profile__name');
const profileJobElement = profileElement.querySelector('.profile__job');

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');

const formElement = popupElement.querySelector('.popup__form');
const formNameInputElement = formElement.querySelector('input[name="name"]');
const formJobInputElement = formElement.querySelector('input[name="about"]');

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
