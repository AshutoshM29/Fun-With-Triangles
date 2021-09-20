var inputs = document.querySelectorAll(".angle-input");
var isTriangleBtn = document.querySelector("#is-triangle-btn");
var outputDiv = document.querySelector("#output");
var formInput = document.querySelector("#form-input")

function calculateSumOfAngles(angle1,angle2,angle3) {
    var sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

function isTriangle() {
    var sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
        if(sumOfAngles===180) {
            outputDiv.innerText = "Yay! We have a Triangle";
        }
        else {
            outputDiv.innerText = "Oh no, We can't make Triangle with these angles";
        }
}

isTriangleBtn.addEventListener("click", isTriangle);