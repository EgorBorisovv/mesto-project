import {
  popupImage,
  elements,userID
} from '../index.js';
import { renderCard } from './modal.js';
import { deleteLike, deliteApi, getApiProfile, getCard, putLike,createApiCard} from './api.js';
const placeTemplate = document.querySelector('#template').content;
const modalImage = document.querySelector('.popup_open-image__image');
const modalText = document.querySelector('.popup_open-image__caption');
const popupDelite = document.querySelector('.popup_delite')
let cardId;
import { closePopup,openPopup} from './modal.js'; 
const elemenDelite = document.querySelector('.popup__save-button_delite')
const deliteForm = document.querySelector('form[name="delite"]');
const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
const counterLikes = placeElement.querySelector('.element__count')



function  createCard({ name, link,likes,id ,owner}) {
  const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
  placeElement.querySelector('.element__description').textContent = name; 
  placeElement.querySelector('.element__photo').src = link; 
  placeElement.querySelector('.element__photo').alt = name; 
  const counterLikes = placeElement.querySelector('.element__count')
  counterLikes.textContent=likes.length
    //Лайки
    const like = placeElement.querySelector('.element__button');
    like.addEventListener('click', (evt) => {  
      evt.target.classList.toggle('element__button_active');
      const counterLikesPage = placeElement.querySelector('.element__count')
      
        if(like.classList.contains('element__button_active')){
            putLike(id)
            counterLikesPage.textContent=+counterLikes.textContent+1
        }else{
          deleteLike(id)
          counterLikesPage.textContent=+counterLikes.textContent-1
      }   
      });  
        for(let i = 0;i<=likes.length;i++){
          if (likes[i] !==undefined){
            if(likes[i]._id === userID){
            like.classList.add('element__button_active')
          }     
          }
        }
        console.log(id)
        //Удаление карточек
          const cardsDelite = document.createElement("button")
          cardsDelite.classList.add('element__delite')
          placeElement.append(cardsDelite)
          cardsDelite.addEventListener('click',function (){     
              deliteApi(id,placeElement);
            })
          if(owner === userID ){
            cardsDelite.style.display='block';
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

  async function loadApiCard(){
    let content = await getCard()
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
      const iconCloseImage = document.querySelector('#close_image');
      iconCloseImage.addEventListener('click',function(){
      closePopup(popupImage)
      })
      
      function render() {
      placeInfo.forEach(card =>{
          const basicCard = createCard(card);
          renderCard(basicCard, elements);
      });
      }
      render()
      for(let i=0;i<=content.length;i++){
        if(content[i]!==undefined){
          cardId = content[i]._id
        }
      }
  }
  loadApiCard()
  export {counterLikes,createCard,loadApiCard,cardId}
