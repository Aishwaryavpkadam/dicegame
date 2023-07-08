var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "./images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "./images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML = "🥂 Player 1 Wins!";
}

else if(randomNumber2>randomNumber1){
    document.querySelector("h2").innerHTML = "Player 2 Wins! 🥂";
} 

else{
    document.querySelector("h2").innerHTML = "It's a Tie 😂";
}