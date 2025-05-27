const page = document.querySelector('.page');
const popup = page.querySelector('.popup');
const header = page.querySelector('.header');

const addButtonName = header.querySelector('.header__profile-button');
const closeButtonName = popup.querySelector('.popup__close-button');
let profileName = header.querySelector('.header__profile-name');
let profileJob = header.querySelector('.header__profile-tag');
let nameInput = popup.querySelector('#input-name');
let jobInput = popup.querySelector('#input-tag');
const form = popup.querySelector('.popup__form');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

addButtonName.addEventListener('click', openPopup);
closeButtonName.addEventListener('click', closePopup);


//form n bits
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

form.addEventListener('submit', handleProfileFormSubmit);

/*ayudeme porfavor, no le entiendo a esto, no le enuentro solución
terminé el diseño de toda la página en 3 diás y llevo 4 en el java
repasé todo el sprint 7 dos veces
Ayuda