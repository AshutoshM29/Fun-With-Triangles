const sides = document.querySelectorAll(".side-input");
const areaButton = document.querySelector("#area-btn");
const outputDiv = document.querySelector("#output");

function calculateArea() {

    var length = Number(sides[0].value);
    var height = Number(sides[1].value);
    if(length && height) {
    var area = areaOfTriangle(length, height);
    outputDiv.innerText= "The area of Triangle is : " + area + "sq units";
    } else {
        outputDiv.innerText ="Enter all the values !"
    } 
}

function areaOfTriangle(b,h) {
    const area = (b*h)/2;
    return area;
}

areaButton.addEventListener("click", calculateArea);