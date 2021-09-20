var sides = document.querySelectorAll(".side-input");
var hypotenuseButton = document.querySelector("#hypotenuse-btn");
var outputDiv = document.querySelector("#output");

function calulateSumOfSquares(a,b) {
    var sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {

    var side1 = Number(sides[0].value);
    var side2 = Number(sides[1].value);

    if(side1 && side2) {
    var sumOfSquares = calulateSumOfSquares(side1, side2);
    var lengthOfHypotenuse = (Math.sqrt(sumOfSquares)).toFixed(2);
    outputDiv.innerText = "The length of hypotenuse is : " + lengthOfHypotenuse + " units";
} else {
    outputDiv.innerText = "Please enter all values"
}
}

hypotenuseButton.addEventListener("click", calculateHypotenuse);