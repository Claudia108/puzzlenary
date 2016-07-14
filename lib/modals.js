const events = require('events');
const resetGame = new events.EventEmitter();
////////////////////////////////////////////
export function startModalSetup(){

  var startModal = document.getElementById('startModal');

  var closeStart = document.getElementsByClassName("closeStart")[0];

  closeStart.onclick = function() {
    startModal.style.display = "none";
  };
}

////////////////////////////////////////////
export function winModalSetup(){
  var winModal = document.getElementById('winGameModal');

  var closeWin = document.getElementsByClassName("closeWinGame")[0];

  closeWin.onclick = function() {
    winModal.style.display = "none";
    resetPonies();
  };
}

////////////////////////////////////////////
export function loseModalSetup(){
  var endModal = document.getElementById('loseGameModal');

  var close1 = document.getElementsByClassName("closeLoseGame")[0];
  var close2 = document.getElementsByClassName("closeLoseGame")[1];

  close1.onclick = function() {
    endModal.style.display = "none";
    resetPonies();
    document.dispatchEvent(new CustomEvent('reset-game', {detail: 'level'}));

  };
  close2.onclick = function() {
    endModal.style.display = "none";
    resetPonies();
    document.dispatchEvent(new CustomEvent('reset-game', {detail: 'game'}));
  };
}

function resetPonies(){
  document.querySelector('.lt3').style.visibility='visible';
  document.querySelector('.lt2').style.visibility='visible';
  document.querySelector('.lt1').style.visibility='visible';
}
module.exports = {startModalSetup, winModalSetup, loseModalSetup};
