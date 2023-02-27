
//Открытие  поп-апа
function openPopup(popup) {
  popup.classList.add('popup_opened');
};
//Открытие поп апа профиля
popupProfileOpenButton.addEventListener('click',function(){
  openPopup(popupProfile);
  //Значения в инпутах
  formProfileNameInput.value = profileName.textContent ;
  hobby.value = profileDiscription.textContent ;
});
//Закрытие поп-апа профиль
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};
    iconProfileClose.addEventListener('click',function(){
      closePopup(popupProfile)
    });
//Редактирование профиля
function submitProfileForm(evt){
    evt.preventDefault();
    profileName.textContent = formProfileNameInput.value;
    profileDiscription.textContent = hobby.value;
    closePopup(profilePopup)
    };
