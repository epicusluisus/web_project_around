const formAddPlaceInputs = formAddPlace.querySelectorAll(".popup__field-element");
const formEditProfileInputs = formEditProfile.querySelectorAll(".popup__field-element");
const formButton = document.querySelectorAll(".popup__save-button");

function hasInvalidInput(inputs, form) {
    let allValid = Array.from(inputs).every(input => input.validity.valid);
    if (allValid) {
        toggleButtonState(form);
    }
}

function toggleButtonState(form) {
    let buttonId = 0;
    if (form.id === formEditProfile.id) {
        buttonId = 0;
        
    } else if (form.id === formAddPlace.id) {
        buttonId = 1;
    }

    formButton[buttonId].classList.toggle("popup__save-button_disabled");
    formButton[buttonId].disabled = false;
} 

function hasValidInput(input, inputs, form) {
    input.addEventListener("input", () => {
        if (input.validity.valid) {
            //hideInputError();
        } else {
            //showInputError();
        }
        hasInvalidInput(inputs, form);
    })
}

function setEventListeners(inputs, form) {
    inputs.forEach((input) => {
        hasValidInput(input, inputs, form);
    })
}

setEventListeners(formAddPlaceInputs, formAddPlace);
setEventListeners(formEditProfileInputs, formEditProfile);