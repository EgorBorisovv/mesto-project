
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
  avatarInput
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
  const newCard = createCard({name:cardName,link:cardLink,likes:'0'});  
  
  renderCard(newCard, elements);
  evt.target.reset();

  fetch('https://nomoreparties.co/v1/plus-cohort-23/cards', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: '005699ab-4782-4879-a334-2468c75341c4'
  },
  body: JSON.stringify({
    "name": cardName,
    "link": cardLink
  })
})
closePopup(popupCards)
  };
//Редактирование профиля

function submitAvatarForm(evt){
  evt.preventDefault();
  avatarPopupButton.src=avatarInput.value
  avatarInput.value=avatarPopupButton.src  
  fetch('https://nomoreparties.co/v1/plus-cohort-23/users/me/avatar', {
method: 'PATCH',
headers: {
  authorization: '005699ab-4782-4879-a334-2468c75341c4',
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  avatar: avatarPopupButton.src 
})
});
  closePopup(profilePopup)
}



function submitProfileForm(evt){
    evt.preventDefault();
    profileName.textContent = formProfileNameInput.value;
    profileDiscription.textContent = hobby.value;
    fetch('https://nomoreparties.co/v1/plus-cohort-23/users/me', {
  method: 'PATCH',
  headers: {
    authorization: '005699ab-4782-4879-a334-2468c75341c4',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: profileName.textContent,
    about: profileDiscription.textContent
  })
}); 
    closePopup(profilePopup)
    };
export {openPopup,closePopup,submitProfileForm,submitCardsForm,submitAvatarForm}