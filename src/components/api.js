//Настройки
import { checkResponse } from "./utils";
const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-23',
    headers: {
    authorization: '005699ab-4782-4879-a334-2468c75341c4',
    'Content-Type': 'application/json'
    },
};
//профиль
async function getApiProfile(button){
    const response = await fetch(`${config.baseUrl}/users/me`, {
    headers: {
        authorization:`${config.headers.authorization}`,
    }
    })
    const content =await checkResponse(response);
    return content

}

///карточки
async function getCard(){
    const response = await fetch(`${config.baseUrl}/cards`, {
    headers: {
        authorization: `${config.headers.authorization}`
    }
    })
    const content = await checkResponse(response); 
    return content
}
//Удаление карточек
function deliteApi(id){
    fetch(`${config.baseUrl}/cards/${id}`, {
        method: 'DELETE',   
        headers:config.headers,
    }).then(response =>{
        checkResponse(response)
    }).then(data =>{
        return data
    })
}

//лайки
//снятие лайка
function deleteLike(id){
    fetch(`${config.baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers:config.headers
            ,body:JSON.stringify({
                likes:-1
            })
        }).then(response=>{
            checkResponse(response)         
        }).then(data=> {
            return data
        }
        );
}


//постановка лайка
function putLike(id){
    fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'PUT',
        headers:config.headers
        ,body:JSON.stringify({
            likes:+1
        })
    }).then(response=>{
        checkResponse(response)
    }).then(data=> 
        {
            return data
        }
    );
}
//создание карточки
function createApiCard(cardName,cardLink,button){
        fetch('https://nomoreparties.co/v1/plus-cohort-23/cards', {
    method: 'POST',
    headers:config.headers,
    body: JSON.stringify({
    "name": cardName,
    "link": cardLink,
    
})
}).then(response =>{
    checkResponse(response)
}).then(data =>{
    return data
}).catch((err)=>{
    console.log(err);
}).finally(() =>{
    button.textContent='сохранение...'
})
}

//Изменение аватара
function patchAvatar(image,button){
    fetch(`${config.baseUrl}/users/me/avatar`, {
method: 'PATCH',
headers: config.headers,
body: JSON.stringify({
    avatar: image.src 
})
}).then(response =>{
    checkResponse(response)
}).then(data =>{
    return data
}).catch((err)=>{
    console.log(err);
}).finally(() =>{
    button.textContent='сохранение...'
})
}
//Изменение профиля
function patchProfile(name,discription,button){
fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers:config.headers,
        body: JSON.stringify({
        name: name.textContent,
        about: discription.textContent
    })
}).then(response =>{
    checkResponse(response)
}).then(data =>{
    return data
}).catch((err)=>{
    console.log(err);
}).finally(() =>{
    button.textContent='сохранение...'
})
}
export {getApiProfile,getCard,deliteApi,putLike,createApiCard,patchAvatar,patchProfile,deleteLike}