var numOfColors = 6;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var stat = document.querySelector("#stat");
var headerColor = document.querySelector("h1");
var newColors = document.querySelector("#reset");
var rgbDisplay = document.getElementById("rgbDisplay");
var gameLevel = document.querySelectorAll(".level");

init();

function init(){
    startNewGame();
    setupGameLevels();
    setupColoredSquares();
}

function setupGameLevels(){
    for (var i = 0; i < gameLevel.length; i++) {
        gameLevel[i].addEventListener("click", function () {
            gameLevel[0].classList.remove("selected");
            gameLevel[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfColors = 3 : numOfColors = 6;
            startNewGame();
    
        });
    }
}

function setupColoredSquares(){
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
    
            if (clickedColor === pickedColor) {
                stat.textContent = "Correct!";
                newColors.textContent = "Guess again?";
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
}

newColors.addEventListener("click", function () {
    startNewGame();
});

function startNewGame() {
    colors = generateRandomColor(numOfColors);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    newColors.textContent = "New Colors";
    stat.textContent = "";
    headerColor.style.backgroundColor = "steelblue";

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

}


function pickColor() {
    var random = Math.floor((Math.random() * colors.length));
    return colors[random];
}


function generateRandomColor(num) {
    // Define an array
    var arr = [];
    // fill array with num random colors
    for (var i = 0; i < num; i++) {
        arr[i] = randomColor();
    }
    // Return array
    return arr;
}

function randomColor() {

    var r = Math.floor((Math.random() * 256));

    var g = Math.floor((Math.random() * 256));

    var b = Math.floor((Math.random() * 256));

    return "rgb(" + r + ", " + g + ", " + b + ")";
}