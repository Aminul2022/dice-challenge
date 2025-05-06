
let min=1;
let max=7;

// part1:randomNumber1 and image finalization
let randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1 * (max-min))+1; //1-6

let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png to dice6.png
let randomDiceSource = "./images/" + randomDiceImage;

let image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceSource);


// part1:randomNumber2 
let randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2 * (max-min))+1; //1-6

let randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png to dice6.png
let randomDiceSource2 = "./images/" + randomDiceImage2;

let image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceSource2);

// logic check and show
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!! &#128512";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!! &#128512";
}
else{
    document.querySelector("h1").innerHTML = "Draw !! &#128512";
}
