document.querySelector('button').addEventListener('click', (evt) => {
    console.log(evt);
});

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
    console.log(e);
})
// input.addEventListener('keyup', () => {
//     console.log('KEYUP');
// })