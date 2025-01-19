const btn = document.querySelector('#v2');
btn.onclick = function() {
    console.log('You Clicked Me!');
    console.log('I hope this worked!');
}

function scream() {
    console.log('AAAAHHH!');
    console.log('Get Outta Here!');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!!');
}