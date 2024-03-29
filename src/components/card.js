import {
  popupImage,
  elements,userID
} from '../index.js';
import { deleteLike, deliteApi, getApiProfile, getCards, putLike,createApiCard} from './api.js';
const placeTemplate = document.querySelector('#template').content;
const modalImage = document.querySelector('.popup_open-image__image');
const modalText = document.querySelector('.popup_open-image__caption');
const popupDelite = document.querySelector('.popup_delite')

import { closePopup,openPopup} from './modal.js'; 
const elemenDelite = document.querySelector('.popup__save-button_delite')
const deliteForm = document.querySelector('form[name="delite"]');
const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
const counterLikes = placeElement.querySelector('.element__count')


function renderCard(card,container) {
  container.prepend(card);
}



function  createCard({ name, link,likes,id ,owner}) {
  const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
  placeElement.querySelector('.element__description').textContent = name; 
  const placePhoto =  placeElement.querySelector('.element__photo')
  placePhoto.src = link; 
  placePhoto.alt = name; 
  const counterLikes = placeElement.querySelector('.element__count')
  counterLikes.textContent=likes.length
    //Лайки
    const like = placeElement.querySelector('.element__button');
    like.addEventListener('click', (evt) => {  
        if(like.classList.contains('element__button_active')){
          deleteLike(id)
            like.classList.remove('element__button_active')
            counterLikes.textContent=+counterLikes.textContent-1
          
        }else{
          putLike(id)
          like.classList.add('element__button_active')
          counterLikes.textContent=+counterLikes.textContent+1
          
      } 
      })
        for(let i = 0;i<=likes.length;i++){
          if (likes[i] !==undefined){
            if(likes[i]._id === userID){
            like.classList.add('element__button_active')
          }     
          }
        }
        //Удаление карточек
          const cardsDelite = document.createElement("button")
          cardsDelite.classList.add('element__delite')
          placeElement.append(cardsDelite)
          cardsDelite.addEventListener('click',function (){     
              deliteApi(id)
                placeElement.remove()
            })
          if(owner === userID ){
            cardsDelite.style.display='block';
}

//Открытие картинок
    placePhoto.addEventListener('click',function openImage(){
      modalImage.src = placePhoto.src;
      modalImage.alt = placePhoto.alt;
      modalText.textContent = placePhoto.alt;
      openPopup(popupImage)
    });
    const iconCloseImage = document.querySelector('#close_image');
    iconCloseImage.addEventListener('click',function(){
    closePopup(popupImage)
    })
  return placeElement
  
  }

  async function loadApiCard(){
    const content = await getCards()
    const placeInfo = content.map(function (item) {
      return {
          name: item.name,
          link: item.link,
          likes: item.likes,
          id:item._id,
          owner:item.owner._id,
      };
      });
      //закрытие картинок
      
      function render() {
      placeInfo.forEach(card =>{
          const basicCard = createCard(card);
          renderCard(basicCard, elements);
      });
      }
      render()
  }

  export {counterLikes,createCard,loadApiCard,renderCard}
