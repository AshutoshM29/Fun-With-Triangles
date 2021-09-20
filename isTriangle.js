var inputs = document.querySelectorAll(".angle-input");
var isTriangleBtn = document.querySelector("#is-triangle-btn");
var outputDiv = document.querySelector("#output");
var formInput = document.querySelector("#form-input")

function calculateSumOfAngles(angle1,angle2,angle3) {
    var sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

function isTriangle() {

    var angle1 = Number(inputs[0].value);
    var angle2 = Number(inputs[1].value);
    var angle3 = Number(inputs[2].value);

    if(angle1 && angle2 && angle3) {
        var sumOfAngles = calculateSumOfAngles(angle1, angle2, angle3);
        if(sumOfAngles===180) {
            outputDiv.innerText = "Yay! We have a Triangle";
        }
        else {
            outputDiv.innerText = "Oh no, We can't make Triangle with these angles";
        }
    } else {
        outputDiv.innerText = "Please enter all the fields"
    }
}

isTriangleBtn.addEventListener("click", isTriangle);