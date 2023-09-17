
//detecting button press
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){ 
     var buttonInnerHTML=this.innerHTML;
     makeSound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
  
    });
}

//detecting keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})


//giving fucntionality
function makeSound(key){
    switch (key) {
        case 'w':
                var audio1 = new Audio('sound/crash.mp3');
                audio1.play();
            break;
        case 'a':
                var audio2 = new Audio('sound/kick-bass.mp3');
                audio2.play();
        break;
            case 'd':
                var audio3 = new Audio('sound/snare.mp3');
                audio3.play();
            break;
            case 'j':
                var audio4 = new Audio('sound/tom-1.mp3');
                audio4.play();
            break;
            case 'k':
                var audio5 = new Audio('sound/tom-2.mp3');
                audio5.play();
            break;
            case 'l':
                var audio6 = new Audio('sound/tom-3.mp3');
                audio6.play();
            break;
            case 'm':
                var audio7 = new Audio('sound/tom-4.mp3');
                audio7.play();
            break;
     
        default:
            console.log(buttonInnerHTML);
            break;
     }
}

function buttonAnimation(currentKey){
    var pressky=document.querySelector("."+currentKey);
    pressky.classList.add("pressed");
    setTimeout(function(){
        pressky.classList.remove("pressed");
    },100);
}