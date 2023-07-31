// Insert all required modules from other files and system
const inquirer = require('inquirer');
const fs = require('fs');
const {Square, Circle, Triangle} = require('./lib/shape')

// SVG logo content and size of the created logo
const SVGHeader = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">`;

const SVGFooter = `</svg>`;

// Contents of the prompt questions, ask for text, text color, shape and shape color
const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Please enter the text that you want to appear on the SVG logo, up to three letters:',
        // Error handler if the input has more than 3 characters
        validate: (logoText) => {
            if (logoText.length > 3){
                console.log('\n Please enter no more than 3 characters')
            } else {
                return true;
            }
        }
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

// Confirm selected shape and create a new shape element from the constructor
function confirmShape(response){
    if (response.shape === 'Square') {
        const confirmedShape = new Square (response.shapeColor, response.logoText, response.textColor);
        console.log(confirmShape);
        // Combining contents for SVG logo formatting, selected shape with desired color and selected text with desired color
        return SVGHeader + confirmedShape.render() + confirmedShape.addText() + SVGFooter
    } else if (response.shape === 'Circle') {
        const confirmedShape = new Circle (response.shapeColor, response.logoText, response.textColor);
        return SVGHeader + confirmedShape.render() + confirmedShape.addText() + SVGFooter
    } else if (response.shape === 'Triangle'){
        const confirmedShape = new Triangle (response.shapeColor, response.logoText, response.textColor);
        return SVGHeader + confirmedShape.render() + confirmedShape.addText() + SVGFooter
    }
}

// Start application 
function init(){
    inquirer.prompt(questions)
        .then ((response) => {
                const svgData = confirmShape(response);
                fs.writeFile('./examples/SVGlogo.svg', svgData, (err)=>{
                    if (err){
                        console.log(err);
                    } else {
                        console.log ('...Created SVG file under ./examples');
                    }
                })
        });

}

init();
