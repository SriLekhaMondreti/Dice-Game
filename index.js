//generating first random number
var randomnumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage1 = "images/dice" + randomnumber1 + ".png"; // dice1.png to dice6.png

//changing the first dice randomly
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

//generating second random number
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomnumber2 + ".png";

//changing the second dice randomly
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

//publishing result
if (randomnumber1 > randomnumber2){
    document.querySelector("h2").innerHTML = "🥇 Player 1 wins!";
}
else if (randomnumber2 > randomnumber1) {
    document.querySelector("h2").innerHTML = "Player 2 wins! 🥇";
}
else {
    document.querySelector("h2").innerHTML = "Draw!"
}