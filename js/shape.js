function shape(){
    this.setFillColor = function(color)
    {
        this.fillColor = color;
    };
    this.getFillColor = function(){
        return this.fillColor;
    };
    this.setBorderColor = function(color)
    {
        this.borderColor = color;
    };
    this.getBorderColor = function(){
        return this.borderColor;
    };
}

shape.prototype.draw = function(){};
shape.prototype.calculateArea = function(){};
shape.prototype.calculatePerimeter = function(){};

