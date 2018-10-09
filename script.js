var scores, roundScore, activePlayer, gamePlaying;
   
function init(){
     scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
/*TO remove winner class and again add active class */
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    /*again make active class to player-0*/
    document.querySelector('.player-0-panel').classList.add('active');
}

init();
    
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
          nextPlayer(); 
        }
    }    
});


document.querySelector('.btn-hold').addEventListener('click',function(){
    // store the score
    scores[activePlayer] += roundScore;
      // update the global score
      document.getElementById('score-' + activePlayer ).textContent = scores[activePlayer];
      // next player &&  Check if player won the game
     if(scores[activePlayer] >= document.querySelector('.final-score').value){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
}
     else{
      nextPlayer();
  }
});

document.querySelector
document.querySelector('.btn-new').addEventListener('click',init);
function nextPlayer() {
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            // document.querySelector('.player-0-panel').classList.remove('active');
            // document.querySelector('.player-1-panel').classList.add('active');
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.dice').style.display = 'none';
}