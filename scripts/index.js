const magicButton = document.querySelector(".page");
const contentGrid = document.querySelector(".content__grid");
const noPostText = document.querySelector(".content__no-post");

function noPost() {
  noPostText.classList.remove("content__no-post__hidden");
}

function addCard(cardTitle, cardLink) {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.querySelector(".card").cloneNode(true);

  card.querySelector(".card__title").textContent = cardTitle;
  card.querySelector(".card__image").src = cardLink;
  card.querySelector(".card__image").alt = `Photo of ${cardTitle}`;

  card.querySelector(".card__like").addEventListener("click", function (e) {
    e.target.classList.toggle("card__like_active");
  })
  card.querySelector(".card__delete-button").addEventListener("click", function (e) {
    e.target.parentElement.remove();
    if (contentGrid.children.length == 0) {
      console.log("bro");
      noPost();
    }
  })
  contentGrid.append(card);

  card.querySelector(".card__image").addEventListener("click", function(e) {
    console.log(e.target.alt, e.target.src);
    renderBigImage(e.target.alt, e.target.src);
  })
}

const initialCards = [
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
  },
  {
    "title": "Seattle, Washington",
    "link": "https://images.unsplash.com/photo-1762838896833-ffb8f3032374?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "title": "Hojas de otoño",
    "link": "https://images.unsplash.com/photo-1762776345918-dbc968a5fcb0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

function addInitialCards() {
  initialCards.forEach((item) => {
    addCard(item.title, item.link);
  })
}
addInitialCards();

//forms and overlays
const popupTemplate = document.querySelector("#popup-template").content;
const popup = popupTemplate.querySelector(".popup").cloneNode(true);
function openPopupOverlay() {
  magicButton.append(popup);
}

function openForm(title, ph1, ph2) {
  openPopupOverlay();
  const popupFormTemplate = document.querySelector("#popup__form-template").content;
  const popupForm = popupFormTemplate.querySelector(".popup__form").cloneNode(true);

  popupForm.querySelector(".popup__description").textContent = title;
  const name = popupForm.querySelector("#input-name");
  const tag = popupForm.querySelector("#input-tag");


  name.placeholder = ph1;
  tag.placeholder = ph2;

  popupForm.querySelector(".popup__save-button").addEventListener("click", function (e) {
    if (name.placeholder == "Título") {
      addCard(name.value, tag.value);
    } else if (name.placeholder == "Nombre") {
      userName.textContent = name.value;
      userTag.textContent = tag.value;
    }
    (e).preventDefault();
    closeForm();
  })
  
  function closeForm() {
    popup.remove();
    popupForm.remove();
    e.preventDefault();
  }
  popupForm.querySelector(".popup__close-button").addEventListener("click", function (e) {
    closeForm();
  })
  popup.append(popupForm);
}

//the shitshow
//begins...
//experimental things

const editButton = document.querySelector(".header__edit-button");
const addButton = document.querySelector(".header__add-button");
const closeButton = document.querySelector(".popup__close-button");
const saveButton = document.querySelector(".pop__save-button");

let userName = document.querySelector(".header__profile-name");
let userTag = document.querySelector(".header__profile-tag");

editButton.addEventListener("click", editProfile);
addButton.addEventListener("click", addPhoto);

function editProfile() {
  openForm("Editar perfil", "Nombre", "Acerca de mi");
}

function addPhoto() {
  openForm("Nuevo Lugar", "Título", "Enlace a la imagen");
}


function renderBigImage(title, url) {
  const bigImage = document.querySelector("#popup__image-template").content;
  const imageContainer = bigImage.querySelector(".popup__image-container").cloneNode(true);

  imageContainer.querySelector(".popup__image").src = url;
  imageContainer.querySelector(".popup__image").alt = title;
  imageContainer.querySelector(".popup__image-text").textContent = title.slice(9);
  imageContainer.querySelector(".popup__image-close-button").addEventListener("click", function (e) {
    popup.remove();
    imageContainer.remove();
    e.preventDefault();
  })

  openPopupOverlay();
  popup.append(imageContainer);
}