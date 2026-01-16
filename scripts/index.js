const magicButton = document.querySelector(".page");
const contentGrid = document.querySelector(".content__grid");
const noPostText = document.querySelector(".content__no-post");

const noPost = () => noPostText.classList.remove("content__no-post__hidden");
const hideNoPost = () => noPostText.classList.add("content__no-post__hidden");
const checkNoPost = () => contentGrid.children.length === 0 ? noPost() : hideNoPost();

function addCard(cardTitle, cardLink) {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.querySelector(".card").cloneNode(true);

  card.querySelector(".card__title").textContent = cardTitle;
  card.querySelector(".card__image").src = cardLink;
  card.querySelector(".card__image").alt = `Photo of ${cardTitle}`;

  card.querySelector(".card__like").addEventListener("click", (e) => {
    e.target.classList.toggle("card__like_active");
  })
  card.querySelector(".card__delete-button").addEventListener("click", (e) => {
    e.target.parentElement.remove();
    checkNoPost();
  })
  contentGrid.prepend(card);

  card.querySelector(".card__image").addEventListener("click", (e) => {
    renderBigImage(e.target.alt, e.target.src);
  })
  checkNoPost();
}

const initialCards = [
  {
    "title": "Seattle, Washington",
    "link": "https://images.unsplash.com/photo-1762838896833-ffb8f3032374?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "title": "Hojas de otoño",
    "link": "https://images.unsplash.com/photo-1762776345918-dbc968a5fcb0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "title": "Valle de Yosemite",
    "link": "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    "title": "Montañas Calvas",
    "link": "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    "title": "Latemar",
    "link": "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    "title": "Vanoise National Park",
    "link": "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  }
];

const addInitialCards = () => {
  initialCards.forEach((item) => {
    addCard(item.title, item.link);
  })
}
addInitialCards();

//forms and overlays
const popup = document.querySelector(".popup");
const popupOverlay = popup.querySelector(".popup__overlay");
const openPopupOverlay = () => popup.classList.remove("popup_closed");
const closePopupOverlay = () => popup.classList.add("popup_closed");

const editButton = document.querySelector(".header__edit-button");
const addButton = document.querySelector(".header__add-button");
const closeButton = document.querySelector(".popup__close-button");
const saveButton = document.querySelector(".pop__save-button");

const formAddPlace = document.forms.formAddPlace;
const formEditProfile = document.forms.formEditProfile

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

//the shitshow
//begins...
const bigImage = document.querySelector("#big-image-template").content;
const imageContainer = bigImage.querySelector(".big-image").cloneNode(true);
let isBigImageActive = false;

const closeBigImage = () => {
  formAddPlace.classList.add("popup_closed");
  formEditProfile.classList.add("popup_closed");
  closePopupOverlay();
  imageContainer.remove();
  isBigImageActive = false;
}

function renderBigImage(title, url) {
  imageContainer.querySelector(".big-image__image").src = url;
  imageContainer.querySelector(".big-image__image").alt = title;
  imageContainer.querySelector(".big-image__text").textContent = title.slice(9);
  imageContainer.querySelector(".big-image__close-button").addEventListener("click", closeBigImage)
  openPopupOverlay();
  popup.append(imageContainer);
  isBigImageActive = true;
}


//key shorcuts
document.addEventListener("scroll", closeBigImage);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeBigImage();
  }
})

document.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    closeBigImage();
  }
})


//konami code shorcut (0 _ 0)
let konamiCodePosition = 0;
const konamicode = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "a", "b"];

document.addEventListener('keydown', function(e) {
  if (e.key.toLowerCase() === konamicode[konamiCodePosition]) {
    konamiCodePosition += 1;
  } else if (!(e.key.toLowerCase() === konamicode[konamiCodePosition]) && e.key.toLowerCase() === "arrowup") {
    konamiCodePosition = 1;
  } else {
    konamiCodePosition = 0;
  }

  if (konamiCodePosition === 10) {
    addInitialCards();
    alert("Hadóóóken");
  }
})