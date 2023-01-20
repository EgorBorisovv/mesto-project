//Создание дефолтных карточек
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

//Открытие  поп-апа профиль
const popupProfileOpenButton = document.querySelector('.profile__button_edit');
const popupProfile = document.querySelector('#profile');
function openPopup(popup) {
  popup.classList.add('popup_opened');
};
popupProfileOpenButton.addEventListener('click',function(){
  openPopup(popupProfile);
});
//Закрытие поп-апа профиль
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};
const closeIconProfile = document.querySelector('#close_profile');
    closeIconProfile.addEventListener('click',function(){
      closePopup(popupProfile)
    });
//Открытие  поп-апа карточки
const popupCards = document.querySelector('#cards');
const cardsButtonPlus = document.querySelector('.profile__button_plus')
cardsButtonPlus.addEventListener('click',function(){
  openPopup(popupCards);
});
//Закрытие поп-апа карточки
const closeIconCards = document.querySelector('#close_cards');
closeIconCards.addEventListener('click',function(){
  closePopup(popupCards)
});

//Редактирование профиля
const text = document.querySelector('input[name="profile"]');
const hobby = document.querySelector('input[name="hobby"]')
const profileSave = document.querySelector('#save-profile');
function saveForm(){
text.addEventListener("submit",function saveText(){
    document.querySelector('.profile__name').textContent = text.value;
    });
hobby.addEventListener("submit",function saveHobby(){
    document.querySelector('.profile__description').textContent = hobby.value;
    });
    closePopup(popupProfile)
}
text.addEventListener("submit", function(){
  saveForm()
})
hobby.addEventListener("submit", function(){
  saveForm()
})

//Значения в инпутах
  text.value = document.querySelector('.profile__name').textContent ;
  hobby.value = document.querySelector('.profile__description').textContent ;



function createCard(cardsName,imageLink){
  const Div = document.createElement('div');
  Div.className = 'element';
  const Photo = document.createElement('img');
    Photo.className = 'element__photo';
    Photo.setAttribute('src', imageLink)
    Photo.setAttribute('alt', cardsName)
  const DeliteButton = document.createElement('button')
    DeliteButton.className = 'element__delite';
    DeliteButton.setAttribute('type','button')
  const Discription = document.createElement('div');
    Discription.className = 'element__description';
    Discription.textContent = cardsName;
  const likeButton = document.createElement('button');
    likeButton.className = 'element__button';
    Discription.append(likeButton);
    Div.append(Photo,DeliteButton,Discription)
    const allElements = document.querySelector('.elements')
    allElements.prepend(Div);


//Удаление карточек
const element = document.querySelectorAll('.element');
const deliteCards = document.querySelectorAll('.element__delite')
for (let i = 0; i < deliteCards.length; i++){
  deliteCards[i].addEventListener('click',function (){
    for (let j = 0; j < element.length; j++){
      element[i].remove();
    };
  });
}
//Открытие картинок
const inputName = document.querySelector('input[name = "name"]');
const popupImage = document.querySelector('#image')
const images = document.querySelectorAll('.element__photo')
for (let i = 0; i < images.length; i++){
    images[i].addEventListener('click',function openImage(){
      const modalImage = document.querySelector('.popup_open-image__image');
      images[i].setAttribute('alt',inputName.value)
      modalImage.src = images[i].src;
      const modalText = document.querySelector('.popup_open-image__caption');
      const cardText = document.querySelector('.element__description')
      modalText.textContent = images[i].alt;
      openPopup(popupImage)
    });
};
//закрытие картинок
const closeIconImage = document.querySelector('#close_image');
closeIconImage.addEventListener('click',function(){
  closePopup(popupImage)
});
}
//Добавление карточки
const saveCard = document.querySelector('#save-card')
saveCard.submit = createNewCards;
function createNewCards(){
  createCard( document.querySelector('input[name = "name"]').value,document.querySelector('input[name = "image"]').value);
};
function createBasicCard(){
  for(let i = 0 ; i < initialCards.length ; i++)
    createCard(initialCards[i].name,initialCards[i].link);
};
createBasicCard()
//Лайки
const like = document.querySelectorAll('.element__button');
for (let i = 0; i < like.length; i++){
  like[i].addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button_active');
});
};
console.log(like)
