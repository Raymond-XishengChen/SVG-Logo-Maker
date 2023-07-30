const inquirer = require('inquirer');
const fs = require('fs');
const {Square, Circle, Triangle} = require('./lib/shape')


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

function confirmShape(response){
    if (response.shape === 'Square') {
        const confirmedSquare = new Square (response.shapeColor, response.logoText, response.textColor);
        return confirmedSquare.drawShape()
    } else if (response.shape === 'Circle') {
        const confirmedShape = new Circle (response.shapeColor, response.logoText, response.textColor);
        return confirmedShape.drawShape()
    } else if (response.shape === 'Triangle'){
        const confirmedShape = new Triangle (response.shapeColor, response.logoText, response.textColor);
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
                const svgData = confirmShape(response);
                fs.writeFile('./examples/SVGlogo.svg', svgData, (err)=>{
                    if (err){
                        console.log(err);
                    }
                })
            }
        });

}

init();