let editButton = document.querySelector(".header__profile-button");
let closeButton = document.querySelector(".popup__close-button");
let saveButton = document.querySelector(".popup__save-button");
let popup = document.querySelector(".popup");
const contentGrid = document.querySelector(".content__grid");

let nameInput = document.querySelector("#input-name");
let jobInput = document.querySelector("#input-tag");
let name = document.querySelector(".header__profile-name");
let job = document.querySelector(".header__profile-tag");
let form = document.querySelector(".popup__container");

function openpopup() {
  popup.classList.add("popup_opened");
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

function closepopup() {
  popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", openpopup);
closeButton.addEventListener("click", closepopup);

function submitForm(e) {
  e.preventDefault();
  job.textContent = jobInput.value;
  name.textContent = nameInput.value;
  closepopup();
}


function addCard(cardTitle, cardLink) {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.querySelector(".card").cloneNode(true);

  card.querySelector(".card__title").textContent = cardTitle;
  card.querySelector(".card__image").src = cardLink;
  card.querySelector(".card__image").alt = cardTitle;
  card.querySelector(".card__like").addEventListener("click", function (e) {
    e.target.classList.toggle("card__like_active");
  })

  contentGrid.append(card);
}


function addInitialCards() {
  initialCards.forEach((item) => {
    addCard(item.title, item.link);
  })
}

const initialCards = [
  {
    "title": "Valle de Yosemite",
    "link": "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    "title": "Lago Louise",
    "link": "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
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
    "title": "Lago de Braies",
    "link": "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  },
];

addInitialCards();