
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
  // alert("Hi");
  var betMoney = parseInt($("#betMoneyId").val());
  // alert(betMoney);
  var choseNumber = parseInt($("#choseNumberId").val());
  // alert(choseNumber);

    if (playerMoney > 0) {
    var min = Math.min(minBet, playerMoney);
    var max = Math.min(maxBet, playerMoney);
    var random_number = getRandomNumber(minRand, maxRand)
    // var playerBet = Number(prompt("pick a bet between $" + min +" and $" + max+ " you have $ "+playerMoney+" left in you account!"));
    if (isNaN(betMoney)){
      $("#resultId").text("You have not provided us with an actual number!");
      return;
      // alert("You have not provided us with an actual number!");
      // continue;
    }

    if (betMoney < min || betMoney > max){
      $("#resultId").text("you should bet brtween $" + min + "and $" + max);
      return;
      // continue;
    }

    // var playerGuess = Number(prompt("pick a number btween " +minRand+ " and " +maxRand+ "!"))
      if (isNaN(choseNumber)){
        $("#resultId").text("you have not provided an actual number!");
        return;
        // continue;
      } 

    var substract = Math.abs(choseNumber - random_number)
    switch(substract){
      case 0:
          playerMoney += betMoney;
          $("#resultId").text("you won! your total money is $" + playerMoney);
        break;
      case 1:
          playerMoney == playerMoney;
          $("#resultId").text("your money is still $" + playerMoney);
        break;
      default:
          playerMoney -= betMoney;
        if (playerMoney > 0){
          $("#resultId").text("you did not get a close answer your money is still $" + playerMoney);
          }
        else{
          $("#resultId").text("you lost all your money!");
          }
      break;
    }

  }

}




