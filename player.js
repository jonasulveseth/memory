function nextPlayer() {
  if (activePlayer == 'player-1') {
    activePlayer = 'player-2'
    setTimeout(function(){
      document.getElementById('player-1-name').classList.remove('active');
      document.getElementById('player-2-name').classList.add('active');
    }, 500 );
  } else {
    activePlayer = 'player-1';
    setTimeout(function(){
      document.getElementById('player-2-name').classList.remove('active');
      document.getElementById('player-1-name').classList.add('active');
    },500);
  }
  return activePlayer;
}

function flipCard() {
  // flip
  this.childNodes[1].style.transform = 'rotateY(180deg)';
  // Set as open
  this.classList.add('open');
  var openTiles = document.getElementsByClassName('open')
  
  // If 2 tiles are open
  if (openTiles.length == 2) {
    // It is a match
    if (openTiles[0].dataset.id == openTiles[1].dataset.id) {
      // Update scoreboard
      addScore();
      for (var x = openTiles.length;x > 0; x--) {
        openTiles[x-1].classList.add('paired',activePlayer);
        openTiles[x-1].classList.remove('open');
      }
      nextPlayer();
      isDone();
    } else {
      // Flip back cards
      setTimeout(function(){
        for (var i = 0;i < openTiles.length; i++) {
          openTiles[i].childNodes[1].style.transform = "";
        }
        for (var x = openTiles.length;x > 0; x--) {
          openTiles[x-1].classList.remove('open');
        }
      }, 1000)
      nextPlayer();
    }
  }
}

function addScore() {
  playerScore = document.getElementById(activePlayer);
  // Calculate all data attributes
  currentScore = playerScore.innerHTML;
  console.log(currentScore);
  newScore = currentScore + 1
  playerScore.innerHTML = parseInt(currentScore)+1;
}