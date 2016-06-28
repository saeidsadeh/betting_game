
var playerMoney = 100;
var minBet = 5;
var maxBet = 10;
var minRand = 1;
var maxRand = 10;


function getRandomNumber(min, max) {
  var rand = Math.random() * (max - min + 1) + min;
  return Math.floor(rand);
}

function startGame (){
  while (playerMoney > 0) {
    var min = Math.min(minBet, playerMoney)
    var max = Math.min(maxBet, playerMoney)
    var random_number = getRandomNumber(minRand, maxRand)
    var playerBet = Number(prompt("pick a bet between $" + min +" and $" + max+ " you have $ "+playerMoney+" left in you account!"));
    if (isNaN(playerBet)){
      alert("You have not provided us with an actual number!");
      continue;
    }

    if (playerBet < min || playerBet > max){
      alert("you should bet brtween $" + min + "and $" + max);
      continue;
    }

    var playerGuess = Number(prompt("pick a number btween " +minRand+ " and " +maxRand+ "!"))
      if (isNaN(playerGuess)){
        alert("you have not provided an actual number!");
        continue;
      } 

    var substract = Math.abs(playerGuess - random_number)
    switch(substract){
      case 0:
          playerMoney += playerBet;
          alert("you won! your total money is $" + playerMoney);
        break;
      case 1:
          playerMoney == playerMoney;
          alert("your money is still $" + playerMoney);
        break;
      default:
          playerMoney -= playerBet
        if (playerMoney > 0){
          alert ("you did not get a close answer your money is still $" + playerMoney);
          }
        else{
          alert("you lost all your money!");
          }
      break;
    }

  }

}





