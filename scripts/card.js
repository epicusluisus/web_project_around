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

class Card {
    constructor(data) {
        this._title = data.title;
        this._image = data.link;
    }

    _getTemplate() {
        const cardElement = document.querySelector("#card-template").content.querySelector(".card").cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._cardElement = this._getTemplate();
        this._setEventListeners();
        
        this._cardElement.querySelector(".card__title").textContent = this._title;
        this._cardElement.querySelector(".card__image").src = this._image;
        this._cardElement.querySelector(".card__image").alt = `Photo of ${this._title}`;

        return this._cardElement;
    }

    _setEventListeners() {
        this._cardElement.querySelector(".card__like").addEventListener("click", () => {
            this._likeCard();
        })
        this._cardElement.querySelector(".card__delete-button").addEventListener("click", () => {
            this._deleteCard();
        }) 
        this._cardElement.querySelector(".card__image").addEventListener("click", () => {
            this._renderBigImage();
        })
    }

    _renderBigImage() {
        const bigImage = document.querySelector("#big-image-template").content.querySelector(".big-image").cloneNode(true);

        bigImage.querySelector(".big-image__image").src = this._image;
        bigImage.querySelector(".big-image__image").alt = this._title;
        bigImage.querySelector(".big-image__text").textContent = this._title.slice(9);
        openPopupOverlay();
        popup.append(bigImage);
    }

    _closeBigImage() {
        closePopupOverlay();
        bigImage.remove();
    }

    _likeCard() {
        this._cardElement.querySelector(".card__like").classList.toggle("card__like_active");
    }

    _deleteCard() {
        this._cardElement.remove();
        checkNoPost();
    }
}
/*
const closeBigImage = () => {
  formAddPlace.classList.add("popup_closed");
  formEditProfile.classList.add("popup_closed");
  closePopupOverlay();
  imageContainer.remove();
}
*/

const addCard = (cards) => {
    cards.forEach((item) => {
        const card = new Card(item);
        const cardElement = card.generateCard();
        contentGrid.prepend(cardElement);

        allCards.unshift(item);
        checkNoPost();
    })
}

addCard(initialCards);