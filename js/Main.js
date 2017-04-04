window.onload = function ()
{
    draw();
};

var selector = document.getElementById("current-shape");
selector.onclick = function()
{
    switch(selector.value)
    {
    case "circle":
        document.getElementById("circle-block").style.display = "block";
        document.getElementById("triangle-block").style.display = "none";
        document.getElementById("rectangle-block").style.display = "none";
        break;
    case "triangle":
        document.getElementById("circle-block").style.display = "none";
        document.getElementById("triangle-block").style.display = "block";
        document.getElementById("rectangle-block").style.display = "none";
        break;
    case "rectangle":
        document.getElementById("circle-block").style.display = "none";
        document.getElementById("triangle-block").style.display = "none";
        document.getElementById("rectangle-block").style.display = "block";
        break;
    }
};


var form  = document.getElementById("settings-form");
form.onchange = function ()
{
    draw();
};

function draw()
{
    var canvas = document.getElementById("holst");
    var ctx = canvas.getContext("2d");
    var info = document.getElementById("form-info");
    var type = document.getElementById("current-shape").value;
    var fillColor = document.getElementById("shape-fill-color").value;
    var borderColor = document.getElementById("shape-border-color").value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    switch (type)
    {
    case "circle" :
        drawCircle(ctx, info, fillColor, borderColor);
        break;
    case "triangle" :
        drawTriangle(ctx, info, fillColor, borderColor);
        break;
    case "rectangle" :
        drawRectangle(ctx, info, fillColor, borderColor);
        break;
    }
}

function drawCircle(ctx, info, fillColor, borderColor)
{
    var radius = document.getElementById("radius").value;
    var posX = document.getElementById("circleX").value;
    var posY = document.getElementById("circleY").value;

    var circle = new Circle();
    if (radius) { circle.setRadius(radius); }
    if (posX) { circle.setX(posX); }
    if (posY) { circle.setY(posY); }
    if (fillColor) { circle.setFillColor(fillColor); }
    if (borderColor) { circle.setBorderColor(borderColor); }
    circle.draw(ctx);
    info.innerHTML = "Площадь: " + circle.calculateArea() + "<br />Периметр: " + circle.calculatePerimeter();
}

function drawTriangle(ctx, info, fillColor, borderColor)
{
    var posX1 = document.getElementById("triangleX1").value;
    var posY1 = document.getElementById("triangleY1").value;
    var posX2 = document.getElementById("triangleX2").value;
    var posY2 = document.getElementById("triangleY2").value;
    var posX3 = document.getElementById("triangleX3").value;
    var posY3 = document.getElementById("triangleY3").value;

    var triangle = new Triangle();
    if (posX1) { triangle.setX1(posX1); }
    if (posY1) { triangle.setY1(posY1); }
    if (posX2) { triangle.setX2(posX2); }
    if (posY2) { triangle.setY2(posY2); }
    if (posX3) { triangle.setX3(posX3); }
    if (posY3) { triangle.setY3(posY3); }
    if (fillColor) { triangle.setFillColor(fillColor); }
    if (borderColor) { triangle.setBorderColor(borderColor); }
    triangle.draw(ctx);
    info.innerHTML = "Площадь: " + triangle.calculateArea() + "<br />Периметр: " + triangle.calculatePerimeter();
}

function drawRectangle(ctx, info, fillColor, borderColor)
{
    var posX1 = document.getElementById("rectangleX1").value;
    var posY1 = document.getElementById("rectangleY1").value;
    var posX2 = document.getElementById("rectangleX2").value;
    var posY2 = document.getElementById("rectangleY2").value;

    var rectangle = new Rectangle();
    if (posX1) { rectangle.setX1(posX1); }
    if (posY1) { rectangle.setY1(posY1); }
    if (posX2) { rectangle.setX2(posX2); }
    if (posY2) { rectangle.setY2(posY2); }
    if (fillColor) { rectangle.setFillColor(fillColor); }
    if (borderColor) { rectangle.setBorderColor(borderColor); }
    rectangle.draw(ctx);
    info.innerHTML = "Площадь: " + rectangle.calculateArea() + "<br />Периметр: " + rectangle.calculatePerimeter();
}