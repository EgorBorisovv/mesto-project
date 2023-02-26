//Дэфолтные значения карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинск',
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
    name: 'Холмогор',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
//Статичные переменные
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


//Открытие  поп-апа
function openPopup(popup) {
  popup.classList.add('popup_opened');
};
//Открытие поп апа профиля
popupProfileOpenButton.addEventListener('click',function(){
  openPopup(popupProfile);
  //Значения в инпутах
  formProfileNameInput.value = profileName.textContent ;
  hobby.value = profileDiscription.textContent ;
});
//Закрытие поп-апа профиль
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};
    iconProfileClose.addEventListener('click',function(){
      closePopup(popupProfile)
    });
//Открытие  поп-апа карточки
cardsButtonPlus.addEventListener('click',function(){
  openPopup(popupCards);
});
//Закрытие поп-апа карточки
iconCardsClose.addEventListener('click',function(){
  closePopup(popupCards)
});
//Редактирование профиля
function submitProfileForm(evt){
    evt.preventDefault();
    profileName.textContent = formProfileNameInput.value;
    profileDiscription.textContent = hobby.value;

    closePopup(profilePopup)
    };

//Добавление карточки
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

//создание базовых карточек
const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});

function render() {
  placeInfo.forEach(card =>{
    const basicCard = createCard(card);
    renderCard(basicCard, elements);
  });
}
function  createCard({ name, link }) {
  const placeTemplate = document.querySelector('#template').content;
  const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
  placeElement.querySelector('.element__description').textContent = name;
  placeElement.querySelector('.element__photo').src = link;
  placeElement.querySelector('.element__photo').alt = name;

  //Удаление карточек
  const cardsDelite = placeElement.querySelector('.element__delite')
  cardsDelite.addEventListener('click',function (){
      placeElement.remove();
    });
    //Лайки
const like = placeElement.querySelector('.element__button');
like.addEventListener('click', (evt) => {
  evt.target.classList.toggle('element__button_active');
});
//Открытие картинок
const images = placeElement.querySelector('.element__photo');
    images.addEventListener('click',function openImage(){
      const modalImage = document.querySelector('.popup_open-image__image');
      modalImage.src = images.src;
      const modalText = document.querySelector('.popup_open-image__caption');
      const cardText = placeElement.querySelector('.element__description');
      modalText.textContent = images.alt;
      openPopup(popupImage)
    });
  return placeElement
}

function renderCard(card,container) {
  container.prepend(card);
}
render();
//закрытие картинок
const iconCloseImage = document.querySelector('#close_image');
iconCloseImage.addEventListener('click',function(){
  closePopup(popupImage)
})


//Закрытие кликом на оверлэй профиль
profileOverlay.addEventListener('click',function(){
  closePopup(popupProfile)
});
//Закрытие кликом на оверлэй карточки
cardsOverlay.addEventListener('click',function(){
  closePopup(popupCards)
});
//Закрытие кликом на оверлэй картинки
imageOverlay.addEventListener('click',function(){
  closePopup(popupImage)
});
//Закрытие кликом на esc
window.onkeydown = function( event ) {
  if ( event.keyCode == 27 ) {
    if(popupProfile.classList.contains('popup_opened')){
      closePopup(popupProfile)
    }
    if(popupCards.classList.contains('popup_opened')){
      closePopup(popupCards)
    }
    if(popupImage.classList.contains('popup_opened')){
      closePopup(popupImage)
    }
  }
};
//Валидация
const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input_error_active');
};


const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_error');
  errorElement.classList.remove('popup__input_error_active');
  errorElement.textContent = '';
};


const isValid = (formElement, inputElement) => {
  if (inputElement.validity.patternMismatch) {
inputElement.setCustomValidity(inputElement.dataset.errorMessage);
} else {
  cardsForm.addEventListener("submit", submitCardsForm)
  formProfile.addEventListener('submit',submitProfileForm)
inputElement.setCustomValidity("");
}

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    cardsForm.addEventListener("submit", submitCardsForm)
    formProfile.addEventListener('submit',submitProfileForm)
    hideInputError(formElement, inputElement);
  }
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)
      toggleButtonState(inputList, buttonElement);
    });
  });
};
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add('popup__save-button_error');
  } else {
        buttonElement.disabled = false;
    buttonElement.classList.remove('popup__save-button_error');
  }
};
formInput.addEventListener('input', isValid);
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};
enableValidation();

