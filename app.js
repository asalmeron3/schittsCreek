function revealQuote(cb_event) {
  let elem = cb_event.currentTarget;
  elem.children[1].style.display = "block";
}

function hideQuote(cb_event) {
 let elem = cb_event.currentTarget;
  elem.children[1].style.display = "none";
}

function addImageAndQuotes (array) {
  let charBoxes = document.getElementsByClassName("character-box");
  const numOfCharacters = charBoxes.length;
  for(i=0; i<numOfCharacters; i++ ){
    let quoteBubble = document.createElement('div');
    quoteBubble.className = "speech-container";

    let bubbleImage = document.createElement('img');
    bubbleImage.className = "speech-bubble";
    bubbleImage.src ="images/speechBubble.png";

    let quoteTextDiv = document.createElement('div');
    quoteTextDiv.className = "quote";
    quoteTextDiv.innerHTML = array[i];

    quoteBubble.appendChild(bubbleImage);
    quoteBubble.appendChild(quoteTextDiv);
    charBoxes[i].appendChild(quoteBubble);

    charBoxes[i].addEventListener("mouseover", revealQuote);
    charBoxes[i].addEventListener("mouseout", hideQuote);
  }
}

function makeCharacterPics(charImagePaths, listOfQuotes) {
  let charBoard = document.getElementsByClassName('character-board')[0];

  charImagePaths.forEach(path => {
    let charBox = document.createElement('div');
    charBox.className = "character-box";

    let charImage = document.createElement('img');
    charImage.className = "character-face";
    charImage.src =  "images/" + path; 

    charBox.appendChild(charImage);
    charBoard.appendChild(charBox);
  });

  addImageAndQuotes(listOfQuotes);
  
}