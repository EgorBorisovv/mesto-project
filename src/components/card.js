import {
  popupImage,
  elements,
} from '../index.js';

const placeTemplate = document.querySelector('#template').content;
const modalImage = document.querySelector('.popup_open-image__image');
const modalText = document.querySelector('.popup_open-image__caption');
const popupDelite = document.querySelector('.popup_delite')
let counterLikes = placeTemplate.querySelector('.element__count')
import { closePopup,openPopup} from './modal.js'; 
const elemenDelite = document.querySelector('.popup__save-button_delite')
const deliteForm = document.querySelector('form[name="delite"]');
function  createCard({ name, link,likes,id ,owner}) {
  const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
  placeElement.querySelector('.element__description').textContent = name; 
  placeElement.querySelector('.element__photo').src = link; 
  placeElement.querySelector('.element__photo').alt = name; 
  counterLikes.textContent = likes.length;


  

  
    //Лайки
    const like = placeElement.querySelector('.element__button');
    like.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__button_active');  
      fetch(`https://nomoreparties.co/v1/plus-cohort-23/cards/likes/${id}`, {
    method: 'PUT',
    headers: {
    authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      likes:Number(likes) + 1
  })
}); 
      }); 

if(owner === 'e73ca1412a678dbe12a1e470'){
  const cardsDelite = document.createElement("button")
      cardsDelite.classList.add('element__delite')
      placeElement.append(cardsDelite)
        //Удаление карточек
        cardsDelite.addEventListener('click',function (){     
          openPopup(popupDelite)
          deliteForm.addEventListener('submit',function(evt){
            evt.preventDefault();
            fetch(`https://nomoreparties.co/v1/plus-cohort-23/cards/${id}`, {
            method: 'DELITE',   
            headers: {
              authorization:'005699ab-4782-4879-a334-2468c75341c4',
            }
            });
            placeElement.remove();
            closePopup(popupDelite);
          })
        })
}

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


    
export {counterLikes,createCard}
