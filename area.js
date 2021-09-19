const sides = document.querySelectorAll(".side-input");
const areaButton = document.querySelector("#area-btn");
const outputDiv = document.querySelector("#output");

function calculateArea() {
    var area = areaOfTriangle(Number(sides[0].value), Number(sides[1].value));
    outputDiv.innerText= "The area of Triangle is : " + area + "units sq";
    
}

function areaOfTriangle(b,h) {
    const area = (b*h)/2;
    return area;
}

areaButton.addEventListener("click", calculateArea);