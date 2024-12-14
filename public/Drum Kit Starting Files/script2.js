for (let i=0; i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(i);        
    });
}

document.addEventListener('keydown',function(e){
    var t = e.key;
    makeSound(t);
    buttonAnimation(0,t)
    
});

$("#gate").click(function(){
    $("#gate").addClass("pressed");
    setTimeout(function () {
      $("#gate").removeClass("pressed");
    }, 100);
    location.href = "/simon";
});

function makeSound(t){
    switch (t){
        case 'w':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        default:
            console.log(t);
            break;

    }
}
function buttonAnimation(i, t=''){
    if (t==''){
        var activeButton = document.querySelectorAll('.drum')[i];
        
    }else{
        var activeButton = document.querySelector('.'+t);
    }
    activeButton.classList.add('pressed');
        setTimeout(function(){
            activeButton.classList.remove('pressed');
        },100);
}