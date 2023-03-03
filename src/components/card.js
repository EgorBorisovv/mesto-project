import {
  popupImage,
  elements,
} from '../index.js';
import { renderCard } from './modal.js';
const placeTemplate = document.querySelector('#template').content;
const modalImage = document.querySelector('.popup_open-image__image');
const modalText = document.querySelector('.popup_open-image__caption');


import { closePopup,openPopup} from './modal.js'; 
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
    link:  'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//создание базовых карточек
const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});
function  createCard({ name, link }) {
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
      
      modalImage.src = images.src;
      modalImage.alt = images.alt;
      const cardText = placeElement.querySelector('.element__description');
      modalText.textContent = images.alt;
      openPopup(popupImage)
    });
  return placeElement
}



function render() {
  placeInfo.forEach(card =>{
    const basicCard = createCard(card);
    renderCard(basicCard, elements);
  });
}

//закрытие картинок
const iconCloseImage = document.querySelector('#close_image');
iconCloseImage.addEventListener('click',function(){
  closePopup(popupImage)
})

export {render,createCard}
