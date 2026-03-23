//the following code is completly optional and introduces 2 things:
//1: an easter egg in which, when you press keys acordingly in a certain pattern, 2 images of my favorite videogames will apear.
//2: an option to navigate the gallery easier with left and right inputs

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
    addCard("Hollow Knight", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d0/02/e3/d002e325-299d-f87f-a737-7d7ad3c628ae/840095520225.jpg/1200x1200bf-60.jpg");
    addCard("Enter the Gungeon", "https://image.api.playstation.com/vulcan/ap/rnd/202010/1205/7iRqnxpwQtVuEFuOjBAW1hFz.png");
    alert("Cheat Code Activated");
  }
   
  //navigate images with keyboard shortcuts
  if (isBigImageActive === true && e.key.toLowerCase() === "arrowleft") {
    let previousImage = currentImage.parentElement.previousElementSibling.children[0];
    renderBigImage(previousImage.alt, previousImage.src, previousImage);
  }
    
  if (isBigImageActive === true && e.key.toLowerCase() === "arrowright") {
    let nextImage = currentImage.parentElement.nextElementSibling.children[0];
    renderBigImage(nextImage.alt, nextImage.src, nextImage);
  }
})