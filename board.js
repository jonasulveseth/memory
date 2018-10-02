function startGame() {
  document.getElementById('start-wrapper').style.display = 'none'
  loadTiles();
  nextPlayer();
  startGameClock();
}

function loadTiles() {
  var tiles = [];
  for (var t = 1; t < 10; t++) {
    tiles.push(t+'.jpg');
    tiles.push(t+'.jpg');
  }
  shuffle(tiles);
  // Build DOM
  var parent       = document.getElementById('board');
  var tileTemplate = document.getElementById('tile-template');
  for (var t = 0;t <= (tiles.length -1); t++) {
    // Change id of template before cloning
    document.getElementById('back-image').src="images/"+tiles[t];
    // Clone element
    var clone  = tileTemplate.cloneNode(true);
    // Set unique ID
    clone.id   = t+1; 
    // Set data attribute with image ID
    clone.dataset.id = tiles[t];
    // Add eventlistener for click
    clone.addEventListener("click",flipCard);
    parent.appendChild(clone);
  }
  parent.removeChild(tileTemplate);
}

function setScoreLevel() {
  // Update scorelevel
}

function finishGame() {
  finishDialogue  = document.getElementById('finished-game');
  playerContainer = document.getElementById('player');
  // calculate winning player
  player1Score = document.getElementById('player-1').textContent;
  player2Score = document.getElementById('player-2').textContent;
  if(player1Score > player2Score) {
    playerContainer.innerHTML     = 'Player 1'
  } else {
    playerContainer.innerHTML     = 'Player 2'
  }
  
  finishDialogue.style.display  = 'block';
  playAgainButton               = document.getElementById('restart-button');
  //playAgainButton.addEventListener('click', location.reload());
}

function updateScore() {  
  // count total number of data attributes
}

function isDone() {
  pairedCount = document.getElementsByClassName('paired').length
  if(pairedCount == 18) {
    finishGame();
  }
} 

function startGameClock() {
  // start timer
  // after a while change setScorelevel
  console.log('clock started')
}

// Shuffle an array of tiles
function shuffle(array) {
  console.log(array);
  for (var x = array.length - 1;x > 0; x--) {
    var randomNumber    = Math.ceil(Math.random() * (x+1));
    var arrayValue      = array[x]
    array[x]            = array[randomNumber];
    array[randomNumber] = arrayValue;
  }
  return array
}