let editButton = document.querySelector(".header__profile-button");
let closeButton = document.querySelector(".popup__close-button");
let saveButton = document.querySelector(".popup__save-button");
let popup = document.querySelector(".popup");

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

form.addEventListener("submit", submitForm);

cardLike = document
  .querySelector(".card__like")
  .addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__like_active");
    evt.target.classList.toggle("button");
    console.log("hello there");
  });

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector("#song-template").content;
  const songElement = songTemplate.querySelector(".song").cloneNode(true);

  songElement.querySelector(".song__artist").textContent = artistValue;
  songElement.querySelector(".song__title").textContent = titleValue;
  songElement
    .querySelector(".song__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("song__like_active");
    });

  songsContainer.append(songElement);
}
