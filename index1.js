

function startGame(){
// -------------------set the random image for player1------------
var randomNum1 = Math.floor((Math.random()) * 6) + 1; //range 1 to 6
var randomDiceImage1 = "images/dice" + randomNum1 + ".png";
document.querySelector(".img1").setAttribute("src",randomDiceImage1);

// -------------------set the random image for player1------------
var randomNum2 = Math.floor((Math.random()) * 6) + 1; //range 1 to 6
var randomDiceImage2 = "images/dice" + randomNum2 + ".png";
document.querySelector(".img2").setAttribute("src",randomDiceImage2);

// ----------------to declare the winner--------------------------
if(randomNum1 === randomNum2){
  document.querySelector('h1').innerHTML = "😊Draw!";
}

else if(randomNum1>randomNum2){
  document.querySelector('h1').innerHTML = " 🎉Player1 Wins";
}
else{
  document.querySelector('h1').innerHTML = " 🎊Player2 Wins";
}
}

document.querySelector('button').onclick = function() {startGame()};
