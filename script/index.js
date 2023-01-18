//Открытие  поп-апа
const editProfile = document.querySelector('.profile__button_edit');
const popup = document.querySelector('.popup');
editProfile.addEventListener('click',function(){
  popup.classList.add('popup_opened');
});
//Закрытие поп-апов
const closePopup = document.querySelectorAll('.popup__close-icon');
for (let i = 0; i < closePopup.length; i++){
  closePopup[i].addEventListener('click', function () {
    popup.classList.remove('popup_opened');
    document.querySelector('.popup_cards').classList.remove('popup_opened');
    document.querySelector('.popup_open-image').classList.remove('popup_opened')
  });
}
//Редактирование профиля
const text = document.querySelectorAll('.popup__input');
const saveCard = document.querySelectorAll('.popup__save-button');
saveCard[0].onclick = saveForm;
  function saveForm(){
    document.querySelector('.profile__name').textContent = text[0].value;
    document.querySelector('.profile__description').textContent = text[1].value;
    saveCard[0].addEventListener('click',function(){
    document.querySelector('.popup').classList.remove('popup_opened');
    });
    return false
    }

//Значения в инпутах
  text[0].value = document.querySelector('.profile__name').textContent ;
  text[1].value = document.querySelector('.profile__description').textContent ;

// создать попап для карточки
const cards = document.querySelector('.popup_cards');
const createCards = document.querySelector('.profile__button_plus');
createCards.addEventListener('click',function(){
  cards.classList.add('popup_opened');
});


//Добавление карточки
saveCard[1].onclick = creater;
function creater(){
  const allElement = document.querySelector('.elements')
  const createDiv = document.createElement('div');
  createDiv.className = 'element';
  allElement.prepend(createDiv)
  const createPhoto = document.createElement('img');
    createPhoto.className = 'element__photo';
    createPhoto.setAttribute('src',text[3].value)
    createPhoto.setAttribute('alt',text[2].value)
  const createDeliteButton = document.createElement('button')
    createDeliteButton.className = 'element__delite';
    createDeliteButton.setAttribute('type','button')
  const createDiscription = document.createElement('div');
    createDiscription.className = 'element__description';
    createDiscription.textContent = text[2].value;
  const createlikeButton = document.createElement('button');
    createlikeButton.className = 'element__button';
  const like = document.querySelectorAll('.element__button');
for (let i = 0; i < like.length; i++){
  like[i].addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button_active');
});
};
createDiscription.append(createlikeButton);
createDiv.append(createPhoto,createDeliteButton,createDiscription)
saveCard[1].addEventListener('click',function(){
  document.querySelector('.popup_cards').classList.remove('popup_opened');
  });
  const element = document.querySelectorAll('.element');
  const deliteCards = document.querySelectorAll('.element__delite')
  for (let i = 0; i < deliteCards.length; i++){
    deliteCards[i].addEventListener('click',function (){
      for (let j = 0; j < element.length; j++){
        element[i].remove();
      }
    })
  }
  const likeNew = document.querySelectorAll('.element__button');
for (let i = 0; i < likeNew.length; i++){
likeNew[i].addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__button_active');
});
};
const image = document.querySelectorAll('.element__photo')
for (let i = 0; i < image.length; i++){
    image[i].addEventListener('click',function openImage(){
      const modalImage = document.querySelector('.popup_open-image__image');
      modalImage.src = image[i].src;
      const modalText = document.querySelector('.popup_open-image__caption');
      const cardText = document.querySelector('.element__description')
      modalText.textContent = image[i].alt;
      document.querySelector('.popup_open-image').classList.add('popup_opened');
    });
};
  return false
};
//Реализация лайков
const like = document.querySelectorAll('.element__button');
for (let i = 0; i < like.length; i++){
like[i].addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__button_active');
});
};

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
//Структура карточки 1
const allElement = document.querySelector('.elements')
  const createDiv = document.createElement('div');
  createDiv.className = 'element';
  allElement.prepend(createDiv)
  const createPhoto = document.createElement('img');
    createPhoto.className = 'element__photo';
    createPhoto.setAttribute('src', initialCards[0].link)
    createPhoto.setAttribute('alt', initialCards[0].name)
  const createDeliteButton = document.createElement('button')
    createDeliteButton.className = 'element__delite';
    createDeliteButton.setAttribute('type','button')
  const createDiscription = document.createElement('div');
    createDiscription.className = 'element__description';
    createDiscription.textContent = initialCards[0].name;
  const createlikeButton = document.createElement('button');
    createlikeButton.className = 'element__button';
for (let i = 0; i < like.length; i++){
  like[i].addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button_active');
});
};
createDiscription.append(createlikeButton);
createDiv.append(createPhoto,createDeliteButton,createDiscription)

//Структура карточки 2
  const createDivTwo = document.createElement('div');
  createDivTwo.className = 'element';
  allElement.prepend(createDivTwo)
  const createPhotoTwo = document.createElement('img');
    createPhotoTwo.className = 'element__photo';
    createPhotoTwo.setAttribute('src', initialCards[1].link)
    createPhotoTwo.setAttribute('alt', initialCards[1].name)
  const createDeliteButtonTwo = document.createElement('button')
    createDeliteButtonTwo.className = 'element__delite';
    createDeliteButtonTwo.setAttribute('type','button')
  const createDiscriptionTwo = document.createElement('div');
    createDiscriptionTwo.className = 'element__description';
    createDiscriptionTwo.textContent = initialCards[1].name;
  const createlikeButtonTwo = document.createElement('button');
    createlikeButtonTwo.className = 'element__button';
