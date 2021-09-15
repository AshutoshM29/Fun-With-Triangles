const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputDiv = document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3) {
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
        if(sumOfAngles===180) {
            outputDiv.innerText = "Yay! We have a Triangle";
        }
        else {
            outputDiv.innerText = "Oh no, We can't make Triangle with these angles";
        }
}

isTriangleBtn.addEventListener("click", isTriangle);