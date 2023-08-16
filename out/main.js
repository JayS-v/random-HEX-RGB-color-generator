"use strict";
const body = document.querySelector('body');
const button = document.querySelector('.button');
const colorDescription = document.querySelector('.color-description');
const switchToRgb = document.querySelector('.default-checkbox');
button.addEventListener('click', () => {
    const randomColor = switchToRgb.checked ? rgbColorGenerator() : hexColorGenerator();
    letSeeMyColor(randomColor);
});
// HEX GENERATOR : returns random hex color as string
const hexColorGenerator = () => {
    const hexColorValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    // '#' + random hexColorValues[] element each iteration
    for (let i = 0; i < 6; i++) {
        hexColor += hexColorValues[Math.floor(Math.random() * hexColorValues.length)]; // [random Integer until 15 inclusive] 
    }
    return hexColor;
};
// RGB GENERATOR : returns random rgb color as string
const rgbColorGenerator = () => {
    const getRandomInteger = (min, max) => {
        const randomResult = min + Math.random() * (max + 1 - min);
        return Math.floor(randomResult);
    };
    const randomRgbColor = `rgb(${getRandomInteger(0, 255)},${getRandomInteger(0, 255)},${getRandomInteger(0, 255)})`;
    return randomRgbColor;
};
//changes HTML page styles and shows color value only
const letSeeMyColor = (someColor) => {
    body.style.backgroundColor = colorDescription.style.color = someColor;
    const showColorValueOnly = () => {
        const firstColorCharacter = someColor.slice(0, 1);
        const HexOrRgbValueOnly = firstColorCharacter === '#' ? someColor.slice(1, 7) : //if hex, without "#"
            firstColorCharacter === 'r' ? someColor.slice(3, 16) : //if rgb, without "rgb"
                'is not rgb or HEX color !';
        return HexOrRgbValueOnly;
    };
    return colorDescription.textContent = showColorValueOnly();
};
//# sourceMappingURL=main.js.map