class Card {
    constructor(title, link) {
        this._title = title;
        this._link = link;
        this._template = template;
    }

    _setEventListeners() {
        console.log("event set");
    }

    _getTemplate() {
        console.log("template got");
    }

    generateCard() {
        console.log(`${this._title} extracted from ${this._link}.`);
    }

    _renderBigImage() {

    }

    _getInfo() {
        
    }

}
/*
const newCard = new Card("Hollowknight", "Hallownest", "someTemplate");
newCard.generateCard();
console.log(newCard);
*/
/*
initialCards.forEach((item) => {
    const newNewCard = new Card(item.title, item.link, "bro");
    newNewCard.generateCard();
});
*/