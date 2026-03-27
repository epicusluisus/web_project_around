//the following code is completely optional
//it allows you to input the classic Konami code and add 3 secret cards about my favorite videogames

let konamiCodePosition = 0;
const konamicode = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "a", "b"];
const secretVideogames = [
  {
    "title": "Hollow Knight",
    "link": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d0/02/e3/d002e325-299d-f87f-a737-7d7ad3c628ae/840095520225.jpg/1200x1200bf-60.jpg"
  },
  {
    "title": "Enter the Gungeon",
    "link": "https://image.api.playstation.com/vulcan/ap/rnd/202010/1205/7iRqnxpwQtVuEFuOjBAW1hFz.png"
  },
  {
    "title": "Disco Elysium",
    "link": "https://gamefaqs.gamespot.com/a/box/7/1/8/779718_front.jpg"
  }
];

function handleKeydown(e) {
   if (e.key.toLowerCase() === konamicode[konamiCodePosition]) {
    konamiCodePosition += 1;
  } else if (!(e.key.toLowerCase() === konamicode[konamiCodePosition]) && e.key.toLowerCase() === "arrowup") {
    konamiCodePosition = 1;
  } else {
    konamiCodePosition = 0;
  }

  if (konamiCodePosition === 10) {
    addCard(secretVideogames);
    alert("Cheat Code Activated");
    document.removeEventListener("keydown", handleKeydown);
  }
}

document.addEventListener("keydown", handleKeydown);