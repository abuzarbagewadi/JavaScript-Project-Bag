var randomNumber1 = Math.floor((Math.random()*6)) +1; //generating random number

var randomDiceImage = "dice"+randomNumber1+".png"; //generating the image name

var imgSource1 = "images/"+randomDiceImage; // gen. image source

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",imgSource1);

var randomNumber2 = Math.floor((Math.random()*6)) +1;

var imgSource2 = "images/dice"+randomNumber2+ ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",imgSource2);


if(randomNumber1>randomNumber2){
    var text = document.querySelector("h1");
    text.innerText="Player1 Wins!";
}
else if(randomNumber1<randomNumber2){
    var text = document.querySelector("h1");
    text.innerText="Player2 Wins!";
}
else if(randomNumber1==randomNumber2){
    var text = document.querySelector("h1");
    text.innerText="Draw!";
}


// document.querySelectorAll("img1")

// switch(randomNumber1){
//     case 1:
//         document.getElementsByClassName[0]("dice img1").setAttribute("src","images/dice1.png");
//         break;
//     case 2:
//         document.getElementsByClassName[0]("dice img1").setAttribute("src","images/dice2.png");
//         break;
//     case 3:
//         document.getElementsByClassName[0]("dice img1").setAttribute("src","images/dice3.png");
//         break;
//     case 4:
//         document.getElementsByClassName[0]("dice img1").setAttribute("src","images/dice4.png");
//         break;
//     case 5:
//         document.getElementsByClassName[0]("dice img1").setAttribute("src","images/dice5.png");
//         break;
//     case 6:
//         document.getElementsByClassName[0]("dice img1").setAttribute("src","images/dice6.png");
//         break;
// }

// var x = Math.random();
// var dec = x*6;
// var randomNumber2 = Math.floor(dec)+1;

// switch(randomNumber2){
//     case 1:
//         document.getElementsByClassName[0]("dice img2").setAttribute("src","images/dice1.png");
//         break;
//     case 2:
//         document.getElementsByClassName[0]("dice img2").setAttribute("src","images/dice2.png");
//         break;
//     case 3:
//         document.getElementsByClassName[0]("dice img2").setAttribute("src","images/dice3.png");
//         break;
//     case 4:
//         document.getElementsByClassName[0]("dice img2").setAttribute("src","images/dice4.png");
//         break;
//     case 5:
//         document.getElementsByClassName[0]("dice img2").setAttribute("src","images/dice5.png");
//         break;
//     case 6:
//         document.getElementsByClassName[0]("dice img2").setAttribute("src","images/dice6.png");
//         break;
// }
