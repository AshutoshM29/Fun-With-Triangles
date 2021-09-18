const sides = document.querySelectorAll(".side-input");
const hypotenuseButton = document.querySelector("#hypotenuse-btn");
const outputDiv = document.querySelector("#output");

function calulateSumOfSquares(a,b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    if(sides.value>0) {
    const sumOfSquares = calulateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputDiv.innerText = "The length of hypotenuse is : " + lengthOfHypotenuse + "units";
} else {
    outputDiv.innerText = "Values can't be negative !!"
}
}

hypotenuseButton.addEventListener("click", calculateHypotenuse);