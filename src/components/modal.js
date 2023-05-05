
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
  avatarInput,popupAvatar
} from '../index.js';
import{closeByEscape} from '../index.js'
import { createApiCard, patchAvatar, patchProfile } from './api.js';
import {createCard} from './card.js'


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
  const newCard = createCard({name:cardName,link:cardLink,likes:'0'});  
  renderCard(newCard, elements);
  evt.target.reset();
  createApiCard(cardName,cardLink)
  closePopup(popupCards)
  };
//Редактирование профиля

function submitAvatarForm(evt){
  evt.preventDefault();
  avatarPopupButton.src=avatarInput.value
  avatarInput.value=avatarPopupButton.src  
  patchAvatar(avatarPopupButton)
  closePopup(popupAvatar)
}



function submitProfileForm(evt){
    evt.preventDefault();
    profileName.textContent = formProfileNameInput.value;
    profileDiscription.textContent = hobby.value;
    patchProfile(profileName,profileDiscription)
    closePopup(profilePopup)
    };
export {openPopup,closePopup,submitProfileForm,submitCardsForm,submitAvatarForm}