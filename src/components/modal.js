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
import{closeByEscape} from '../index.js'
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
  const newCard = createCard({name:cardName,link:cardLink});  
  renderCard(newCard, elements);
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