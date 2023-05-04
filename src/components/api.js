//Настройки
import { checkResponse } from "./utils";
const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-23',
    headers: {
    authorization: '005699ab-4782-4879-a334-2468c75341c4',
    },
};
//профиль
async function getApiProfile(name,avatar,discription){
    let response = await fetch(`${config.baseUrl}/users/me`, {
    headers: {
        authorization: `${config.headers.authorization}`
    }
    })
    let content =await checkResponse(response);
    name.textContent = content.name;
    avatar.src = content.avatar;
    discription.textContent = content.about;
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



export {getApiProfile,getCard}