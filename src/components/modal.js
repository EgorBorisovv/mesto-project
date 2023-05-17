
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
  avatarPopupButton,
  avatarInput,popupAvatar,formProfile,closeByEscape,avatarSave,cardsForm,userID
} from '../index.js';

import { createApiCard, patchAvatar, patchProfile,getApiProfile} from './api.js';
import {createCard,loadApiCard} from './card.js'
const profileSave = document.querySelector('.popup__save-button_profile')
const cardsSave = document.querySelector('.popup__save-button_cards')
const avatarSaveButton = document.querySelector('.popup__save-button_avatar')
//Открытие  поп-апа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

//Закрытие поп-апа профиль
function renderCard(card,container) {
    container.prepend(card);
  }


export{renderCard}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};




function submitCardsForm(evt){
  evt.preventDefault();
  const cardName = inputName.value ;
  const cardLink = imageInput.value ;
  const newCard = createCard({name:cardName,link:cardLink,likes:0,id:userID}); 
  renderCard(newCard, elements);
  evt.target.reset();
  createApiCard(cardName,cardLink,cardsSave)
  closePopup(popupCards)
  };

//Редактирование профиля

function submitAvatarForm(evt){
  evt.preventDefault();
  avatarPopupButton.src=avatarInput.value
  avatarInput.value=avatarPopupButton.src  
  patchAvatar(avatarPopupButton,avatarSaveButton)
  closePopup(popupAvatar)
}



function submitProfileForm(evt){
    evt.preventDefault();
    profileName.textContent = formProfileNameInput.value;
    profileDiscription.textContent = hobby.value;
    patchProfile(profileName,profileDiscription,profileSave)
    closePopup(profilePopup)
    };
export {openPopup,closePopup,submitProfileForm,submitCardsForm,submitAvatarForm}