//профиль
import { from } from "form-data";
import{profileName,avatar,elements,profileDiscription} from "../index.js";
import { renderCard} from './modal.js';
import {counterLikes,createCard} from './card.js';
async function getProfile(){
    let response = await fetch('https://nomoreparties.co/v1/plus-cohort-23/users/me', {
    headers: {
        authorization: '005699ab-4782-4879-a334-2468c75341c4'
    }
    })
    let content = await response.json();
    profileName.textContent = content.name;
    avatar.src = content.avatar;
    profileDiscription.textContent = content.about;
}


///карточки
async function getCard(){
    let response = await fetch('https://nomoreparties.co/v1/plus-cohort-23/cards', {
    headers: {
        authorization: '005699ab-4782-4879-a334-2468c75341c4'
    }
    })
    let content = await response.json();
    console.log(content)
    console.log(counterLikes.textContent)
    const placeInfo = content.map(function (item) {
    return {
        name: item.name,
        link: item.link,
        likes: item.likes,
        id:item._id,
        owner:item.owner._id
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
}
export {getCard,getProfile}