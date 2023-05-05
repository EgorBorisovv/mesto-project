const hasInvalidInput = (inputList) => { 
  return inputList.some((inputElement) => { 
    return !inputElement.validity.valid; 
  }) 
}; 
const showInputError = (formElement, inputElement, errorMessage, errorElement , settings) => {
  errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.errorInput);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.inputErrorActive);
};
const hideInputError = (formElement, inputElement , settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.errorInput);
  errorElement.classList.remove(settings.inputErrorActive);
  errorElement.textContent = '';
};
const setEventListeners = (formElement, settings,buttonElement) => { 
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  toggleButtonState(inputList, buttonElement, settings); 
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, settings) 
      toggleButtonState(inputList, buttonElement, settings); 
    });
  });
}; 
const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.buttonError);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.buttonError);
  }
}; 
const isValid = (formElement, inputElement, settings) => { 
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings.errorInput,settings,settings.inputErrorActive);
  } else {
    hideInputError(formElement, inputElement, settings,settings.errorInput,settings.inputErrorActive);
  }
};


const enableValidation = (settings) => { 
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement,settings,settings.buttonElement);
  });
};
export  {showInputError,hideInputError,hasInvalidInput,setEventListeners,toggleButtonState,enableValidation,isValid} 