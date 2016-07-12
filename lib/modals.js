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

  // let newGame = new Game(Config.columns, Config.rows);

  closeWin.onclick = function() {
    winModal.style.display = "none";
    // newGame.start();
  };
}

////////////////////////////////////////////
export function loseModalSetup(){
  var endModal = document.getElementById('loseGameModal');
  var close = document.getElementsByClassName("closeLoseGame")[0];

  close.onclick = function() {
    endModal.style.display = "none";
  };
}

module.exports = {startModalSetup, winModalSetup, loseModalSetup};
