var numOfColors = 6;
var colors = generateRandomColor(numOfColors);


var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var rgbDisplay = document.getElementById("rgbDisplay");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

easy.addEventListener("click",function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numOfColors = 3;
    colors = generateRandomColor(numOfColors);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
});

hard.addEventListener("click",function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numOfColors = 6;
    colors = generateRandomColor(numOfColors);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
});


rgbDisplay.textContent = pickedColor;

var stat = document.querySelector("#stat");

var headerColor = document.querySelector("h1");

var newColors = document.querySelector("#reset");

newColors.addEventListener("click", function(){
    headerColor.style.backgroundColor = "steelblue";
    newColors.textContent = "New Colors";
    stat.textContent = "";
    colors = generateRandomColor(numOfColors);
    for(var i =0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
});







for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            stat.textContent = "Correct!";
            newColors.textContent = "Play again?";
            headerColor.style.backgroundColor = clickedColor;
            for (var j = 0; j < squares.length; j++) {
                squares[j].style.backgroundColor = clickedColor;
            }

        } else {
            stat.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }

    });
}

function startGame(){
    
}


function pickColor() {

    var random = Math.floor((Math.random() * colors.length));
    return colors[random];

}


function generateRandomColor(num){
    // Define an array
    var arr = [];
    // fill array with num random colors
    for(var i = 0; i < num; i++)
    {
         arr[i] = randomColor();
    }
    // Return array
    return arr;
}

function randomColor(){

    var r = Math.floor((Math.random() * 256));

    var g = Math.floor((Math.random() * 256));

    var b = Math.floor((Math.random() * 256));

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
