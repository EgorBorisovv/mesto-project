let userID;
let cardId;
const avatar = document.querySelector('.profile__avatar');
const popupProfileOpenButton = document.querySelector('.profile__button_edit');
const popupProfile = document.querySelector('#profile');
const iconProfileClose = document.querySelector('#close_profile');
const popupCards = document.querySelector('#cards');
const cardsButtonPlus = document.querySelector('.profile__button_plus');
const iconCardsClose = document.querySelector('#close_cards');
const iconAvatarClose = document.querySelector('#close_avatar');
const formProfile = document.querySelector('form[name="form"]');
const formProfileNameInput = document.querySelector('input[name="profile"]');
const hobby = document.querySelector('input[name="hobby"]');
const profileSave = document.querySelector('#save-profile');
const profilePopup = document.querySelector('#profile');
const inputName = document.querySelector('input[name = "name"]');
const imageInput = document.querySelector('input[name= "image"]');
const popupImage = document.querySelector('#image');
const cardsForm = document.querySelector('form[name="cards"]');
const avatarPopupButton = document.querySelector('.profile__avatar')
const cardSave = document.querySelector('#save-card');
const elements = document.querySelector('.elements');
const profileName = document.querySelector('.profile__name');
const profileDiscription = document.querySelector('.profile__description');
const profileOverlay = document.querySelector('#profile__overlay');
const cardsOverlay = document.querySelector('#cards__overlay');
const avatarOverlay = document.querySelector('#avatar__overlay');
const imageOverlay = document.querySelector('#image__overlay');
const popupAvatar = document.querySelector('.popup_avatar')
const inputListCard = Array.from(cardsForm.querySelectorAll('.popup__input'));
const avatarSave = document.querySelector('form[name="avatar-form"]')
const avatarInput = document.querySelector('.popup__input_avatar');

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
  imageOverlay,
  avatarPopupButton,
  avatarInput,avatar,popupAvatar,avatarSave,userID,cardId};

  import {getApiProfile, getCards} from './components/api.js'
  import {openPopup,closePopup,submitProfileForm,submitCardsForm,submitAvatarForm} from './components/modal.js'
  import {enableValidation,setEventListeners,toggleButtonState} from './components/validate.js'
  import {createCard,renderCard } from './components/card.js';
const buttonActive = new URL('./image/black_like.svg',import.meta.url);
const button = new URL('./image/like.svg',import.meta.url);
const elementDelite = new URL('./image/Trash.svg',import.meta.url);
const closeIcon = new URL('./image/Close_Icon.svg',import.meta.url);
const buttonEdit = new URL('./image/icon__edit.svg',import.meta.url);
import './styles/index.css';
import './components/card.js';
import './components/modal.js';
import './components/validate.js';

const settings = {
  formSelector:'.popup__form', 
  inputSelector:'.popup__input', 
  errorClass: document.querySelector('popup__input__label'), 
  inputErrorActive:'popup__input_error_active', 
  buttonError: 'popup__save-button_error',
  errorInput:'popup__input_error',
  inputElement:document.querySelector('.popup__input'),
  buttonElement:document.querySelector('.popup__save-button')
}
enableValidation(settings)

//открытие поп-апа аватара
avatarPopupButton.addEventListener('click',function(){
  openPopup(popupAvatar);
})
//Открытие поп апа профиля
popupProfileOpenButton.addEventListener('click',function(){
  openPopup(popupProfile);
  formProfileNameInput.value = profileName.textContent ;
  hobby.value = profileDiscription.textContent ;
});
//Открытие поп апа карточки
cardsButtonPlus.addEventListener('click',function(){
  openPopup(popupCards);
  document.querySelector('.popup__save-button_cards').classList.add(settingsCard.buttonError);
});

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
//Закрытие кликом на оверлэй аватар
avatarOverlay.addEventListener('click',function(){
  closePopup(popupAvatar)
});



// render();

cardsForm.addEventListener('submit',submitCardsForm)
formProfile.addEventListener('submit',submitProfileForm)
avatarSave.addEventListener('submit',submitAvatarForm)


iconCardsClose.addEventListener('click',function(){
  closePopup(popupCards)
})
iconAvatarClose.addEventListener('click',function(){
  closePopup(popupAvatar)
})
//Данные профиля api
Promise.all([getApiProfile(),getCards()])
.then(([userData,cards]) =>{
    const contentProfile = userData;
    userID = userData._id;
    profileName.textContent = contentProfile.name;
    avatar.src = contentProfile.avatar;
    profileDiscription.textContent = contentProfile.about;
    const contentCards  = cards;

    const placeInfo = contentCards.map(function (item) {
      return {
          name: item.name,
          link: item.link,
          likes: item.likes,
          id:item._id,
          owner:item.owner._id,
      };
      });
      cardId =placeInfo[0].id
      console.log(cardId)
      //закрытие картинок
      
      function render() {
      placeInfo.forEach(card =>{
          const basicCard = createCard(card);
          renderCard(basicCard, elements);
      });
      }
      render()
}).catch(err =>{
  console.log(err)
})
