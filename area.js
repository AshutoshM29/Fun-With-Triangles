const sides = document.querySelectorAll(".side-input");
const areaButton = document.querySelector("#area-btn");
const outputDiv = document.querySelector("#output");

function calculateArea() {
    if(sides.value > 0){
    var area = areaOfTriangle(Number(sides[0].value), Number(sides[1].value));
    outputDiv.innerText= "The area of Triangle is : " + area + "units sq";
} else {
    outputDiv.innerText = "Values can't be negative !!";
}
}

function areaOfTriangle(b,h) {
    const area = (b*h)/2;
    return area;
}

areaButton.addEventListener("click", calculateArea);