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
  cardsForm,
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
  if(inputName.value != 0){
  card.querySelector('.element__description').textContent = inputName.value;
  card.querySelector('.element__photo').src = imageInput.value;
  card.querySelector('.element__photo').alt = imageInput.value; 
  container.prepend(card);
  }
  else{
    container.prepend(card);
  }
}

export{renderCard}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};
function submitCardsForm(evt){
  evt.preventDefault();
  const newCard = createCard({inputName,imageInput});
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