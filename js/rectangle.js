function Rectangle(){
    shape.apply(this, arguments);
    this.X1 = 100;
    this.Y1 = 100;
    this.X2 = 50;
    this.Y2 = 50;
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
    this.getWidth = function()
    {
        return Math.abs(this.X2 - this.X1);
    };
    this.getHeight = function()
    {
        return Math.abs(this.Y2 - this.Y1);
    };
}
Rectangle.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.fillStyle = this.getFillColor();
    ctx.fillRect(this.X1, this.Y1, this.getWidth(), this.getHeight());
    ctx.strokeStyle = this.getBorderColor();
    ctx.lineWidth = 5;
    ctx.strokeRect(this.X1, this.Y1, this.getWidth(), this.getHeight());
    ctx.closePath();
};
Rectangle.prototype.calculatePerimeter = function(){
    return (2*this.getWidth() + 2*this.getHeight());
};

Rectangle.prototype.calculateArea = function(){
    return this.getHeight() * this.getWidth();
};
