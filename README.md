# SVG-Logo-Maker

## Description
This application allows the user to generate simple logos for various purposes.
It takes inputs for the text you want to be included in the logo (up to 3 characters), then the color of the text.
Then it also provides selection of shapes: Square, Circle and Triangle, then input of the color of the shape.
And the application will generate a logo of your choice and export it as an SVG file. 
## User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Walkthrough Video
[Walkthrough Video](https://watch.screencastify.com/v/OREPBzBhNzni8Xy9PRyc)

![](./lib/walkthrough_videos/SVGLogo_Maker_Walkthrough.gif)
![](./lib/walkthrough_videos/SVGLogo_Maker_Walkthrough.webm)