const body = document.querySelector('body') as HTMLBodyElement
const button = document.querySelector('.button') as HTMLButtonElement
const colorDescription = document.querySelector<HTMLElement>('.color-description')!
const switchToRgb = document.querySelector<HTMLInputElement>('.default-checkbox')!

button.addEventListener('click', () : void => {
    const randomColor :string = switchToRgb.checked ? rgbColorGenerator(): hexColorGenerator()
    letSeeMyColor(randomColor);   
})

// HEX GENERATOR : returns random hex color as string
const hexColorGenerator = (): string => {
    const hexColorValues: ReadonlyArray<number|string>  = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 
    let hexColor: string = '#';

    // '#' + random hexColorValues[] element each iteration
    for(let i = 0; i < 6; i++) {
        hexColor += hexColorValues[Math.floor(Math.random() * hexColorValues.length)]; // [random Integer until 15 inclusive] 
    }

    return hexColor;
}

// RGB GENERATOR : returns random rgb color as string
const rgbColorGenerator = () : string => {
    const getRandomInteger = (min: number, max: number): number => {
        const randomResult: number = min + Math.random()*(max + 1 - min)
        return Math.floor(randomResult);
    }

    const randomRgbColor: string = `rgb(${getRandomInteger(0, 255)},${getRandomInteger(0, 255)},${getRandomInteger(0, 255)})`
    return randomRgbColor
}

//changes HTML page styles and shows color value only
const letSeeMyColor = (someColor: string): string => {
    body.style.backgroundColor =  colorDescription.style.color = someColor;
  
    const showColorValueOnly = (): string => {
        const firstColorCharacter: string = someColor.slice(0,1);

        const HexOrRgbValueOnly: string = firstColorCharacter === '#' ? someColor.slice(1, 7): //if hex, without "#"
            firstColorCharacter === 'r' ? someColor.slice(3, 16): //if rgb, without "rgb"
                'is not rgb or HEX color !'
        return HexOrRgbValueOnly;
    }    

    return colorDescription.textContent = showColorValueOnly();
}  



