const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}




// This code changes the color of h1.innerText to white when the rgb values are all below 200
// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', () => {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;

    
//     const rgbValues = newColor.match(/\d+/g); 

   
//     if (rgbValues) {
//         const r = parseInt(rgbValues[0], 10);
//         const g = parseInt(rgbValues[1], 10);
//         const b = parseInt(rgbValues[2], 10);

       
//         if (r < 200 && g < 200 && b < 200) {
//             h1.style.color = 'white';  
//         } else {
//             h1.style.color = 'black';  
//         }

       
//         h1.innerText = newColor;
//     }
// });

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 256); // Random 
//     const g = Math.floor(Math.random() * 256); // Random 
//     const b = Math.floor(Math.random() * 256); // Random 
//     return `rgb(${r}, ${g}, ${b})`;
// };

