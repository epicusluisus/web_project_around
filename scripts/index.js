const page = document.querySelector('.page');
const popup = page.querySelector('.popup');
const header = page.querySelector('.header');

const addButtonName = header.querySelector('.header__profile-button');
const closeButtonName = popup.querySelector('.popup__close-button');
const profileName = header.querySelector('header__profile-name');
const profileJob = header.querySelector('header__profile-tag');
const nameInput = popup.querySelector('#input-name');
const jobInput = popup.querySelector('#input-tag');
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

form.addEventListener('submit', handleProfileFormSubmit);

//form n bits
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

