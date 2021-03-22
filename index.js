
// Generate 1st Random Number

var randomNumber1=Math.floor(Math.random()*6) + 1;

//select image_Number with Number as generated Random Number

var randomImage1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

// Generate 2nd Random Number

var randomNumber2=Math.floor(Math.random()*6) + 1;

//select image_Number with Number as generated Random Number

var randomImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

//Compare both the numbers and display the result

if(randomNumber1 > randomNumber2)
document.querySelector("h1").innerHTML="Player 1 Wins!";
else if(randomNumber1 < randomNumber2)
document.querySelector("h1").innerHTML="Player 2 Wins!";
else
document.querySelector("h1").innerHTML="Draw!";
