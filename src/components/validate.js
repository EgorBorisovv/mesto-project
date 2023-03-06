const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);
const buttonElement = formElement.querySelector('.popup__save-button');
const errorInput = formElement.querySelector('popup__input_error');
const inputErrorActive = 'popup__input_error_active';
const buttonError = 'popup__save-button_error';
export {formInput,formElement,formError};
export{buttonElement}

const showInputError = (formElement, inputElement, errorMessage,errorElement) => {
  errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(errorInput);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(inputErrorActive);
};


const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(errorInput);
  errorElement.classList.remove(inputErrorActive);
  errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add(buttonError);
  } else {
        buttonElement.disabled = false;
    buttonElement.classList.remove(buttonError);
  }
};

const isValid = (formElement, inputElement) => {
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
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

export  {showInputError,hideInputError,hasInvalidInput,setEventListeners,toggleButtonState,enableValidation,isValid}