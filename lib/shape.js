class Shape {
    drawShape(){}
}
class Square extends Shape{
    constructor(shapeColor, logoText, textColor){
        super(shapeColor, logoText, textColor);
        this.shapeColor = shapeColor;
        this.logoText = logoText;
        this.textColor = textColor;
    }
    
    drawShape(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
        <rect x="50" width="200" height="200" fill=${this.shapeColor} />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.logoText}</text>`;
    }
}

class Circle extends Shape{
    constructor(shapeColor, logoText, textColor){
        super(shapeColor, logoText, textColor);
        this.shapeColor = shapeColor;
        this.logoText = logoText;
        this.textColor = textColor;    
    }
    
    drawShape(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
        <circle cx="150" cy="100" r="80" fill=${this.shapeColor} />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.logoText}</text>`;
    }
}

class Triangle extends Shape{
    constructor(shapeColor, logoText, textColor){
        super(shapeColor, logoText, textColor);
        this.shapeColor = shapeColor;
        this.logoText = logoText;
        this.textColor = textColor;  
    }
    
    drawShape(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
        <polygon points="150, 18 244, 182 56, 182" fill=${this.shapeColor} />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.logoText}</text>`;
    }
}

module.exports = {Square, Circle, Triangle};

