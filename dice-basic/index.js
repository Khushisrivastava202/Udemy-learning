


var randomNumber1=Math.floor(Math.random()*6+1);
var randomDiceImage1 =randomNumber1 + ".png";
var image1 =document.querySelectorAll(".apply-grid img")[0].setAttribute("src",randomDiceImage1);
;

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage2 =randomNumber2 + ".png";
var image1 =document.querySelectorAll(".apply-grid img")[1].setAttribute("src",randomDiceImage2);





var winTeam=document.querySelector("h1");
 if(randomNumber1>randomNumber2){
    winTeam.innerHTML="🚩 Player 1 wins";

 }
 else if(randomNumber1<randomNumber2){
    winTeam.innerHTML=" Player 2 wins 🚩";
 }
 else {
    winTeam.innerHTML="draw";

 }
