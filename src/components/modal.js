import {
  popupCards,
  formProfileNameInput,
  hobby,
  profilePopup,
  inputName,
  imageInput,
  elements,
  profileName,
  profileDiscription,
} from '../index.js';

import {createCard,renderCard} from './card.js'
//Открытие  поп-апа
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

//Закрытие поп-апа профиль

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};
function submitCardsForm(evt){
  evt.preventDefault();
  const newCard = createCard({inputName,imageInput});
  renderCard(newCard, elements);
  document.querySelector('.element__description').textContent = inputName.value;
  document.querySelector('.element__photo').src = imageInput.value;
  document.querySelector('.element__photo').alt = inputName.value;
  evt.target.reset();
  closePopup(popupCards)
  };
//Редактирование профиля
function submitProfileForm(evt){
    evt.preventDefault();
    profileName.textContent = formProfileNameInput.value;
    profileDiscription.textContent = hobby.value;
    closePopup(profilePopup)
    };
export {openPopup,closePopup,submitProfileForm,submitCardsForm}