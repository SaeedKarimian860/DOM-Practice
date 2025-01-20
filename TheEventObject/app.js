document.querySelector('button').addEventListener('click', (evt) => {
    console.log(evt);
});

// const input = document.querySelector('input');
// input.addEventListener('keydown', (e) => {
//     console.log(e.key);
//     console.log(e.code);
// })
// input.addEventListener('keyup', () => {
//     console.log('KEYUP');
// })

window.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'ArrowUp':
            console.log('up!');
            break;
        case 'ArrowDown':
            console.log('down!');
            break;
        case 'ArrowRight':
            console.log('right!');
            break;
        case 'ArrowLeft':
            console.log('left!');
            break;
        default:
            console.log('Ignored!')
    }
})