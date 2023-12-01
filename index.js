var i = 0;

while (i < document.querySelectorAll(".drum").length) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("Hello!");
    });
    i++;
}

