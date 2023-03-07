const formElement = document.querySelector('.popup__form'); 
const formInput = formElement.querySelector('.popup__input'); 
const formError = formElement.querySelector(`.${formInput.id}-error`); 
const buttonElement = formElement.querySelector('.popup__save-button'); 
const buttonError = 'popup__save-button_error'; 
export {formInput,formElement,formError}; 
export{buttonElement} 

const settings = {
  formSelector: '.popup__form', 
  inputSelector: formElement.querySelector('.popup__input'), 
  submitButtonSelector: formElement.querySelector('.popup__save-button'), 
  errorInput: 'popup__input_error',
  errorClass: 'popup__input__label', 
  inputErrorActive: 'popup__input_error_active', 
  buttonError: 'popup__save-button_error',
  errorInput: formElement.querySelector('popup__input_error')
}
export {settings}
const showInputError = (formElement, inputElement, errorMessage,errorElement) => { 
  errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.add(settings.errorInput); 
  errorElement.textContent = errorMessage; 
  errorElement.classList.add(settings.inputErrorActive); 
}; 
const hideInputError = (formElement, inputElement) => { 
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.remove(settings.errorInput); 
  errorElement.classList.remove(settings.inputErrorActive); 
  errorElement.textContent = ''; 

}; 
const hasInvalidInput = (inputList,settings) => { 
  return inputList.some((inputElement) => { 
    return !inputElement.validity.valid; 
  }) 
}; 

const setEventListeners = (formElement, settings) => { 
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  toggleButtonState(inputList, buttonElement, settings); 
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, settings) 
      toggleButtonState(inputList, buttonElement, settings); 
    });
  });
}; 
const toggleButtonState = (inputList, buttonElement,settings) => { 
  if (hasInvalidInput(inputList)) { 
        buttonElement.disabled = true; 
        buttonElement.classList.add(buttonError); 
  } else { 
        buttonElement.disabled = false; 
    buttonElement.classList.remove(buttonError); 
  } 
}; 
const isValid = (formElement, inputElement,settings) => { 
  if (inputElement.validity.patternMismatch) { 
inputElement.setCustomValidity(inputElement.dataset.errorMessage); 
} else { 
inputElement.setCustomValidity(""); 
} 
  if (!inputElement.validity.valid) { 
    showInputError(formElement, inputElement, inputElement.validationMessage); 
  } else { 
    hideInputError(formElement, inputElement); 
  } 
}; 

const enableValidation = (settings) => { 
  const formList = Array.from(document.querySelectorAll('.popup__form')); 
  formList.forEach((formElement) => { 
    setEventListeners(formElement,settings); 
  }); 
}; 
export  {showInputError,hideInputError,hasInvalidInput,setEventListeners,toggleButtonState,enableValidation,isValid} 