function Triangle(){
    shape.apply(this, arguments);
    this.X1 = 400;
    this.Y1 = 400;
    this.X2 = 0;
    this.Y2 = 400;
    this.X3 = 200;
    this.Y3 = 0;
    this.fillColor = "#ee5858";
    this.borderColor = "#f00";
    this.setX1 = function(x)
    {
        this.X1 = x;
    };
    this.setY1 = function(y)
    {
        this.Y1 = y;
    };
    this.setX2 = function(x)
    {
        this.X2 = x;
    };
    this.setY2 = function(y)
    {
        this.Y2 = y;
    };
    this.setX3 = function(x)
    {
        this.X3 = x;
    };
    this.setY3 = function(y)
    {
        this.Y3 = y;
    };
}
Triangle.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.moveTo(this.X1, this.Y1);
    ctx.lineTo(this.X2, this.Y2);
    ctx.lineTo(this.X3, this.Y3);
    ctx.lineTo(this.X1, this.Y1);
    ctx.fillStyle = this.getFillColor();
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.getBorderColor();
    ctx.stroke();
    ctx.closePath();
};
Triangle.prototype.calculatePerimeter = function(){
    var firstEdge = Math.sqrt(Math.pow(this.X2-this.X1, 2) + Math.pow(this.Y2-this.Y1, 2));
    var secondEdge = Math.sqrt(Math.pow(this.X3-this.X2, 2) + Math.pow(this.Y3-this.Y2, 2));
    var thirdEdge = Math.sqrt(Math.pow(this.X1-this.X3, 2) + Math.pow(this.Y1-this.Y3, 2));
    return firstEdge + secondEdge + thirdEdge;
};

Triangle.prototype.calculateArea = function(){
    var Geron = this.calculatePerimeter()/2;
    var firstEdge = Math.sqrt(Math.pow(this.X2-this.X1, 2) + Math.pow(this.Y2-this.Y1, 2));
    var secondEdge = Math.sqrt(Math.pow(this.X3-this.X2, 2) + Math.pow(this.Y3-this.Y2, 2));
    var thirdEdge = Math.sqrt(Math.pow(this.X1-this.X3, 2) + Math.pow(this.Y1-this.Y3, 2));
    return Math.sqrt(Geron*(Geron - firstEdge)*(Geron - secondEdge)*(Geron - thirdEdge));
};