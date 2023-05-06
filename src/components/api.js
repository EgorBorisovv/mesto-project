//Настройки
import { checkResponse } from "./utils";
const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-23',
    headers: {
    authorization: '005699ab-4782-4879-a334-2468c75341c4',
    },
};
//профиль
async function getApiProfile(){
    let response = await fetch(`${config.baseUrl}/users/me`, {
    headers: {
        authorization: `${config.headers.authorization}`
    }
    })
    let content =await checkResponse(response);
    return content
}
///карточки
async function getCard(){
    let response = await fetch(`${config.baseUrl}/cards`, {
    headers: {
        authorization: `${config.headers.authorization}`
    }
    })
    let content = await checkResponse(response); 
    return content
}
//Удаление карточек
function deliteApi(id){
    fetch(`${config.baseUrl}/cards/${id}`, {
        method: 'DELETE',   
        headers: {
        authorization:`${config.headers.authorization}`,
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
        },
    });
}

//лайки
//снятие лайка
async function deleteLike(id){
    let response = await fetch(`${config.baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
            authorization: `${config.headers.authorization}`
        }
        })
        let content =await checkResponse(response);
        return content
}


//постановка лайка
async function putLike(id){
    let response = await fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'PUT',
        headers: {
        authorization: `${config.headers.authorization}`
    }
    })
    let content =await checkResponse(response);
    return content
}
//создание карточки
function createApiCard(cardName,cardLink){
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
}
//Изменение аватара
function patchAvatar(image){
    fetch(`${config.baseUrl}/users/me/avatar`, {
method: 'PATCH',
headers: {
    authorization: `${config.headers.authorization}`,
    'Content-Type': 'application/json'
},
body: JSON.stringify({
    avatar: image.src 
})
});
}
//Изменение профиля
function patchProfile(name,discription){
fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
    authorization: `${config.headers.authorization}`,
    'Content-Type': 'application/json'
    },
        body: JSON.stringify({
        name: name.textContent,
        about: discription.textContent
    })
}); 
}
export {getApiProfile,getCard,deliteApi,putLike,createApiCard,patchAvatar,patchProfile,deleteLike}