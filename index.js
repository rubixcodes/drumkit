var i = 0;

while (i < document.querySelectorAll(".drum").length) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var elem = this;
        elem.style.color = "white";
        var elemhtml = elem.innerHTML;
        if (elemhtml === "w") {
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        }
        else if (elemhtml === "a") {var audio = new Audio("sounds/tom-1.mp3");
        audio.play();}
        else if (elemhtml === "s") {var audio = new Audio("sounds/tom-2.mp3");
        audio.play();}
        else if (elemhtml === "d") {var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();}
        else if (elemhtml === "j") {var audio = new Audio("sounds/tom-3.mp3");
        audio.play();}
        else if (elemhtml === "k") {var audio = new Audio("sounds/tom-4.mp3");
        audio.play();} 
        else if (elemhtml === "l") {var audio = new Audio("sounds/crash.mp3");
        audio.play();} 
    });
    i++;
}

