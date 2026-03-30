const contentGrid = document.querySelector(".content__grid");
const noPostText = document.querySelector(".content__no-post");
const allCards = [];
let name = document.querySelector(".header__profile-name");
let tag = document.querySelector(".header__profile-tag");

const checkNoPost = () => contentGrid.children.length === 0
  ? noPostText.classList.remove("content__no-post__hidden")
  : noPostText.classList.add("content__no-post__hidden");

const popup = document.querySelector(".popup");
const popupOverlay = popup.querySelector(".popup__overlay");
const openPopupOverlay = () => popup.classList.remove("popup_closed");
const closePopupOverlay = () => popup.classList.add("popup_closed");

const editButton = document.querySelector(".header__edit-button");
const addButton = document.querySelector(".header__add-button");
const saveButton = document.querySelector(".popup__save-button");

const formAddPlace = document.forms.formAddPlace;
const formEditProfile = document.forms.formEditProfile;

const openForm = (formId) => {
  formId.classList.remove("popup_closed");
}

editButton.addEventListener("click", () => {
  openPopupOverlay();
  openForm(formEditProfile);
});

addButton.addEventListener("click", () => {
  openPopupOverlay();
  openForm(formAddPlace);
})

formAddPlace.addEventListener("submit", (e) => {
  e.preventDefault();
  let submitCard = {};
  submitCard.link = formAddPlace.inputUrl.value;
  submitCard.title = formAddPlace.inputTitle.value;
  addCard([submitCard]);

  formAddPlace.reset();
  toggleButtonState(formAddPlace, false);
  closeForm();
})

formEditProfile.addEventListener("submit", (e) => {
  e.preventDefault();
  name.textContent = formEditProfile.inputName.value;
  tag.textContent = formEditProfile.inputTag.value;
  formEditProfile.reset();
  toggleButtonState(formEditProfile, false);
  closeForm();
})

const closeForm = () => {
  closePopupOverlay();
  formAddPlace.classList.add("popup_closed");
  formEditProfile.classList.add("popup_closed");
}

//key shorcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeBigImage();
    closeForm();
  }
})

document.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    closeBigImage();
    closeForm();
  }
})