for (let i = 0; i < like.length; i++){
  like[i].addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button_active');
});
};
createDiscriptionTwo.append(createlikeButtonTwo);
createDivTwo.append(createPhotoTwo,createDeliteButtonTwo,createDiscriptionTwo)

//Структура карточки 3
  const createDivThree = document.createElement('div');
  createDivThree.className = 'element';
  allElement.prepend(createDivThree)
  const createPhotoThree = document.createElement('img');
    createPhotoThree.className = 'element__photo';
    createPhotoThree.setAttribute('src', initialCards[2].link)
    createPhotoThree.setAttribute('alt', initialCards[2].name)
  const createDeliteButtonThree = document.createElement('button')
    createDeliteButtonThree.className = 'element__delite';
    createDeliteButtonThree.setAttribute('type','button')
  const createDiscriptionThree = document.createElement('div');
    createDiscriptionThree.className = 'element__description';
    createDiscriptionThree.textContent = initialCards[2].name;
  const createlikeButtonThree = document.createElement('button');
    createlikeButtonThree.className = 'element__button';
for (let i = 0; i < like.length; i++){
  like[i].addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button_active');
});
};
createDiscriptionThree.append(createlikeButtonThree);
createDivThree.append(createPhotoThree,createDeliteButtonThree,createDiscriptionThree)

//Структура карточки 4
  const createDivFour = document.createElement('div');
  createDivFour.className = 'element';
  allElement.prepend(createDivFour)
  const createPhotoFour = document.createElement('img');
    createPhotoFour.className = 'element__photo';
    createPhotoFour.setAttribute('src', initialCards[3].link)
    createPhotoFour.setAttribute('alt', initialCards[3].name)
  const createDeliteButtonFour = document.createElement('button')
    createDeliteButtonFour.className = 'element__delite';
    createDeliteButtonFour.setAttribute('type','button')
  const createDiscriptionFour = document.createElement('div');
    createDiscriptionFour.className = 'element__description';
    createDiscriptionFour.textContent = initialCards[3].name;
  const createlikeButtonFour = document.createElement('button');
    createlikeButtonFour.className = 'element__button';
for (let i = 0; i < like.length; i++){
  like[i].addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button_active');
});
};
createDiscriptionFour.append(createlikeButtonFour);
createDivFour.append(createPhotoFour,createDeliteButtonFour,createDiscriptionFour)
//Структура карточки 5
  const createDivFive = document.createElement('div');
  createDivFive.className = 'element';
  allElement.prepend(createDivFive)
  const createPhotoFive = document.createElement('img');
    createPhotoFive.className = 'element__photo';
    createPhotoFive.setAttribute('src', initialCards[4].link)
    createPhotoFive.setAttribute('alt', initialCards[4].name)
  const createDeliteButtonFive = document.createElement('button')
    createDeliteButtonFive.className = 'element__delite';
    createDeliteButtonFive.setAttribute('type','button')
  const createDiscriptionFive = document.createElement('div');
    createDiscriptionFive.className = 'element__description';
    createDiscriptionFive.textContent = initialCards[4].name;
  const createlikeButtonFive = document.createElement('button');
    createlikeButtonFive.className = 'element__button';
for (let i = 0; i < like.length; i++){
  like[i].addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button_active');
});
};
createDiscriptionFive.append(createlikeButtonFive);
createDivFive.append(createPhotoFive,createDeliteButtonFive,createDiscriptionFive)
//Структура карточки 6
  const createDivSix = document.createElement('div');
  createDivSix.className = 'element';
  allElement.prepend(createDivSix)
  const createPhotoSix = document.createElement('img');
    createPhotoSix.className = 'element__photo';
    createPhotoSix.setAttribute('src', initialCards[5].link)
    createPhotoSix.setAttribute('alt', initialCards[5].name)
  const createDeliteButtonSix = document.createElement('button')
    createDeliteButtonSix.className = 'element__delite';
    createDeliteButtonSix.setAttribute('type','button')
  const createDiscriptionSix = document.createElement('div');
    createDiscriptionSix.className = 'element__description';
    createDiscriptionSix.textContent = initialCards[5].name;
  const createlikeButtonSix = document.createElement('button');
    createlikeButtonSix.className = 'element__button';
for (let i = 0; i < like.length; i++){
  like[i].addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button_active');
});
};
createDiscriptionSix.append(createlikeButtonSix);
createDivSix.append(createPhotoSix,createDeliteButtonSix,createDiscriptionSix)
//Реализация лайков
const likes = document.querySelectorAll('.element__button');
for (let i = 0; i < likes.length; i++){
likes[i].addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__button_active');
});
};

//Удаление карточек
const element = document.querySelectorAll('.element');
const deliteCards = document.querySelectorAll('.element__delite')
for (let i = 0; i < deliteCards.length; i++){
  deliteCards[i].addEventListener('click',function (){
    for (let j = 0; j < element.length; j++){
      element[i].remove();
    };
  });
};
//Открытие картинок
const images = document.querySelectorAll('.element__photo')
for (let i = 0; i < images.length; i++){
    images[i].addEventListener('click',function openImage(){
      const modalImage = document.querySelector('.popup_open-image__image');
      modalImage.src = images[i].src;
      const modalText = document.querySelector('.popup_open-image__caption');
      const cardText = document.querySelector('.element__description')
      modalText.textContent = images[i].alt;
      document.querySelector('.popup_open-image').classList.add('popup_opened');
    });
};
