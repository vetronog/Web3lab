function Circle(){
    shape.apply(this, arguments);
    this.x = 100;
    this.y = 100;
    this.radius = 100;
    this.fillColor = "#ee5858";
    this.borderColor = "#f00";
    this.setRadius = function(radius)
    {
        this.radius = radius;
    };
    this.setX = function(x)
    {
        this.x = x;
    };
    this.setY = function(y)
    {
        this.y = y;
    };
}
Circle.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.fillColor;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.getBorderColor();
    ctx.stroke();
    ctx.closePath();
};
Circle.prototype.calculateArea = function(){
    return Math.PI*this.radius*this.radius;
};
Circle.prototype.calculatePerimeter = function(){
    return 2*Math.PI*this.radius;
};