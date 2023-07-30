const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shape.js');
const Square = require('./lib/shape.js');
const Circle = require('./lib/shape.js');
const Triangle = require('./lib/shape.js');


const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Please enter the text that you want to appear on the SVG logo, up to three letters:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color keyword (or a mexadecimal number) for your text:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select the shape for your logo:',
        choices: ['Square', 'Circle', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color keyword (or a mexadecimal number) for your shape:'
    },
];

function confirmShape(data){
    if (data.shape === 'Square') {
        const confirmedShape = new Square (data.shapeColor, data.logoText, data.textColor);
        return confirmedShape.drawShape()
    } else if (data.shape === 'Circle') {
        const confirmedShape = new Circle (data.shapeColor, data.logoText, data.textColor);
        return confirmedShape.drawShape()
    } else {
        const confirmedShape = new Triangle (data.shapeColor, data.logoText, data.textColor);
        return confirmedShape.drawShape()
    }
}

function init(){
    inquirer.prompt(questions)
        .then ((response) => {
            if(response.logoText.length > 3){
                console.log("Please do not enter no more than 3 characters.")
                init();
            }else {
                confirmShape(response);
            }
        });

}