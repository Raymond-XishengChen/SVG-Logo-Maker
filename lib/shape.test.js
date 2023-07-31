const {Square, Circle, Triangle} = require("../lib/shape.js");

describe('Square',()=>{
    it('should create a line of code for a Square of pink color', ()=>{        
        const shape = new Square('pink','ABC','white');
        const result = shape.render();
        expect(result).toEqual('<rect x="50" width="200" height="200" fill=pink />');
    });
})

describe('Circle',()=>{
    it('should create a line of code for a Circle of black color', ()=>{        
        const shape = new Circle('black','EDF','white');
        const result = shape.render();
        expect(result).toEqual('<circle cx="150" cy="100" r="80" fill=black />');
    });
})

describe('Triangle',()=>{
    it('should create a line of code for a Triangle of blue color', ()=>{        
        const shape = new Triangle('blue','abc','yellow');
        const result = shape.render();
        expect(result).toEqual('<polygon points="150, 18 244, 182 56, 182" fill=blue />');
    });
})