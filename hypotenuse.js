const sides = document.querySelectorAll(".side-input");
const hypotenuseButton = document.querySelector("#hypotenuse-btn");
const outputDiv = document.querySelector("#output");

function calulateSumOfSquares(a,b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    const sumOfSquares = calulateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputDiv.innerText = "The length of hypotenuse is : " + lengthOfHypotenuse;
}

hypotenuseButton.addEventListener("click", calculateHypotenuse);