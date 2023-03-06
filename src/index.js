const popupProfileOpenButton = document.querySelector('.profile__button_edit');
const popupProfile = document.querySelector('#profile');
const iconProfileClose = document.querySelector('#close_profile');
const popupCards = document.querySelector('#cards');
const cardsButtonPlus = document.querySelector('.profile__button_plus');
const iconCardsClose = document.querySelector('#close_cards');
const formProfile = document.querySelector('form[name="form"]');
const formProfileNameInput = document.querySelector('input[name="profile"]');
const hobby = document.querySelector('input[name="hobby"]');
const profileSave = document.querySelector('#save-profile');
const profilePopup = document.querySelector('#profile');
const inputName = document.querySelector('input[name = "name"]');
const imageInput = document.querySelector('input[name= "image"]');
const popupImage = document.querySelector('#image');
const cardsForm = document.querySelector('form[name="cards"]');
const cardSave = document.querySelector('#save-card');
const elements = document.querySelector('.elements');
const profileName = document.querySelector('.profile__name');
const profileDiscription = document.querySelector('.profile__description');
const profileOverlay = document.querySelector('#profile__overlay');
const cardsOverlay = document.querySelector('#cards__overlay');
const imageOverlay = document.querySelector('#image__overlay');


const inputListCard = Array.from(cardsForm.querySelectorAll('.popup__input'));



export {popupProfileOpenButton,
  popupProfile,
  iconProfileClose,
  popupCards,
  cardsButtonPlus,
  iconCardsClose,
  formProfile,
  formProfileNameInput,
  hobby,
  profileSave,
  profilePopup,
  inputName,
  imageInput,
  popupImage,
  cardsForm,
  cardSave,
  elements,
  profileName,
  profileDiscription,
  profileOverlay,
  cardsOverlay,
  imageOverlay};

  import {render} from './components/card.js'
  import {openPopup,closePopup,submitProfileForm,submitCardsForm} from './components/modal.js'
  import {enableValidation,toggleButtonState} from './components/validate.js'

const buttonActive = new URL('./image/black_like.svg',import.meta.url);
const button = new URL('./image/like.svg',import.meta.url);
const elementDelite = new URL('./image/Trash.svg',import.meta.url);
const closeIcon = new URL('./image/Close_Icon.svg',import.meta.url);
const buttonEdit = new URL('./image/icon__edit.svg',import.meta.url);

import './styles/index.css';
import './components/card.js';
import './components/modal.js';
import './components/validate.js';

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_error',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input__label',
  inputError: 'popup__input_error_active',
  buttonError: 'popup__save-button_error'
}); 

//Открытие поп апа профиля
popupProfileOpenButton.addEventListener('click',function(){
  openPopup(popupProfile);
  formProfileNameInput.value = profileName.textContent ;
  hobby.value = profileDiscription.textContent ;
});
//Открытие поп апа карточки
cardsButtonPlus.addEventListener('click',function(){
  openPopup(popupCards);
  toggleButtonState(inputListCard,cardSave)
});
//Валидация карточки
cardsForm.addEventListener('input',function(){
  toggleButtonState(inputListCard,cardSave)
})

iconProfileClose.addEventListener('click',function(){
  closePopup(popupProfile)
});

//Закрытие кликом на оверлэй карточки
cardsOverlay.addEventListener('click',function(){
  closePopup(popupCards)
});
//Закрытие кликом на оверлэй профиль
profileOverlay.addEventListener('click',function(){
  closePopup(popupProfile)
});

//Закрытие кликом на оверлэй картинки
imageOverlay.addEventListener('click',function(){
  closePopup(popupImage)
});

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened') 
    closePopup(openedPopup)
  }
}

render();

cardsForm.addEventListener('submit', submitCardsForm)
formProfile.addEventListener('submit',submitProfileForm)

iconCardsClose.addEventListener('click',function(){
  closePopup(popupCards)
})
export {closeByEscape}