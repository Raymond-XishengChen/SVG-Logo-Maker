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
    
    render(){
        return `<rect x="50" width="200" height="200" fill='${this.shapeColor}' />`
    }

    addText(){
        return `
        <text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.textColor}'>${this.logoText}</text>`
    }
}

class Circle extends Shape{
    constructor(shapeColor, logoText, textColor){
        super(shapeColor, logoText, textColor);
        this.shapeColor = shapeColor;
        this.logoText = logoText;
        this.textColor = textColor;    
    }
    
    render(){
        return `<circle cx="150" cy="100" r="80" fill='${this.shapeColor}' />`
    }
    addText(){
        return`
        <text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.textColor}'>${this.logoText}</text>`
    }
}

class Triangle extends Shape{
    constructor(shapeColor, logoText, textColor){
        super(shapeColor, logoText, textColor);
        this.shapeColor = shapeColor;
        this.logoText = logoText;
        this.textColor = textColor;  
    }
    
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill='${this.shapeColor}' />`;
    }
    addText(){
        return `
        <text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.textColor}'>${this.logoText}</text>`
    }
}

module.exports = {Square, Circle, Triangle};

