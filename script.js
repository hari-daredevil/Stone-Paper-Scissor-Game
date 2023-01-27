/* :::::::::::::::::::::

:::::    :::::         ::::    ::::
:::::    :::::         ::::  :::: 
::::::::::::::         :::::::
::::::::::::::         ::::::: 
:::::    :::::   :::   ::::  :::: 
:::::    :::::   :::   ::::     ::::  

::::::::::::::::::::::::*/

//Getting all options to change with JS
var pedra = document.getElementById("pedra");
var papel = document.getElementById("papel");
var tesoura = document.getElementById("tesoura");

//Getting the player score and computer score
var playerScore = document.getElementById("score_a");
var computerScore = document.getElementById("score_b");
//Defining variables to change points and verification
var player = 0;
var computer = 0;
var ingame = 0;
var choice;
var computerChoice;

//Function to generate a random number until the computer choice be different of player choice - number goes of 1 until 3
function randomChoice() {
  // var randomChoice = Math.floor(Math.random() * 3) + 1 // generating a random number
  var randomChoice = Math.floor(Math.random() * 4); //gerando o numero aleatorio | generating a random number
  computerChoice = randomChoice; //definindo a variavel da escolha do computador | defining the variable of the computer choice
}

//Function called when you pick a option
function pickOption(o) {
  if (choice == undefined) {
    choice = o;

    if (o == 1) {
      pedra.classList = "player";
    } else if (o == 2) {
      papel.classList = "player";
    } else {
      tesoura.classList = "player";
    }

    if (computerChoice == undefined) {
      //I did called the function to generate a random number to computer, but if it's equals the player choice, i runed a "while", while computer choice be equals the player choice, it's will generate another number until be diferente
      randomChoice();
      while (computerChoice == choice) {
        randomChoice();
      }

      if (computerChoice == 1) {
        pedra.classList = "computer";
      } else if (computerChoice == 2) {
        papel.classList = "computer";
      } else {
        tesoura.classList = "computer";
      }
    }

    getWin(choice, computerChoice); // Function to verify if won passing the player choice and the computer choice
  } else {
    alert("Please, Press New Game"); // If player already played, comes a alert saying that can't play again
  }
}

function getWin(p, c) {
  //Verify the player choice and the computer choose to see who won
  if (ingame == 1) {
    if (p == 1 && c == 2) {
      computer++;
    } else if (p == 1 && c == 3) {
      player++;
    } else if (p == 2 && c == 1) {
        player++;
    } else if (p == 2 && c == 3) {
      computer++;
    } else if (p == 3 && c == 1) {
      computer++;
    } else if (p == 3 && c == 2) {
      player++;
    }

    playerScore.innerHTML = player;
    computerScore.innerHTML = computer;
  }
  ingame = 0;
}

function newGame() {
  //It's set the status of the game to 1, to make player play again
  if (ingame == 0) {
    ingame = 1;
    choice = undefined;
    computerChoice = undefined;
    if(player+computer != 10){
        if(player>computer){
result.innerHTML=" None";
}
else if(player==computer){
    result.innerHTML="None";
        }
        else{
            result.innerHTML="None";
        }
    }
    
    pedra.classList = "";
    papel.classList = "";
    tesoura.classList = "";
    playerScore.innerHTML = player;
    computerScore.innerHTML = computer;
  }
if(player+computer==10){
    if(true){
        if(player>computer){
result.innerHTML="you";
}
else if(player==computer){
    result.innerHTML="No winner";
        }
        else{
            result.innerHTML="Hari";
        }
    }
    player = 0;
    computer = 0;
    ingame = 0;


}

}
