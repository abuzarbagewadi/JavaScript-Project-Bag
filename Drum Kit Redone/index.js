
var temp = document.getElementsByClassName("drum");

// Handling the event of a mouse click on the screen --start
for(i=0;i<temp.length;i++){
    temp[i].addEventListener("click",handleClick); 
}

function handleClick(){
    var keyName = this.innerHTML;
    sound(keyName);  
    buttonAnimation(keyName);  
}
// Handling the event of a mouse click on the screen --end

// Handling the event of a button on keybpard being pressed --start
document.addEventListener("keydown",function(event){
    sound(event.key);
    buttonAnimation(event.key);
})

// Handling the event of a button on keyboard being pressed --end


/*
    The sounds to be played corresponding to the various alphabets which can be triggered
    by pressing buttons on keyboard and clicking on the screeen handles by functions written above. 
*/

function sound(key){

    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();            
            break;
        case "a":
            var kickbass = new Audio('sounds/kick-bass.mp3');
            kickbass.play();;            
            break;

        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();            
            break;

        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();            
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();            
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();            
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();            
            break;

        default:
            break;
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed");}, 100);
}