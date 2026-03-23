const formAddPlaceInputs = formAddPlace.querySelectorAll(".popup__field-element");
const formEditProfileInputs = formEditProfile.querySelectorAll(".popup__field-element");
const formButton = document.querySelectorAll(".popup__save-button");

const showInputError = (input) => {
    console.log("stop" + input);
}

function hasInvalidInput(inputs, form) {
    let allValid = Array.from(inputs).every(input => input.validity.valid);
    if (allValid) {
        toggleButtonState(form, true);
    } else toggleButtonState(form, false);
}

function toggleButtonState(form , state) {
    let buttonId = 0;
    if (form.id === formEditProfile.id) {
        buttonId = 0;
        
    } else if (form.id === formAddPlace.id) {
        buttonId = 1;
    }

    if (state) {
        formButton[buttonId].classList.remove("popup__save-button_disabled");
        formButton[buttonId].disabled = false;
    } else {
        formButton[buttonId].classList.add("popup__save-button_disabled");
        formButton[buttonId].disabled = true;
    }
} 

function enableValidation(input, inputs, form) {
    input.addEventListener("input", () => {
        if (input.validity.valid) {
            //hideInputError();
        } else {
            showInputError(input);
        }
        hasInvalidInput(inputs, form);
    })
}

function setEventListeners(inputs, form) {
    inputs.forEach((input) => {
        enableValidation(input, inputs, form);
    })
}

setEventListeners(formAddPlaceInputs, formAddPlace);
setEventListeners(formEditProfileInputs, formEditProfile);