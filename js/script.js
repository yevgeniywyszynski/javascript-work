function playGame(playerIput){
  clearMessages()

function getMoveName(argMoveId){

  if(argMoveId == 1){
    return 'kamień';
  }else if(argMoveId == 2){
    return 'papier'
  }else if(argMoveId == 3){
    return 'nozyce'
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Twój ruch to: ' + argPlayerMove);
if( argComputerMove== 'kamień' && argPlayerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
  printMessage('remis');
}else if ( argComputerMove== 'nozyce' && argPlayerMove == 'papier'){
  printMessage('Komputer wygrywa!');
}else if ( argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
  printMessage('komputer wygrywa');
}else if ( argComputerMove== 'papier' && argPlayerMove == 'nozyce'){
  printMessage('Ty wygrywasz!');
}else if ( argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
  printMessage('remis');
}else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
  printMessage('remis');
}else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
  printMessage('komputer wygrywa');
}else if ( argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber)

printMessage('Mój ruch to: ' + computerMove);

//let playerIput = prompt('wybierz swoj ruch! 1:kamień, 2: papier, 3: nozyce.');
playerMove = getMoveName(playerIput);

displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissor').addEventListener('click', function(){
  playGame(3);
});
