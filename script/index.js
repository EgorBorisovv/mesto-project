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
const IconProfileClose = document.querySelector('#close_profile');
const popupCards = document.querySelector('#cards');
const cardsButtonPlus = document.querySelector('.profile__button_plus');
const IconCardsClose = document.querySelector('#close_cards');
const form = document.querySelector('form[name="form"]');
const text = document.querySelector('input[name="profile"]');
const hobby = document.querySelector('input[name="hobby"]');
const profileSave = document.querySelector('#save-profile');
const profilePopup = document.querySelector('#profile');
const inputName = document.querySelector('input[name = "name"]');
const imageInput = document.querySelector('input[name= "image"]');
const popupImage = document.querySelector('#image');
const cardsForm = document.querySelector('form[name="cards"]');
const cardSave = document.querySelector('#save-card');
const elements = document.querySelector('.elements');
//Открытие  поп-апа
function openPopup(popup) {
  popup.classList.add('popup_opened');
};
//Открытие поп апа профиля
popupProfileOpenButton.addEventListener('click',function(){
  openPopup(popupProfile);
  //Значения в инпутах
  text.value = document.querySelector('.profile__name').textContent ;
  hobby.value = document.querySelector('.profile__description').textContent ;
});
//Закрытие поп-апа профиль
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};
    IconProfileClose.addEventListener('click',function(){
      closePopup(popupProfile)
    });
//Открытие  поп-апа карточки
cardsButtonPlus.addEventListener('click',function(){
  openPopup(popupCards);
});
//Закрытие поп-апа карточки
IconCardsClose.addEventListener('click',function(){
  closePopup(popupCards)
});
//Редактирование профиля
function submitProfileForm(evt){
    evt.preventDefault();
    document.querySelector('.profile__name').textContent = text.value;
    document.querySelector('.profile__description').textContent = hobby.value;
    closePopup(profilePopup)
    };
form.addEventListener("submit", submitProfileForm)
//Добавление карточки
function submitCardsForm(evt){
  evt.preventDefault();
  renderCard({inputName,imageInput})
  document.querySelector('.element__description').textContent = inputName.value;
  document.querySelector('.element__photo').src = imageInput.value;
  document.querySelector('.element__photo').alt = inputName.value;
  evt.target.reset();
  closePopup(popupCards)
  };
cardsForm.addEventListener("submit", submitCardsForm)
//создание базовых карточек
const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});
function render() {
  placeInfo.forEach(renderCard);
}
function renderCard({ name, link }) {
  const placeTemplate = document.querySelector('#template').content;
  const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
  placeElement.querySelector('.element__description').textContent = name;
  placeElement.querySelector('.element__photo').src = link;
  placeElement.querySelector('.element__photo').alt = name;
  elements.prepend(placeElement);
  //Удаление карточек
  const cardsDelite = document.querySelector('.element__delite')
  cardsDelite.addEventListener('click',function (){
      placeElement.remove();
    });
    //Лайки
const like = document.querySelector('.element__button');
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
//закрытие картинок
const iconCloseImage = document.querySelector('#close_image');
iconCloseImage.addEventListener('click',function(){
  closePopup(popupImage)
});
}
render();
