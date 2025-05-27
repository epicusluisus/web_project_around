//pop up n bits
const page = document.querySelector('.page');
const popup = page.querySelector('.popup');
const header = page.querySelector('.header');

const addButtonName = header.querySelector('.header__profile-button');
const closeButtonName = popup.querySelector('.popup__close-button');
const saveButtonName = popup.querySelector('.popup__save-button');
let profileName = header.querySelector('header__profile-name');
let profileJob = header.querySelector('header__profile-tag');
let nameInput = popup.querySelector('.popup__form-element_name');
let jobInput = popup.querySelector('.popup__form-element_tag');
let form = popup.querySelector('.popup__form');

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
  console.log(nameInput.value);
  closePopup();
}

form.addEventListener('submit', handleProfileFormSubmit);