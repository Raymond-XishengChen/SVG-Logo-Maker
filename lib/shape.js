class Shape {
    constructor(logoShape, shapeColour, logoText, textColour){
        this.logoShape = logoShape;
        this.shapeColour = shapeColour;
        this.logoText = logoText;
        this.textColour = textColour;
    }

    drawShape(){}
}
class Square extends Shape{
    constructor(shapeColour, logoText, textColour){
        super(shapeColour, logoText, textColour);
    }
    
    drawShape(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
        <rect width="100%" height="100%" fill=${this.shapeColour} />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColour}>${this.logoText}</text>`;
    }
}

class Circle extends Shape{
    constructor(shapeColour, logoText, textColour){
        super(shapeColour, logoText, textColour);
    }
    
    drawShape(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
        <circle cx="150" cy="100" r="80" fill=${shapeColour} />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColour}>${this.logoText}</text>`;
    }
}

class Triangle extends Shape{
    constructor(shapeColour, logoText, textColour){
        super(shapeColour, logoText, textColour);
    }
    
    drawShape(){
        return `<circle cx="25" cy="75" r="20" fill="${shapeColour}"/>`;
    }
}

module.exports = Shape;
module.exports = Square;
module.exports = Circle;
module.exports = Triangle;
